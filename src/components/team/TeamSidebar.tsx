'use client';

import { useEffect, useState } from 'react';

interface SidebarSection {
  id: string;
  title: string;
}

interface TeamSidebarProps {
  sections: SidebarSection[];
  phone: string;
}

export default function TeamSidebar({ sections, phone }: TeamSidebarProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-28">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">
          On This Page
        </p>
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-sm py-2 pl-3 rounded-r border-l-2 transition-colors ${
                activeId === section.id
                  ? 'text-primary-950 hover:text-primary-950 border-primary-950 font-medium bg-primary-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-700'
              }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

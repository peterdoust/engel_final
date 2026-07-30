import React from 'react'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white
">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 relative group">
            <img className='mt-[-60px] md:mt-[-200px]' src="/images/forensic-accounting-experts.png" alt="" />
            <div className="relative z-10 bg-primary-950 text-white p-10 mx-auto lg:mx-0 lg:ms-auto mt-[-50px] md:mt-[-100px]  rounded-sm shadow-[20px_20px_60px_-15px_rgba(23,37,84,0.3)] w-fit ">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg className="w-12 h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="block text-xs font-bold tracking-[0.6em] uppercase text-[#D4AF37] mb-4">Est.</span>
              <div className="flex items-baseline space-x-2">
                <span className="block text-4xl md:text-7xl font-serif italic mb-6 leading-none">1994</span>
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
              <p className="text-primary-100 text-lg leading-relaxed font-light max-w-xs transition-colors group-hover:text-white">
                Over 30 years of providing forensic accounting analysis and expert testimony to attorneys across California and the United States.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 lg:leading-[1.05] ">
              Engel & Engel <br />
              <span>Los Angeles Forensic Accounting Experts</span>
            </h2>
            <p className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-base md:text-xl mb-5">From Strategy to Testimony</p>
            <div className="flex flex-col gap-4">
              <p>
                Established in Los Angeles in 1994, <strong>Engel & Engel LLP</strong> provides forensic accounting and advisory services in complex business litigation matters across California and nationwide.
              </p>
              <p>
                We provide litigation support for plaintiffs and defendants in matters involving fraud investigations, economic damages, business valuation, bankruptcy and insolvency, and other financial matters.
              </p>
              <p>
                Engel & Engel delivers industry-leading forensic accounting analysis and clear, defensible expert testimony in high-stakes matters nationwide.
              </p>
              <p>
                Engel & Engel's forensic analysis has supported billions of dollars in court awards and defenses, and its professionals have been recognized nationally, including Forbes' 2025 Top Valuation CPAs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Industry Credentials Logo Carousel */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-carousel { animation: logo-scroll 25s linear infinite; }
        .logo-carousel:hover { animation-play-state: paused; }
      `}} />
      <div className="mt-8 pt-10 overflow-hidden">
        <div className="logo-carousel flex items-center gap-16 md:gap-24 w-max">
          {[...Array(2)].map((_, setIndex) => (
            <React.Fragment key={setIndex}>
              <div className="relative h-10 md:h-12 w-32 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-500">
                <Image src="/images/memberships/aicpa.png" alt="AICPA" fill className="object-contain" />
              </div>
              <div className="relative h-16 md:h-20 w-36 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-500">
                <Image src="/images/memberships/calcpa.png" alt="CalCPA" fill className="object-contain" />
              </div>
              <div className="relative h-16 md:h-20 w-40 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-500">
                <Image src="/images/memberships/acfe.png" alt="ACFE" fill className="object-contain" />
              </div>
              <div className="relative h-12 md:h-14 w-44 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-500">
                <Image src="/images/memberships/aira.png" alt="AIRA" fill className="object-contain" />
              </div>
              <div className="relative h-20 md:h-24 w-20 md:w-24 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-500">
                <Image src="/images/memberships/nacva.png" alt="NACVA" fill className="object-contain" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

// VARIATION 5: Interactive Cards with Flip Effect - Professional Design
export default function TeamVariation5({ teamMembers }: { teamMembers: any[] }) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Professional Header Section */}
        {/* <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Your Trusted</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-blue-300 to-cyan-300">Forensic Accounting Partners</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Decades of combined experience in forensic accounting, fraud investigation, and expert witness testimony.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2">35+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Cases Handled</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2">100+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Court Testimonies</div>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative w-full h-[500px] transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Darker gradient to prevent text overlap on face */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

                    {/* Text positioned at bottom only - no overlap with face */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{member.name}</h3>
                      <p className="text-primary-200 font-semibold mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{member.credentials}</p>
                      <p className="text-gray-100 text-sm mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{member.title}</p>

                      <div className="flex items-center justify-between gap-3">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium drop-shadow-lg">
                          {member.experience}
                        </span>
                        <span className="text-sm text-primary-200 font-medium animate-pulse drop-shadow-lg">Hover for details →</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Improved Layout */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col p-6">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-500">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          quality={95}
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 truncate">{member.name}</h3>
                        <p className="text-primary-600 text-xs font-semibold">{member.credentials}</p>
                      </div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                      {/* Description */}
                      <div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {member.description.length > 150
                            ? `${member.description.substring(0, 150)}...`
                            : member.description}
                        </p>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                          <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                          Specialties
                        </h4>
                        <div className="space-y-1.5">
                          {member.specialties.slice(0, 3).map((specialty: string, idx: number) => (
                            <div key={idx} className="flex items-start text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span className="line-clamp-2">{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                          <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                          Key Achievements
                        </h4>
                        <div className="space-y-1.5">
                          {member.achievements.slice(0, 2).map((achievement: string, idx: number) => (
                            <div key={idx} className="flex items-start text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span className="line-clamp-2">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons - Fixed at Bottom */}
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                      <Link
                        href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                        className="block w-full"
                      >
                        <Button size="sm" className="w-full text-xs font-semibold">
                          <span className="mr-1">👤</span> View Full Profile
                        </Button>
                      </Link>
                      <div className="flex gap-2">
                        <a href={`tel:${member.phone}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full text-xs">
                            <span className="mr-1">📞</span> Call
                          </Button>
                        </a>
                        <a href={`mailto:${member.email}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full text-xs">
                            <span className="mr-1">✉️</span> Email
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

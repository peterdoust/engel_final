import React from 'react'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Identity Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative inline-block mb-10">
              <div className="absolute -inset-4 border border-[#D4AF37]/30 rounded-sm translate-x-2 translate-y-2 z-0" />
              <div className="relative z-10 bg-primary-950 text-white p-10 md:p-14 rounded-sm shadow-2xl">
                <span className="block text-sm font-bold tracking-[0.5em] uppercase text-[#D4AF37] mb-2">Established</span>
                <span className="block text-6xl md:text-8xl font-serif italic mb-6">1994</span>
                <div className="h-[2px] w-16 bg-[#D4AF37] mb-6" />
                <p className="text-primary-100 text-lg leading-relaxed font-light">
                  Three decades of uncompromising financial integrity and forensic excellence.
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-gray-100">
              <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">Primary Jurisdiction</p>
              <p className="text-primary-900 font-bold text-xl">California & Nationwide</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-8 leading-tight">
              Los Angeles&apos; Premier <br />
              <span className="font-serif italic text-primary-900">Forensic Accounting Authority</span>
            </h2>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <p>
                From our home in Los Angeles, <strong>Engel & Engel LLP</strong> has spent over 25 years positioning itself as one of the nation&apos;s most respected providers of forensic accounting and advisory services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-gray-100">
                <div>
                  <h3 className="font-bold text-primary-950 uppercase tracking-widest text-xs mb-3">Clientele</h3>
                  <p className="text-base text-gray-600">Private practice law firms, Fortune 500 counsel, and middle-market enterprises.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-950 uppercase tracking-widest text-xs mb-3">Core Focus</h3>
                  <p className="text-base text-gray-600">Fraud investigation, business valuation, and high-stakes litigation support.</p>
                </div>
              </div>

              <p className="italic font-serif text-xl border-l-4 border-[#D4AF37] pl-6 py-2 text-primary-900 bg-gray-50/50">
                &quot;Our qualifications make us the right choice for developing thoughtful strategies and delivering persuasive testimony.&quot;
              </p>

              <p>
                With over 35 years of specialized industry experience, our team brings a lethal combination of deep credentials and surgical attention to detail to every case we accept.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Credentials Logo Bar - Updated with User-Provided Source URLs */}
        <div className="mt-8 pt-10 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <div className="relative h-12 md:h-16 w-40 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/elementor/thumbs/aicpa-q9lpfz4lfpwk1yewi9wruisxrxfrhika047rthpf6y.jpg" alt="AICPA" fill className="object-contain" />
            </div>
            <div className="relative h-20 md:h-24 w-32 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/2023/07/calpa.jpg" alt="CalCPA" fill className="object-contain" />
            </div>
            <div className="relative h-20 md:h-24 w-32 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/2023/07/acfe.jpg" alt="ACFE" fill className="object-contain" />
            </div>
            <div className="relative h-20 md:h-24 w-32 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/2023/07/aira.jpg" alt="AIRA" fill className="object-contain" />
            </div>
            <div className="relative h-20 md:h-24 w-40 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="https://engelandengel.com/wp-content/uploads/elementor/thumbs/nacva-q9lpiejl3b881ovxbtp2seqt0rgwdd7bc4vxg83t4a.jpg" alt="NACVA" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


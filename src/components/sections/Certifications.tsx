import React from 'react'
import Image from 'next/image'

export default function Certifications() {
  const certifications = [
    {
      name: 'CPA',
      fullName: 'Certified Public Accountant',
      image: '/images/certifications/cpa-gold.png',
      alt: 'AICPA'
    },
    {
      name: 'CFE',
      fullName: 'Certified Fraud Examiner',
      image: '/images/certifications/cfe-gold.png',
      alt: 'ACFE'
    },
    {
      name: 'CIRA',
      fullName: 'Certified Insolvency & Restructuring Advisor',
      image: '/images/certifications/cira-gold.png',
      alt: 'AIRA'
    },
    {
      name: 'CVA',
      fullName: 'Certified Valuation Analyst',
      image: '/images/certifications/cva-gold.png',
      alt: 'NACVA'
    },
    {
      name: 'MAFF',
      fullName: 'Master Analyst in Financial Forensics',
      image: '/images/certifications/maff-gold.png',
      alt: 'MAFF'
    },
    {
      name: 'ABV',
      fullName: 'Accredited in Business Valuation',
      image: '/images/certifications/abv-gold.png',
      alt: 'ABV'
    }
  ]

  return (
    <section className="relative py-24 bg-primary-950 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Proven Credibility</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Professional <span className="font-serif italic text-[#D4AF37]">Accreditations</span>
          </h2>
          <div className="h-px w-24 bg-[#D4AF37]/30 mx-auto mb-8" />
          <div className="mt-20 text-center">
            <p className="text-primary-200/50 italic font-serif text-lg">
              "The credibility of our testimony is enhanced by our exemplary credentials."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center group transition-all duration-500 hover:scale-110">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
                  sizes="(max-width: 768px) 50vw, 15vw"
                />
              </div>

            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

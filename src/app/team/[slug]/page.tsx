import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import TeamSidebar from '@/components/team/TeamSidebar';

// ────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────

interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
}

interface Stat {
  value: string;
  label: string;
}

interface TeamMember {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  experience: string;
  phone: string;
  directPhone?: string;
  extension?: string;
  email: string;
  linkedin?: string;
  image: string;
  pdfQualifications: string;
  credentialChips: string[];
  stats: Stat[];
  sections: ContentSection[];
  practiceAreas: { name: string; slug: string }[];
}

// ────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────

const teamMembers: TeamMember[] = [
  {
    slug: 'jason-a-engel',
    name: 'Jason A. Engel',
    credentials: 'CPA · CFE · CIRA · CVA · MAFF · ABV',
    title: 'Managing Partner',
    experience: '45+ Years',
    phone: '(310) 277-2220',
    directPhone: '(310) 579-0114',
    email: 'jasonengel@engelandengel.com',
    linkedin: 'jason-engel-cpa-cfe-cira-cva-maff-abv-8a44a84',
    image: '/images/team/jason-engel.jpg',
    pdfQualifications: '/pdfs/jason-engel-qualifications.pdf',
    credentialChips: [
      'Certified Public Accountant',
      'Certified Fraud Examiner',
      'Certified Insolvency & Restructuring Advisor',
      'Certified Valuation Analyst',
      'Master Analyst of Financial Forensics',
      'Accredited in Business Valuation',
    ],
    stats: [
      { value: '500+', label: 'Cases as Expert Witness' },
      { value: '45+', label: 'Years in Public Accounting' },
      { value: '100+', label: 'Business Valuations Conducted' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
          'Mr. Engel is a Certified Public Accountant and has been engaged in the practice of public accounting since 1979. His public accounting experience includes auditing, taxation, management consulting, SEC registration, and SEC reporting for public companies. His professional background includes experience at two of the Big Four accounting firms where he was a Senior Manager in both the Audit Practice and Management Consulting Practice.',
        ],
      },
      {
        id: 'expert-witness',
        title: 'Expert Witness & Forensic Accounting',
        paragraphs: [
          'Since 1982, Mr. Engel has been engaged in the practice of forensic accounting and expert testimony in connection with a variety of business litigation matters including economic damages, bankruptcy and insolvency, fraud and embezzlement, business valuation, alter ego, wrongful termination, net worth calculations, and partnership and shareholder dissolutions. He has also been engaged in accounting malpractice and other matters requiring an evaluation of financial statements and compliance with Generally Accepted Accounting Principles and Generally Accepted Auditing Standards. He has made various presentations and has published research publications on the subject of economic damages, lost profits, alter ego, bankruptcy and insolvency, and other forensic accounting topics.',
          'Mr. Engel has served as an expert witness in over 500 cases and has testified in federal, bankruptcy, and state courts. He has also testified in arbitration and has served as a court appointed accounting referee. His professional credentials include those of Certified Public Accountant (CPA), Certified Fraud Examiner (CFE), Certified Insolvency and Restructuring Advisor (CIRA), Certified Valuation Analyst (CVA), Master Analyst of Financial Forensics (MAFF), and Accredited in Business Valuation (ABV).',
        ],
      },
      {
        id: 'economic-damages',
        title: 'Economic Damages',
        paragraphs: [
          'Mr. Engel has extensive experience and expertise in investigating and developing economic damage calculations and providing expert testimony in connection with a wide variety of business litigation matters. He has earned the credential of a Master Analyst of Financial Forensics (MAFF) and has written various research publications on the subject of economic damages, lost profits, infringement damages, alter ego, and other business litigation topics.',
          'His experience and expertise include investigating and calculating economic damages in connection with lost profits, lost goodwill, lost business value, contract damages, patent infringement, trademark infringement, copyright infringement, compensatory damages, consequential damages, lost earnings, reliance damages, construction delay damages, environmental and contamination damages, unfair business competition, misappropriation of trade secrets, and lost opportunity damages. His experience and expertise also include investigating and providing expert testimony as to the elements of alter ego and fraudulent transfers.',
        ],
      },
      {
        id: 'financial-fraud',
        title: 'Financial Fraud',
        paragraphs: [
          'Mr. Engel is a Certified Fraud Examiner (CFE) and has extensive experience and expertise in investigating, detecting, and uncovering financial fraud and embezzlement. His fraud expertise includes skilled knowledge and application of specialized investigatory techniques designed to detect fraud, embezzlement, and fraudulent and misleading financial statements.',
          'Mr. Engel has provided expert testimony in connection with a variety of fraud related engagements. He has experience in conducting fraud investigations in connection with civil and criminal white collar fraud, corporate and employee embezzlement, Ponzi schemes, lapping schemes, securities fraud, insurance fraud, contract fraud, misappropriation of funds, and fraudulent and misleading financial statements.',
        ],
      },
      {
        id: 'business-valuation',
        title: 'Business Valuation',
        paragraphs: [
          'Mr. Engel is a Certified Valuation Analyst (CVA) and Accredited in Business Valuation (ABV). He has conducted in excess of 100 business valuations. His experience includes performing business valuations in a wide variety of industries including manufacturing, wholesale, construction, insurance, healthcare, distributorship, retail establishments, real estate agencies, service enterprises, import and export, franchises, and a variety of professional practices including medical, dental, accounting, and law.',
          'He has conducted business valuations in connection with economic damages, bankruptcy and insolvency, mergers and acquisitions, fraudulent transfers, minority shareholder valuations, net worth calculations, and marital, corporate, and partnership dissolutions. He has also assisted counsel in evaluating and defending a $4.2 billion hostile takeover of a national insurance company.',
        ],
      },
      {
        id: 'bankruptcy',
        title: 'Bankruptcy & Insolvency',
        paragraphs: [
          'Mr. Engel is a Certified Insolvency and Restructuring Advisor (CIRA). His experience in bankruptcy and insolvency includes court appointments by the United States Bankruptcy Court as the accountant for debtors, creditors, and Trustees under both Chapters 7 and 11 of the United States Bankruptcy Code. He also served as an accounting expert for a United States Bankruptcy Judge.',
          'Mr. Engel has testified as an expert witness in United States Bankruptcy Courts in a variety of bankruptcy issues. His bankruptcy and insolvency experience and expertise includes investigating, analyzing, and testifying as to the elements of a fraudulent transfer including reasonable equivalent value, insolvency, unreasonable small assets, and inability to pay debts as they become due. In addition, Mr. Engel\'s experience and expertise includes preference analysis, liquidation analysis, analysis of adequate protection, preparation and analysis of reorganization plans, preparation and analysis of Interim Statements and Operating Reports, financial projections, business valuations, crisis management, and fraud investigations of insiders and officers.',
          'Mr. Engel has written various research publications on the subject of bankruptcy and insolvency. He has completed a course in the study of Business Reorganization under the Bankruptcy Reform Act sponsored by the University of Southern California Law Center.',
        ],
      },
      {
        id: 'education',
        title: 'Education, Certifications & Memberships',
        paragraphs: [
          'Mr. Engel earned, in 1979, a Bachelor of Science in Business Administration with a specialty in accounting from California State University, Northridge. In 1982, he attained his CPA credentials and in 1992, he attained his CFE credentials. He attained his CVA and CIRA credentials in 1996 and his CFFA (now known as MAFF) credentials in 2003.',
          'He is a member of the California Society of Certified Public Accountants, the American Institute of Certified Public Accountants, the Management Consulting Section of the American Institute of Certified Public Accountants, the National Association of Certified Fraud Examiners, the Association of Insolvency and Restructuring Advisors, and the National Association of Certified Valuation Analysts.',
        ],
      },
    ],
    practiceAreas: [
      { name: 'Fraud Investigations', slug: 'fraud-investigation' },
      { name: 'Economic Damage Calculations', slug: 'economic-damages' },
      { name: 'Business Valuations', slug: 'business-valuation' },
      { name: 'Bankruptcy and Insolvency', slug: 'bankruptcy-insolvency' },
      { name: 'Alter Ego', slug: 'alter-ego' },
      { name: 'Fraudulent Transfers', slug: 'fraudulent-transfers' },
      { name: 'Business Interruption', slug: 'business-interruption' },
      { name: 'Intellectual Property Litigation', slug: 'intellectual-property' },
      { name: 'Real Estate Litigation', slug: 'real-estate-litigation' },
      { name: 'Construction Litigation', slug: 'construction-litigation' },
      { name: 'Employment Litigation', slug: 'employment-litigation' },
      { name: 'Personal Injury', slug: 'personal-injury' },
      { name: 'Partnership / Shareholder Disputes', slug: 'partnership-shareholder-disputes' },
    ],
  },
  {
    slug: 'brandon-j-engel',
    name: 'Brandon J. Engel',
    credentials: 'CPA · CFE',
    title: 'Partner & Forensic Accountant',
    experience: '10+ Years',
    phone: '(310) 277-2220',
    extension: 'Ext. 3',
    directPhone: '(310) 579-0115',
    email: 'brandon@engelandengel.com',
    linkedin: 'brandon-engel',
    image: '/images/team/brandon-engel.jpg',
    pdfQualifications: '/pdfs/brandon-engel-qualifications.pdf',
    credentialChips: [
      'Certified Public Accountant',
      'Certified Fraud Examiner',
    ],
    stats: [
      { value: '200+', label: 'Forensic Accounting Cases' },
      { value: '50+', label: 'Fraud Investigations' },
      { value: '100+', label: 'Economic Damage Calculations' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
          'Brandon J. Engel, CPA, CFE is a forensic accountant with over 10 years of experience in over 200 forensic accounting cases and has testified as an expert witness in deposition and trial. Brandon\'s forensic experience includes conducting financial investigations in connection with civil and criminal matters.',
          'Brandon\'s experience and expertise is highlighted in his skills and ability to investigate financial records and uncover discrepancies, hidden transactions, misstatements, fraud, and misappropriations. As a Certified Fraud Examiner (CFE), Brandon possesses specialized knowledge in investigating a variety of complex financial fraud schemes including international money laundering, embezzlement, fraudulent transfers, alter ego, and misappropriation of assets. As a highly skilled forensic investigator, Brandon also has specialized knowledge and experience in tracing funds in accordance with established legal and financial principles.',
        ],
      },
      {
        id: 'fraud-investigation',
        title: 'Fraud Investigation',
        paragraphs: [
          'Brandon has conducted over 50 fraud investigations involving a wide variety of fraudulent schemes. Brandon\'s experience and expertise in conducting fraud investigations is illustrated in his tracing of approximately $20 million of fraudulent funds that were laundered through over 150 U.S., Swiss, and Korean bank accounts to real estate, luxury cars, and Swiss bank accounts. Brandon has also assisted a local Los Angeles police detective in uncovering and documenting financial fraud and embezzlement.',
        ],
      },
      {
        id: 'economic-damages',
        title: 'Economic Damages',
        paragraphs: [
          'Brandon has prepared over 100 economic damage calculations in a wide variety of litigation matters and industries. Brandon\'s experience and expertise includes developing complex damage models that are consistent with established legal principles and able to withstand the scrutiny of the court.',
        ],
      },
      {
        id: 'business-valuation',
        title: 'Business Valuation',
        paragraphs: [
          'Brandon has been involved in a variety of business valuation engagements among a broad array of industries. Brandon\'s business valuation expertise includes conducting various business valuation approaches including market analysis, capitalization of earnings, discounted cash flow, book value, liquidation value, public company guideline method, and other generally accepted valuation methods.',
        ],
      },
      {
        id: 'education',
        title: 'Education & Certifications',
        paragraphs: [
          'Brandon holds a Bachelor of Science in Accounting from California State University, Northridge. He is a Certified Public Accountant (CPA) and Certified Fraud Examiner (CFE).',
          'He is a member of the American Institute of Certified Public Accountants (AICPA), the Association of Certified Fraud Examiners (ACFE), and the California Society of CPAs.',
        ],
      },
    ],
    practiceAreas: [
      { name: 'Fraud Investigations', slug: 'fraud-investigation' },
      { name: 'Economic Damage Calculations', slug: 'economic-damages' },
      { name: 'Business Valuations', slug: 'business-valuation' },
      { name: 'Bankruptcy and Insolvency', slug: 'bankruptcy-insolvency' },
      { name: 'Alter Ego', slug: 'alter-ego' },
      { name: 'Fraudulent Transfers', slug: 'fraudulent-transfers' },
      { name: 'Business Interruption', slug: 'business-interruption' },
      { name: 'Intellectual Property Litigation', slug: 'intellectual-property' },
      { name: 'Real Estate Litigation', slug: 'real-estate-litigation' },
      { name: 'Construction Litigation', slug: 'construction-litigation' },
      { name: 'Employment Litigation', slug: 'employment-litigation' },
      { name: 'Personal Injury', slug: 'personal-injury' },
      { name: 'Partnership / Shareholder Disputes', slug: 'partnership-shareholder-disputes' },
    ],
  },
  {
    slug: 'douglas-h-engel',
    name: 'Douglas H. Engel',
    credentials: 'CPA · MBA',
    title: 'Tax & Business Consultant',
    experience: '45+ Years',
    phone: '(310) 277-2220',
    directPhone: '(818) 710-0071',
    email: 'douglas@engelandengel.com',
    linkedin: 'douglasengelcpa',
    image: '/images/team/douglas-engel.jpg',
    pdfQualifications: '/pdfs/douglas-engel-qualifications.pdf',
    credentialChips: [
      'Certified Public Accountant',
      'Master of Business Administration',
    ],
    stats: [
      { value: '45+', label: 'Years in Public Accounting' },
      { value: 'MBA', label: 'Taxation Specialty' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
          'Mr. Douglas Engel has been engaged in public accounting since 1976, with an emphasis in tax and business consulting to high net worth individuals and related closely-held entities. In addition, he has provided forensic accounting services in connection with tax malpractice, tax issues in bankruptcy, tax issues in employee benefit plans and a variety of tax controversies.',
        ],
      },
      {
        id: 'tax-experience',
        title: 'Tax Experience',
        paragraphs: [
          'Mr. Engel\'s tax experience extends to the areas of real estate, health care, partnerships, limited liability companies, trusts, sub-chapter S corporations and foreign trusts. In this regard, he has provided services that include tax planning, estate planning, wealth succession, business consulting, partnership restructuring and partnership workouts, IRS/FTB disputes and resolutions.',
        ],
      },
      {
        id: 'forensic-tax',
        title: 'Forensic Tax Experience',
        paragraphs: [
          'Mr. Engel\'s forensic tax experience includes tax services in bankruptcy matters for creditors, debtors, and trustees. In addition, he has been appointed by the court to act as a guardian of financial assets. He has also served as an expert witness in tax matters and related financial issues.',
        ],
      },
      {
        id: 'education',
        title: 'Education & Memberships',
        paragraphs: [
          'Mr. Engel graduated from the City University of New York, Herbert H. Lehman College with a Bachelor of Science in Accounting. He also holds a Master of Business Administration in Taxation from Golden Gate University.',
          'He is a member of the California Society of Certified Public Accountants and the American Institute of Certified Public Accountants.',
        ],
      },
    ],
    practiceAreas: [
      { name: 'Real Estate Taxation', slug: 'real-estate-taxation' },
      { name: 'Estate Planning', slug: 'estate-planning' },
      { name: 'IRS and FTB Disputes', slug: 'irs-ftb-disputes' },
      { name: 'Tax Consulting', slug: 'tax-consulting' },
      { name: 'Litigation Support Services', slug: 'litigation-support' },
    ],
  },
];

// ────────────────────────────────────────────────────────
// Page Component
// ────────────────────────────────────────────────────────

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return <div>Member not found</div>;
  }

  // Build sidebar sections list (content sections + practice areas)
  const sidebarSections = [
    ...member.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: 'practice-areas', title: 'Practice Areas' },
  ];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.title,
    worksFor: {
      '@type': 'Organization',
      name: 'Engel & Engel LLP',
    },
    email: member.email,
    telephone: member.phone,
    image: member.image,
    url: `https://engeldemo.vercel.app/team/${member.slug}`,
    sameAs: member.linkedin ? `https://www.linkedin.com/in/${member.linkedin}` : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="min-h-screen">
        {/* ══════════ HERO ══════════ */}
        <section className="relative pt-16 lg:pt-20 bg-primary-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="flex flex-col sm:flex-row items-start gap-10 lg:gap-16 bg-white rounded-xl p-5 md:p-10">
              {/* Portrait */}
              <div className="w-auto sm:max-w-52 md:max-w-80 lg:max-w-96 flex-shrink-0 animate-fade-in-up">
                <div className="relative mx-auto lg:mx-0">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary-400/25 rounded-sm" />
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.credentials}`}
                    width={300}
                    height={430}
                    className="relative w-full rounded-sm shadow-lg h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Name & Credentials */}
              <div className="flex-1 pt-3">
                <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3">
                  {member.title}
                </p>
                <h1 className=" text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-4">
                  {member.name}
                </h1>
                <p className="text-base text-gray-500 font-medium tracking-wide mb-6">
                  {member.credentials}
                </p>

                {/* Credential chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.credentialChips.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs font-medium bg-primary-50 text-primary-950 px-3 py-1.5 rounded"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Key Stats */}
                {/* <div className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
                  {member.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className=" text-3xl font-bold text-primary-900 text-center mb-3">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div> */}

                {/* Links */}
                <div className="flex items-center justify-start mt-8">
                  <div className="flex space-x-4">
                    {/* Office Phone */}
                    <a href={`tel:${member.phone.replace(/[^\d+]/g, '')}`} className="group relative flex items-center justify-center w-10 h-10 bg-primary-50 rounded-md transition-all duration-300 hover:bg-primary-950 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(29,78,216,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-950 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="absolute -bottom-8 scale-0 transition-all group-hover:scale-100 text-primary-950 text-xs font-bold uppercase tracking-widest">Call</span>
                    </a>

                    {/* Direct Phone */}
                    {member.directPhone && (
                      <a href={`tel:${member.directPhone.replace(/[^\d+]/g, '')}`} className="group relative flex items-center justify-center w-10 h-10 bg-primary-50 rounded-md transition-all duration-300 hover:bg-primary-950 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(29,78,216,0.4)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-950 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="absolute -bottom-8 scale-0 transition-all group-hover:scale-100 text-primary-950 text-xs font-bold uppercase tracking-widest">Call</span>
                      </a>
                    )}

                    {/* Email */}
                    <a href={`mailto:${member.email}`} className="group relative flex items-center justify-center w-10 h-10 bg-primary-50 rounded-md transition-all duration-300 hover:bg-primary-950 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(29,78,216,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-950 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="absolute -bottom-8 scale-0 transition-all group-hover:scale-100 text-primary-950 text-xs font-bold uppercase tracking-widest">Mail</span>
                    </a>

                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a href={`https://www.linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-10 h-10 bg-primary-50 rounded-md transition-all duration-300 hover:bg-primary-950 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(29,78,216,0.4)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-950 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span className="absolute -bottom-8 scale-0 transition-all group-hover:scale-100 text-primary-950 text-xs font-bold uppercase tracking-widest">Connect</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* PDF */}
                <a
                  href={member.pdfQualifications}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 mt-8 inline-block"
                >
                  {/* <Button size="lg" className="w-auto bg-primary-950  hover:bg-primary-800 shadow-lg hover:shadow-xl transition-all rounded">
                    View Qualifications
                  </Button> */}
                  <Button className="w-full py-5 bg-primary-950 hover:bg-gold text-white font-bold tracking-[0.2em] uppercase text-xs transition-all duration-500 rounded group relative overflow-hidden">
                    <span className="relative z-10">View Qualifications</span>
                    <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ MAIN CONTENT ══════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 pt-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar (sticky, desktop only) */}
            <TeamSidebar sections={sidebarSections} phone={member.phone} />

            {/* Content Body */}
            <div className="flex-1 min-w-0">
              {/* Content Sections */}
              {member.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-14">
                  <h2 className=" text-2xl font-semibold text-primary-950 mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-gray-600">
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Practice Areas */}
              <section id="practice-areas">
                <h2 className=" text-2xl font-semibold text-primary-950 mb-6">
                  Practice Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {member.practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="group flex items-center gap-3 py-2.5 border-b border-gray-200 hover:border-primary-950 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-primary-950 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-600 group-hover:text-primary-950 transition-all -ml-7 group-hover:ml-0">
                        {area.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

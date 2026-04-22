import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const calculators = [
  {
    title: 'Lost Profits Calculator',
    description: 'Calculate economic damages from lost business profits',
    icon: '📈',
    href: '/resources/lost-profits-calculator',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800'
  },
  {
    title: 'Present Value Calculator',
    description: 'Determine present value of future cash flows',
    icon: '💰',
    href: '/resources/present-value-calculator',
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800'
  },
  {
    title: 'Employment Damages Calculator',
    description: 'Calculate damages in employment litigation',
    icon: '👔',
    href: '/resources/employment-damages-calculator',
    color: 'from-purple-600 to-purple-700',
    hoverColor: 'hover:from-purple-700 hover:to-purple-800'
  },
  {
    title: 'CAGR Calculator',
    description: 'Calculate Compound Annual Growth Rate',
    icon: '📊',
    href: '/resources/compound-annual-growth-rate-calculator',
    color: 'from-indigo-600 to-indigo-700',
    hoverColor: 'hover:from-indigo-700 hover:to-indigo-800'
  },
  {
    title: 'Financial Ratio Calculator',
    description: 'Analyze financial health with ratio calculations',
    icon: '📋',
    href: '/resources/financial-ratio-calculator',
    color: 'from-teal-600 to-teal-700',
    hoverColor: 'hover:from-teal-700 hover:to-teal-800'
  },
  {
    title: 'Interest Calculator',
    description: 'Calculate simple and compound interest',
    icon: '💸',
    href: '/resources/interest-calculator',
    color: 'from-orange-600 to-orange-700',
    hoverColor: 'hover:from-orange-700 hover:to-orange-800'
  },
  {
    title: 'Compound Interest Calculator',
    description: 'Calculate compound interest with contributions',
    icon: '🌱',
    href: '/resources/compound-interest-calculator',
    color: 'from-emerald-600 to-emerald-700',
    hoverColor: 'hover:from-emerald-700 hover:to-emerald-800'
  },
  {
    title: 'Depreciation Calculator',
    description: 'Calculate asset depreciation using multiple methods',
    icon: '📉',
    href: '/resources/depreciation-calculator',
    color: 'from-red-600 to-red-700',
    hoverColor: 'hover:from-red-700 hover:to-red-800'
  }
]

interface CalculatorNavigationProps {
  currentPath?: string
}

export default function CalculatorNavigation({ currentPath }: CalculatorNavigationProps) {
  const otherCalculators = calculators.filter(calc => calc.href !== currentPath)

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Other Financial Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete suite of professional financial analysis tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherCalculators.map((calculator, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {calculator.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calculator.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {calculator.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <Link href={calculator.href}>
                    <Button
                      as="span"
                      className={`w-full bg-gradient-to-r ${calculator.color} ${calculator.hoverColor} text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 text-sm`}
                    >
                      Open Calculator
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <Button as="span" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  All Calculators
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  as="span"
                  variant="outline"
                  className="border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  Get Expert Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

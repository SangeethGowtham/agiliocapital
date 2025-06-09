import React from 'react';
import { TrendingUp, CheckCircle, Award, Users, Globe, DollarSign } from 'lucide-react';

const DealsPage: React.FC = () => {
  const deals = [
    {
      title: 'Series A Funding Round',
      company: 'TechCorp Solutions',
      amount: '$5.2M',
      sector: 'Technology',
      type: 'Seed & Angel Funding',
      year: '2024',
      description: 'Successfully led Series A funding round for B2B SaaS platform specializing in enterprise automation solutions.',
      highlights: [
        'Connected with 3 strategic investors',
        'Achieved 2.5x valuation increase',
        'Structured preferred stock with board seats',
        'Post-funding strategic advisory ongoing'
      ]
    },
    {
      title: 'Debt Syndication Facility',
      company: 'Manufacturing Inc.',
      amount: '$12M',
      sector: 'Manufacturing',
      type: 'Loan & Debt Syndication',
      year: '2024',
      description: 'Structured comprehensive debt facility for equipment financing and working capital expansion.',
      highlights: [
        'Syndicated across 4 leading banks',
        'Secured competitive interest rates',
        'Flexible covenant structure',
        '7-year term with step-down pricing'
      ]
    },
    {
      title: 'Strategic Partnership Deal',
      company: 'HealthTech Ventures',
      amount: '$3.8M',
      sector: 'Healthcare',
      type: 'Strategic Partnerships',
      year: '2023',
      description: 'Facilitated strategic partnership with leading pharmaceutical company for joint product development.',
      highlights: [
        'Revenue sharing agreement structured',
        'IP licensing terms negotiated',
        'Market expansion facilitated',
        'Joint R&D program established'
      ]
    },
    {
      title: 'Corporate Acquisition',
      company: 'RetailTech Solutions',
      amount: '$8.5M',
      sector: 'Retail Technology',
      type: 'Corporate Finance',
      year: '2023',
      description: 'Advised on strategic acquisition of e-commerce technology platform by retail conglomerate.',
      highlights: [
        'Buy-side advisory services',
        'Due diligence coordination',
        'Valuation and deal structuring',
        'Successful integration planning'
      ]
    },
    {
      title: 'Structured Finance Solution',
      company: 'Infrastructure Projects Ltd.',
      amount: '$15M',
      sector: 'Infrastructure',
      type: 'Structured Finance',
      year: '2023',
      description: 'Developed innovative structured finance solution for renewable energy infrastructure project.',
      highlights: [
        'Asset-backed securities structure',
        'Risk mitigation mechanisms',
        'Tax-efficient structuring',
        'Long-term financing secured'
      ]
    },
    {
      title: 'Growth Capital Funding',
      company: 'EdTech Innovations',
      amount: '$4.2M',
      sector: 'Education Technology',
      type: 'Seed & Angel Funding',
      year: '2023',
      description: 'Raised growth capital for online education platform targeting professional skill development.',
      highlights: [
        'Pre-Series A funding round',
        'Strategic investor participation',
        'Mentorship program inclusion',
        'Board advisory arrangements'
      ]
    }
  ];

  const sectors = [
    { name: 'Technology', deals: 15, icon: <Globe className="h-6 w-6" /> },
    { name: 'Healthcare', deals: 12, icon: <Users className="h-6 w-6" /> },
    { name: 'Manufacturing', deals: 10, icon: <Award className="h-6 w-6" /> },
    { name: 'Financial Services', deals: 8, icon: <DollarSign className="h-6 w-6" /> },
    { name: 'Infrastructure', deals: 6, icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const stats = [
    { number: '50+', label: 'Total Deals Closed' },
    { number: '₹500Cr+', label: 'Transaction Value' },
    { number: '95%', label: 'Success Rate' },
    { number: '8', label: 'Industry Sectors' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Successful Deals</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Showcasing our track record of successful transactions across multiple sectors and financial instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Transactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent successful deals across various sectors and transaction types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deals.map((deal, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {deal.sector}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{deal.amount}</div>
                      <div className="text-sm text-gray-500">{deal.year}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                  <p className="text-lg text-gray-600 mb-1">{deal.company}</p>
                  <p className="text-sm text-blue-600 font-semibold mb-4">{deal.type}</p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{deal.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    {deal.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 px-8 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Transaction Status</span>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Successfully Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sector Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deals span across multiple industry sectors, demonstrating our broad expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-blue-600 mb-3 flex justify-center">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h3>
                <p className="text-2xl font-bold text-blue-600">{sector.deals}</p>
                <p className="text-sm text-gray-600">Deals Closed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to Learn More About Our Deals?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Contact us to discuss detailed case studies and how our expertise can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:agiliocap@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Case Studies
            </a>
            <a
              href="https://www.linkedin.com/company/agilio-capital-partners"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealsPage;
import React from 'react';
import { TrendingUp, CheckCircle, Award, Users, Globe, DollarSign } from 'lucide-react';

const DealsPage: React.FC = () => {
  const deals = [
    {
      title: 'Meridian Technologies Acquisition',
      company: 'Apex Global Solutions',
      amount: '$18.5M',
      sector: 'Technology',
      type: 'M&A Advisory',
      year: '2024',
      description: 'Successfully advised on strategic acquisition of Meridian Technologies by Apex Global Solutions, creating synergies in AI and machine learning capabilities.',
      highlights: [
        'Strategic buyer identification and approach',
        'Comprehensive due diligence coordination',
        'Valuation optimization and deal structuring',
        'Successful integration planning and execution'
      ]
    },
    {
      title: 'Pinnacle Healthcare Merger',
      company: 'Summit Medical Group',
      amount: '$32M',
      sector: 'Healthcare',
      type: 'Merger Advisory',
      year: '2024',
      description: 'Facilitated strategic merger between Pinnacle Healthcare and Summit Medical Group, creating a leading healthcare services provider.',
      highlights: [
        'Merger structure design and optimization',
        'Regulatory approval coordination',
        'Stakeholder alignment and communication',
        'Post-merger integration support'
      ]
    },
    {
      title: 'Vertex Energy Series B',
      company: 'Vertex Energy Solutions',
      amount: '$15.2M',
      sector: 'Clean Energy',
      type: 'Venture Capital',
      year: '2024',
      description: 'Led Series B funding round for renewable energy technology platform specializing in solar and wind energy solutions.',
      highlights: [
        'Investor targeting and engagement',
        'Growth strategy development',
        'Term sheet negotiation and structuring',
        'Board composition and governance setup'
      ]
    },
    {
      title: 'Quantum Analytics IPO',
      company: 'Quantum Analytics Corp',
      amount: '$52M',
      sector: 'Data Analytics',
      type: 'IPO Advisory',
      year: '2023',
      description: 'Provided comprehensive IPO advisory services for data analytics company, achieving successful public listing.',
      highlights: [
        'IPO readiness assessment and preparation',
        'Regulatory compliance and documentation',
        'Investor roadshow coordination',
        'Successful public market debut'
      ]
    },
    {
      title: 'Nexus Logistics Buyout',
      company: 'Nexus Logistics Inc.',
      amount: '$28M',
      sector: 'Logistics',
      type: 'Management Buyout',
      year: '2023',
      description: 'Advised on management buyout of logistics technology company, enabling management team to acquire controlling stake.',
      highlights: [
        'Management team financing structure',
        'Seller negotiation and deal terms',
        'Debt and equity optimization',
        'Transition planning and execution'
      ]
    },
    {
      title: 'Catalyst Innovations Series A',
      company: 'Catalyst Innovations',
      amount: '$12.8M',
      sector: 'Financial Technology',
      type: 'Seed & Angel Funding',
      year: '2023',
      description: 'Raised Series A funding for digital payment platform targeting emerging markets with innovative mobile solutions.',
      highlights: [
        'Product-market fit validation',
        'Strategic investor participation',
        'Regulatory compliance framework',
        'Market expansion strategy'
      ]
    }
  ];

  const sectors = [
    { name: 'Technology', deals: 22, icon: <Globe className="h-6 w-6" /> },
    { name: 'Healthcare', deals: 18, icon: <Users className="h-6 w-6" /> },
    { name: 'Financial Services', deals: 15, icon: <DollarSign className="h-6 w-6" /> },
    { name: 'Clean Energy', deals: 12, icon: <TrendingUp className="h-6 w-6" /> },
    { name: 'Manufacturing', deals: 10, icon: <Award className="h-6 w-6" /> }
  ];

  const stats = [
    { number: '85+', label: 'Total Investments Closed' },
    { number: '₹2200M+', label: 'Transaction Value' },
    { number: '98%', label: 'Success Rate' },
    { number: '15', label: 'Industry Sectors' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative text-gray-800 py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 text-gray-800">Our Investment Portfolio</h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
              Showcasing our track record of successful investments across multiple sectors and financial instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="text-4xl font-poppins font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Recent Transactions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Explore our recent successful investments across various sectors and transaction types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deals.map((deal, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold font-poppins bg-purple-100 text-primary-700">
                      {deal.sector}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-poppins font-bold text-green-600">{deal.amount}</div>
                      <div className="text-sm text-gray-500 font-inter">{deal.year}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">{deal.title}</h3>
                  <p className="text-lg text-gray-600 mb-1 font-inter">{deal.company}</p>
                  <p className="text-sm font-semibold mb-4 font-inter text-primary-600">
                    {deal.type}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 font-inter">{deal.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3 font-poppins">Key Highlights:</h4>
                    {deal.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm font-inter">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 px-8 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-inter">Investment Status</span>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold font-inter">Successfully Completed</span>
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
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Sector Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Our investments span across multiple industry sectors, demonstrating our broad expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-primary-600 mb-3 flex justify-center">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-poppins">{sector.name}</h3>
                <p className="text-2xl font-poppins font-bold text-primary-600">{sector.deals}</p>
                <p className="text-sm text-gray-500 font-inter">Investments</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
            Want to Learn More About Our Investments?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed font-inter">
            Contact us to discuss detailed case studies and how our expertise can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:agiliocap@gmail.com"
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Case Studies
            </a>
            <a
              href="https://www.linkedin.com/in/t-m-durai-b913356/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors"
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
import React from 'react';
import { TrendingUp, CheckCircle, Award, Users, Globe, DollarSign } from 'lucide-react';

const DealsPage: React.FC = () => {
  const deals = [
    {
      title: 'TechVision Solutions Acquisition',
      company: 'GlobalTech Corporation',
      amount: '$15.2M',
      sector: 'Technology',
      type: 'M&A Advisory',
      year: '2024',
      description: 'Successfully advised on strategic acquisition of TechVision Solutions by GlobalTech Corporation, creating synergies in AI and machine learning capabilities.',
      highlights: [
        'Strategic buyer identification and approach',
        'Comprehensive due diligence coordination',
        'Valuation optimization and deal structuring',
        'Successful integration planning and execution'
      ]
    },
    {
      title: 'MediCare Group Merger',
      company: 'HealthFirst Systems',
      amount: '$28M',
      sector: 'Healthcare',
      type: 'Merger Advisory',
      year: '2024',
      description: 'Facilitated strategic merger between MediCare Group and HealthFirst Systems, creating a leading healthcare services provider.',
      highlights: [
        'Merger structure design and optimization',
        'Regulatory approval coordination',
        'Stakeholder alignment and communication',
        'Post-merger integration support'
      ]
    },
    {
      title: 'GreenEnergy Systems Series B',
      company: 'GreenEnergy Systems',
      amount: '$12.8M',
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
      title: 'DataCore Technologies IPO',
      company: 'DataCore Technologies',
      amount: '$45M',
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
      title: 'SmartLogistics Buyout',
      company: 'SmartLogistics Inc.',
      amount: '$22M',
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
      title: 'FinTech Innovations Series A',
      company: 'FinTech Innovations',
      amount: '$8.5M',
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
    { name: 'Technology', deals: 18, icon: <Globe className="h-6 w-6" /> },
    { name: 'Healthcare', deals: 15, icon: <Users className="h-6 w-6" /> },
    { name: 'Financial Services', deals: 12, icon: <DollarSign className="h-6 w-6" /> },
    { name: 'Clean Energy', deals: 10, icon: <TrendingUp className="h-6 w-6" /> },
    { name: 'Manufacturing', deals: 8, icon: <Award className="h-6 w-6" /> }
  ];

  const stats = [
    { number: '75+', label: 'Total Deals Closed' },
    { number: '₹1500Cr+', label: 'Transaction Value' },
    { number: '95%', label: 'Success Rate' },
    { number: '12', label: 'Industry Sectors' }
  ];

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(37, 70, 101, 0.8), rgba(37, 70, 101, 0.75))`
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">Our Successful Deals</h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-inter">
              Showcasing our track record of successful transactions across multiple sectors and financial instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-dark-100/80 backdrop-blur-md p-8 rounded-xl shadow-neumorphic border border-primary-600/20">
                <div className="text-4xl font-poppins font-bold text-primary-400 mb-2">{stat.number}</div>
                <div className="text-dark-500 font-medium font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-4">
              Recent Transactions
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto font-inter">
              Explore our recent successful deals across various sectors and transaction types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deals.map((deal, index) => (
              <div key={index} className="bg-dark-100/80 backdrop-blur-md rounded-2xl shadow-neumorphic border border-primary-600/20 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-semibold font-poppins border text-white"
                      style={{
                        backgroundColor: 'rgba(37, 70, 101, 0.2)',
                        borderColor: 'rgba(37, 70, 101, 0.3)'
                      }}
                    >
                      {deal.sector}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-poppins font-bold text-green-400">{deal.amount}</div>
                      <div className="text-sm text-dark-500 font-inter">{deal.year}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-poppins font-bold text-primary-300 mb-2">{deal.title}</h3>
                  <p className="text-lg text-dark-500 mb-1 font-inter">{deal.company}</p>
                  <p 
                    className="text-sm font-semibold mb-4 font-inter"
                    style={{ color: '#254665' }}
                  >
                    {deal.type}
                  </p>
                  
                  <p className="text-dark-500 leading-relaxed mb-6 font-inter">{deal.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-300 mb-3 font-poppins">Key Highlights:</h4>
                    {deal.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-500 text-sm font-inter">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dark-200/50 px-8 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-500 font-inter">Transaction Status</span>
                    <div className="flex items-center text-green-400">
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
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-4">
              Sector Expertise
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto font-inter">
              Our deals span across multiple industry sectors, demonstrating our broad expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-dark-100/80 backdrop-blur-md p-6 rounded-xl shadow-neumorphic text-center border border-primary-600/20">
                <div className="text-primary-400 mb-3 flex justify-center">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-300 mb-2 font-poppins">{sector.name}</h3>
                <p className="text-2xl font-poppins font-bold text-primary-400">{sector.deals}</p>
                <p className="text-sm text-dark-500 font-inter">Deals Closed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section 
        className="py-20"
        style={{
          background: `linear-gradient(135deg, rgba(37, 70, 101, 0.8), rgba(37, 70, 101, 0.7), rgba(37, 70, 101, 0.6))`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
            Want to Learn More About Our Deals?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed font-inter">
            Contact us to discuss detailed case studies and how our expertise can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:agiliocap@gmail.com"
              className="bg-white text-[#254665] px-8 py-4 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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
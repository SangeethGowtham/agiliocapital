import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Shield, Users, DollarSign, FileText, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicePageProps {
  serviceType: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceType }) => {
  const getServiceData = (type: string) => {
    switch (type) {
      case 'seed-angel':
        return {
          title: 'Seed & Angel Funding',
          subtitle: 'Connecting Startups with the Right Investors',
          icon: <TrendingUp className="h-12 w-12" />,
          description: 'We specialize in helping early-stage startups secure seed and angel funding by connecting them with the right investors and structuring deals that maximize value for all parties.',
          features: [
            'Investor identification and matching',
            'Pitch deck development and refinement',
            'Due diligence coordination',
            'Term sheet negotiation',
            'Legal documentation support',
            'Post-funding strategic advisory'
          ],
          process: [
            { step: '1', title: 'Initial Assessment', description: 'Comprehensive evaluation of your business model, market opportunity, and funding requirements.' },
            { step: '2', title: 'Investor Targeting', description: 'Identification and approach to suitable angel investors and seed funds.' },
            { step: '3', title: 'Preparation', description: 'Development of compelling pitch materials and due diligence preparation.' },
            { step: '4', title: 'Negotiation', description: 'Term sheet negotiation and deal structuring to optimize outcomes.' },
            { step: '5', title: 'Closing', description: 'Legal documentation and transaction closure support.' }
          ],
          benefits: [
            'Access to extensive investor network',
            'Professional pitch deck development',
            'Optimized deal terms and valuation',
            'Reduced fundraising timeline',
            'Strategic investor matching'
          ]
        };

      case 'corporate-finance':
        return {
          title: 'Corporate Finance & Debt Advisory',
          subtitle: 'Strategic Financial Solutions for Growth',
          icon: <Target className="h-12 w-12" />,
          description: 'Comprehensive corporate finance advisory services including M&A, restructuring, and debt advisory to help businesses optimize their capital structure and achieve strategic objectives.',
          features: [
            'Mergers & Acquisitions advisory',
            'Corporate restructuring',
            'Valuation and financial modeling',
            'Capital structure optimization',
            'Strategic planning and execution',
            'Financial due diligence'
          ],
          process: [
            { step: '1', title: 'Strategic Analysis', description: 'Comprehensive analysis of your business and strategic objectives.' },
            { step: '2', title: 'Options Evaluation', description: 'Evaluation of various corporate finance alternatives and strategies.' },
            { step: '3', title: 'Structure Design', description: 'Design of optimal transaction structure and financing arrangements.' },
            { step: '4', title: 'Execution', description: 'Professional execution of the chosen strategy with expert guidance.' },
            { step: '5', title: 'Integration', description: 'Post-transaction integration and performance monitoring support.' }
          ],
          benefits: [
            'Optimized capital structure',
            'Enhanced business valuation',
            'Strategic growth opportunities',
            'Risk mitigation strategies',
            'Professional deal execution'
          ]
        };

      case 'loan-debt':
        return {
          title: 'Loan & Debt Syndication',
          subtitle: 'Optimizing Capital Structure Through Strategic Debt',
          icon: <Shield className="h-12 w-12" />,
          description: 'Expert debt syndication services to help businesses secure optimal financing terms through strategic loan structuring and lender relationships.',
          features: [
            'Debt syndication and structuring',
            'Lender identification and approach',
            'Term sheet negotiation',
            'Covenant structuring',
            'Refinancing strategies',
            'Working capital optimization'
          ],
          process: [
            { step: '1', title: 'Requirement Analysis', description: 'Detailed analysis of your debt requirements and financing objectives.' },
            { step: '2', title: 'Market Research', description: 'Comprehensive lender market research and selection.' },
            { step: '3', title: 'Proposal Development', description: 'Development of compelling credit proposals and documentation.' },
            { step: '4', title: 'Negotiation', description: 'Professional negotiation of terms, covenants, and pricing.' },
            { step: '5', title: 'Documentation', description: 'Legal documentation review and transaction closure.' }
          ],
          benefits: [
            'Competitive interest rates',
            'Flexible loan terms',
            'Diversified lender base',
            'Optimal covenant structure',
            'Reduced financing costs'
          ]
        };

      case 'structured-finance':
        return {
          title: 'Structured Finance',
          subtitle: 'Complex Financial Solutions for Unique Requirements',
          icon: <DollarSign className="h-12 w-12" />,
          description: 'Sophisticated structured finance solutions including asset-backed securities, project finance, and complex financial instruments tailored to specific business needs.',
          features: [
            'Asset-backed securities structuring',
            'Project finance advisory',
            'Securitization services',
            'Complex derivatives structuring',
            'Risk management solutions',
            'Regulatory compliance support'
          ],
          process: [
            { step: '1', title: 'Structure Analysis', description: 'Analysis of underlying assets and financing requirements.' },
            { step: '2', title: 'Product Design', description: 'Design of appropriate structured finance instruments.' },
            { step: '3', title: 'Risk Assessment', description: 'Comprehensive risk analysis and mitigation strategies.' },
            { step: '4', title: 'Documentation', description: 'Legal structuring and comprehensive documentation.' },
            { step: '5', title: 'Implementation', description: 'Professional implementation and ongoing support.' }
          ],
          benefits: [
            'Customized financing solutions',
            'Enhanced liquidity management',
            'Risk transfer mechanisms',
            'Regulatory compliance',
            'Cost-effective structures'
          ]
        };

      case 'strategic-partnerships':
        return {
          title: 'Strategic Partnerships',
          subtitle: 'Facilitating Value-Creating Business Alliances',
          icon: <Users className="h-12 w-12" />,
          description: 'We facilitate strategic partnerships, joint ventures, and alliances that create synergies and drive business growth through collaborative relationships.',
          features: [
            'Strategic partner identification',
            'Joint venture structuring',
            'Alliance negotiation',
            'Partnership documentation',
            'Synergy analysis and capture',
            'Performance monitoring'
          ],
          process: [
            { step: '1', title: 'Strategic Review', description: 'Analysis of your strategic objectives and partnership requirements.' },
            { step: '2', title: 'Partner Search', description: 'Identification and evaluation of potential strategic partners.' },
            { step: '3', title: 'Initial Negotiations', description: 'Facilitation of initial discussions and term negotiations.' },
            { step: '4', title: 'Structure Design', description: 'Design of optimal partnership structure and governance.' },
            { step: '5', title: 'Implementation', description: 'Support for partnership implementation and integration.' }
          ],
          benefits: [
            'Access to new markets',
            'Operational synergies',
            'Risk sharing mechanisms',
            'Enhanced capabilities',
            'Accelerated growth'
          ]
        };

      case 'cfo-services':
        return {
          title: 'CFO Services',
          subtitle: 'Comprehensive Financial Leadership Solutions',
          icon: <FileText className="h-12 w-12" />,
          description: 'Professional CFO services providing strategic financial leadership, planning, and management for businesses seeking expert financial guidance.',
          features: [
            'Strategic financial planning',
            'Financial reporting and analysis',
            'Cash flow management',
            'Budget preparation and monitoring',
            'Investor relations support',
            'Risk management frameworks'
          ],
          process: [
            { step: '1', title: 'Assessment', description: 'Comprehensive assessment of your financial management needs.' },
            { step: '2', title: 'Planning', description: 'Development of strategic financial plans and frameworks.' },
            { step: '3', title: 'Implementation', description: 'Implementation of financial systems and processes.' },
            { step: '4', title: 'Monitoring', description: 'Ongoing monitoring and performance management.' },
            { step: '5', title: 'Optimization', description: 'Continuous optimization of financial operations.' }
          ],
          benefits: [
            'Professional financial leadership',
            'Strategic decision support',
            'Improved financial controls',
            'Enhanced reporting capabilities',
            'Cost-effective expertise'
          ]
        };

      default:
        return {
          title: 'Service',
          subtitle: 'Professional Financial Advisory',
          icon: <Target className="h-12 w-12" />,
          description: 'Professional financial advisory services.',
          features: [],
          process: [],
          benefits: []
        };
    }
  };

  const service = getServiceData(serviceType);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-200 mb-4">
                {service.icon}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">{service.subtitle}</p>
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional financial services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Service Overview
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Service?
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional benefits"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today to discuss how our {service.title.toLowerCase()} services can help your business achieve its financial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:agiliocap@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
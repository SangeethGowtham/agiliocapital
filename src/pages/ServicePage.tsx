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
          subtitle: 'Connecting Early Stage Enterprises with Capital',
          icon: <TrendingUp className="h-12 w-12" />,
          description: 'We partner with early and concept stage enterprises, connect them to venture capital and seed, accelerator, HNI angel investors and unsecured loans to realize the capital, and stay with the journey of building a maverick enterprise.',
          features: [
            'Venture Capital and Seed Funding',
            'Accelerator Program Connections',
            'HNI Angel Investor Network',
            'Unsecured Business Loans',
            'Venture Debt Solutions',
            'Revenue Based Working Capital',
            'CCD and Structured Investments'
          ],
          process: [
            { step: '1', title: 'Initial Assessment', description: 'Comprehensive evaluation of your business model, market opportunity, and funding requirements.' },
            { step: '2', title: 'Investor Targeting', description: 'Identification and approach to suitable angel investors and seed funds from our extensive network.' },
            { step: '3', title: 'Preparation', description: 'Development of compelling pitch materials and due diligence preparation.' },
            { step: '4', title: 'Negotiation', description: 'Term sheet negotiation and deal structuring to optimize outcomes.' },
            { step: '5', title: 'Ongoing Support', description: 'Legal, risk, market entry, government support, compliance and governance guidance.' }
          ],
          benefits: [
            'Access to extensive investor network',
            'Professional pitch deck development',
            'Legal and compliance guidance',
            'Market entry strategy support',
            'Government support navigation',
            'Ongoing mentorship and advisory'
          ]
        };

      case 'corporate-finance':
        return {
          title: 'Private Equity & Venture Capital',
          subtitle: 'Growth Capital for Mature Enterprises',
          icon: <Target className="h-12 w-12" />,
          description: 'Equity and Growth capital can be arranged from large PE| VC funds, Family offices and Strategic Investors for mature and potential business. OCPS and CCPS for short to long term maturities from large domestic and international investors.',
          features: [
            'Private Equity Fund Connections',
            'Venture Capital Arrangements',
            'Family Office Networks',
            'Strategic Investor Partnerships',
            'OCPS and CCPS Structuring',
            'Pre-IPO and IPO Funding',
            'International Capital Markets Access',
            'SME Exchange Listings'
          ],
          process: [
            { step: '1', title: 'Strategic Analysis', description: 'Comprehensive analysis of your business and growth capital requirements.' },
            { step: '2', title: 'Capital Structure Design', description: 'Design optimal equity structure with OCPS/CCPS for various maturities.' },
            { step: '3', title: 'Investor Matching', description: 'Connect with suitable PE/VC funds, family offices, and strategic investors.' },
            { step: '4', title: 'International Access', description: 'Facilitate access to international stock exchanges and foreign capital.' },
            { step: '5', title: 'IPO Preparation', description: 'Support pre-IPO readiness and eventual main board listing.' }
          ],
          benefits: [
            'Access to large PE/VC funds',
            'International capital markets',
            'Pre-IPO preparation support',
            'Strategic investor connections',
            'FDI and ECB facilitation',
            'SME to main board progression'
          ]
        };

      case 'cfo-services':
        return {
          title: 'CFO & Support Services',
          subtitle: 'Comprehensive Financial Leadership Solutions',
          icon: <FileText className="h-12 w-12" />,
          description: 'The entire financial and compliance related functions can be done by us. We operate either independently or in conjunction with your finance team and provide adequate support for comprehensive business operations.',
          features: [
            'Business Plan Preparation',
            'Internal and External Audit Support',
            'Product, Credit and Process Manual Preparation',
            'ROC, MCA, Secretarial Services',
            'IT and LMS, LOS Services',
            'Rating Assistance',
            'NCD Private Placement',
            'NBFC License and Acquisitions',
            'Strategic Partnerships and Alliances'
          ],
          process: [
            { step: '1', title: 'Assessment', description: 'Comprehensive assessment of your financial management and compliance needs.' },
            { step: '2', title: 'System Setup', description: 'Implementation of financial systems, processes, and compliance frameworks.' },
            { step: '3', title: 'Documentation', description: 'Preparation of business plans, manuals, and regulatory documentation.' },
            { step: '4', title: 'Compliance Management', description: 'Ongoing ROC, MCA, and secretarial services management.' },
            { step: '5', title: 'Strategic Support', description: 'Rating assistance, licensing support, and strategic partnership facilitation.' }
          ],
          benefits: [
            'Complete financial function outsourcing',
            'Regulatory compliance management',
            'Professional documentation support',
            'NBFC licensing expertise',
            'Strategic partnership facilitation',
            'Cost-effective financial leadership'
          ]
        };

      case 'loan-debt-syndication':
        return {
          title: 'Debt Solutions & Working Capital',
          subtitle: 'Comprehensive Debt and Working Capital Solutions',
          icon: <Shield className="h-12 w-12" />,
          description: 'Comprehensive debt solutions including term loans, NCDs, debt restructuring, project financing, and various working capital facilities to meet your business financing needs.',
          features: [
            'Term Loans and NCDs',
            'Debt Restructuring',
            'Project Financing',
            'Unsecured Business Loans',
            'Line of Credit for Equipment Finance',
            'Loan Against Property | LRD Facility',
            'Export Credit and Factoring',
            'Buyers Credit',
            'Working Capital Finance | Bill Discounting',
            'Mezzanine | Quasi-equity Funding',
            'Subordinated Debt | Commercial Paper'
          ],
          process: [
            { step: '1', title: 'Requirement Analysis', description: 'Detailed analysis of your debt and working capital requirements.' },
            { step: '2', title: 'Structure Design', description: 'Design optimal debt structure including hybrid instruments.' },
            { step: '3', title: 'Lender Approach', description: 'Approach suitable lenders and financial institutions.' },
            { step: '4', title: 'Negotiation', description: 'Professional negotiation of terms, covenants, and pricing.' },
            { step: '5', title: 'Documentation', description: 'Legal documentation review and transaction closure.' }
          ],
          benefits: [
            'Comprehensive debt solutions',
            'Competitive interest rates',
            'Flexible repayment terms',
            'Working capital optimization',
            'Export finance facilities',
            'Hybrid debt instruments'
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
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary-200 mb-4">
                {service.icon}
              </div>
              <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">{service.title}</h1>
              <p className="text-xl lg:text-2xl text-primary-100 mb-8">{service.subtitle}</p>
              <Link
                to="/contact"
                className="bg-white text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-50 transition-colors inline-flex items-center shadow-glow"
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
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-6">
              Service Overview
            </h2>
            <p className="text-xl text-dark-500 leading-relaxed font-inter">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-dark-50/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-dark-500 font-inter">
              Comprehensive solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-dark-100/80 backdrop-blur-md p-6 rounded-xl shadow-neumorphic border border-primary-600/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-primary-300 font-medium font-inter">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-dark-500 font-inter">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-glow">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-300 mb-2 font-poppins">{step.title}</h3>
                  <p className="text-dark-500 leading-relaxed font-inter">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-dark-50/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-6">
                Why Choose Our Service?
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-dark-500 font-medium font-inter">{benefit}</span>
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
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed font-inter">
            Contact us today to discuss how our {service.title.toLowerCase()} services can help your business achieve its financial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-900 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center shadow-glow"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:agiliocap@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors inline-flex items-center justify-center"
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
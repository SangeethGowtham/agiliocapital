import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Shield, Users, DollarSign, FileText, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicePageProps {
  serviceType: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceType }) => {
  const getServiceImage = (type: string) => {
    switch (type) {
      case 'seed-angel':
        return 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'; // Growing plant/seedling for startup funding
      case 'corporate-finance':
        return 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'; // Financial charts and documents
      case 'loan-debt-syndication':
        return 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'; // Contract signing/banking
      case 'structured-finance':
        return 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'; // Complex financial diagrams
      case 'strategic-partnerships':
        return 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'; // Business handshake/partnership
      case 'cfo-services':
        return 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'; // Executive at desk/financial leadership
      default:
        return 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
  };

  const getBenefitsImage = (type: string) => {
    switch (type) {
      case 'seed-angel':
        return 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'; // Investment charts/growth
      case 'corporate-finance':
        return 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'; // Corporate meeting
      case 'loan-debt-syndication':
        return 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800'; // Bank buildings/financial networks
      case 'structured-finance':
        return 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'; // Structured data visualization
      case 'strategic-partnerships':
        return 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'; // Connected network/collaboration
      case 'cfo-services':
        return 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'; // Financial dashboard/leadership
      default:
        return 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
  };

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
            'SME Exchange Listings'
          ],
          process: [
            { step: '1', title: 'Strategic Analysis', description: 'Comprehensive analysis of your business and growth capital requirements.' },
            { step: '2', title: 'Capital Structure Design', description: 'Design optimal equity structure with OCPS/CCPS for various maturities.' },
            { step: '3', title: 'Investor Matching', description: 'Connect with suitable PE/VC funds, family offices, and strategic investors.' },
            { step: '4', title: 'Market Access', description: 'Facilitate access to stock exchanges and capital markets.' },
            { step: '5', title: 'IPO Preparation', description: 'Support pre-IPO readiness and eventual main board listing.' }
          ],
          benefits: [
            'Access to large PE/VC funds',
            'Capital markets access',
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
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-white/90 mb-4">
                {service.icon}
              </div>
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">{service.title}</h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8">{service.subtitle}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-colors inline-flex items-center shadow-glow"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={getServiceImage(serviceType)}
                  alt={`${service.title} services`}
                  className="rounded-2xl shadow-glow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Service Overview
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-inter">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 font-inter">
              Comprehensive solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-navy-800/60 backdrop-blur-md p-6 rounded-xl shadow-card border border-purple-600/20 hover:border-purple-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium font-inter">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 font-inter">
              A structured approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-glow">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-inter">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
                Why Choose Our Service?
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium font-inter">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={getBenefitsImage(serviceType)}
                  alt={`${service.title} benefits`}
                  className="rounded-2xl shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-inter">
              Contact us today to discuss how our {service.title.toLowerCase()} services can help your business achieve its financial objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-glow"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:agiliocap@gmail.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors inline-flex items-center justify-center"
                >
                  Email Us Directly
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Shield, Users, DollarSign, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import Counter from '../components/Counter';
import ClientsSection from '../components/ClientsSection';
import TypewriterText from '../components/TypewriterText';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HomePage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver();
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver();
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver();
  const { ref: whyChooseRef, isIntersecting: whyChooseInView } = useIntersectionObserver();

  const services = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Seed & Angel Funding',
      description: 'Connect early-stage enterprises with venture capital, seed funds, and angel investors.',
      href: '/services/seed-angel-funding',
      features: ['Venture Capital', 'Angel Investors', 'Accelerator Programs']
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Private Equity & VC',
      description: 'Growth capital from PE/VC funds, family offices, and strategic investors.',
      href: '/services/corporate-finance',
      features: ['Private Equity', 'Growth Capital', 'Strategic Investors']
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Debt Solutions',
      description: 'Comprehensive debt and working capital solutions for business growth.',
      href: '/services/loan-debt-syndication',
      features: ['Term Loans', 'Working Capital', 'Project Finance']
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: 'Structured Finance',
      description: 'Complex financial solutions including asset-backed securities and derivatives.',
      href: '/services/structured-finance',
      features: ['Asset-backed Securities', 'Derivatives', 'Risk Management']
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Strategic Partnerships',
      description: 'Facilitate value-creating business alliances and joint ventures.',
      href: '/services/strategic-partnerships',
      features: ['Joint Ventures', 'Strategic Alliances', 'Market Access']
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'CFO Services',
      description: 'Comprehensive financial leadership and compliance management.',
      href: '/services/cfo-services',
      features: ['Financial Planning', 'Compliance', 'Strategic Advisory']
    }
  ];

  const stats = [
    { number: 50, label: 'Successful Deals', suffix: '+' },
    { number: 1000, label: 'Funds Mobilized (₹Cr)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 30, label: 'Active Clients', suffix: '+' }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: '15+ years of experience in investment banking and financial services'
    },
    {
      title: 'Proven Track Record',
      description: '₹1000+ Cr in funds mobilized across various sectors and instruments'
    },
    {
      title: 'End-to-End Solutions',
      description: 'From seed funding to IPO, we support your entire financial journey'
    },
    {
      title: 'Industry Network',
      description: 'Extensive connections with investors, lenders, and strategic partners'
    }
  ];

  const typewriterTexts = [
    'Investment Banking Excellence',
    'Strategic Financial Advisory',
    'Capital Raising Solutions',
    'Business Growth Partners'
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-gradient-purple text-white py-20 lg:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-poppins text-5xl lg:text-7xl font-bold mb-6 text-shadow">
                Agilio Capital
              </h1>
              <div className="font-poppins text-2xl lg:text-3xl font-semibold mb-8 h-12">
                <TypewriterText texts={typewriterTexts} speed={100} className="text-white/90" />
              </div>
              <p className="font-inter text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
                Your trusted partner in navigating complex financial landscapes and achieving strategic business objectives through innovative investment banking solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-glow"
                  >
                    Get Started Today
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center bg-navy-800/60 backdrop-blur-md rounded-2xl p-8 border border-purple-600/20 hover:border-purple-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-poppins font-bold text-purple-400 mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                </div>
                <div className="text-gray-300 font-medium font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive investment banking and financial advisory services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-navy-800/60 backdrop-blur-md rounded-2xl p-8 border border-purple-600/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-glow group"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-poppins text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="font-inter text-gray-300 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-400 text-sm font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium font-inter transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Agilio Capital?
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference of working with seasoned financial professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-navy-800/60 backdrop-blur-md rounded-2xl p-8 border border-purple-600/20 hover:border-purple-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={whyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-poppins text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="font-inter text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8 leading-relaxed">
              Partner with Agilio Capital and unlock your company's full potential through strategic financial solutions.
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

export default HomePage;
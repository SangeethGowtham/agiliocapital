import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, Shield, Award, CheckCircle, Building2, Briefcase, DollarSign, Globe, BarChart3, PieChart, Banknote, Heart, Sprout, Smartphone, Tractor } from 'lucide-react';
import Counter from '../components/Counter';
import TypewriterText from '../components/TypewriterText';
import FloatingContainer from '../components/FloatingContainer';
import SplineViewer from '../components/SplineViewer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HomePage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver();
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver();
  const { ref: sectorsRef, isIntersecting: sectorsInView } = useIntersectionObserver();
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver();

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Seed & Angel Funding',
      description: 'We partner with early and concept stage enterprises, connect them to venture capital and seed, accelerator, HNI angel investors and unsecured loans to realize the capital.',
      link: '/services/seed-angel-funding'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Private Equity & Venture Capital',
      description: 'Equity and Growth capital can be arranged from large PE| VC funds, Family offices and Strategic Investors for mature and potential business.',
      link: '/services/corporate-finance'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'CFO & Support Services',
      description: 'The entire financial and compliance related functions can be done by us. We operate either independently or in conjunction with your finance team.',
      link: '/services/cfo-services'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Debt Solutions & Working Capital',
      description: 'Term loan and NCDs, Debt Restructuring, Project Financing, Unsecured business Loan, Line of Credit for Equipment Finance.',
      link: '/services/loan-debt-syndication'
    }
  ];

  const focusSectors = [
    { 
      name: 'BFSI', 
      icon: <Banknote className="h-12 w-12" />, 
      description: 'Banking, Financial Services & Affordable Housing Finance',
      details: 'We provide comprehensive investment banking solutions for banks, NBFCs, insurance companies, and affordable Housing Finance. Our services include capital raising, M&A advisory, regulatory compliance support, and strategic partnerships to help BFSI companies scale and innovate.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Healthcare', 
      icon: <Heart className="h-12 w-12" />, 
      description: 'Pharmaceuticals, health care and allied services',
      details: 'Our healthcare investment banking practice focuses on medical technology, pharmaceuticals, biotechnology, and healthcare services. We assist with funding rounds, strategic acquisitions, licensing deals, and partnerships that drive innovation in patient care and medical advancement.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Social Enterprises', 
      icon: <Users className="h-12 w-12" />, 
      description: 'Impact-driven organizations creating social value',
      details: 'We specialize in supporting social enterprises and impact-driven organizations through impact investing, blended finance solutions, and strategic partnerships. Our expertise helps organizations balance social impact with financial sustainability.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'FinTech', 
      icon: <Smartphone className="h-12 w-12" />, 
      description: 'Digital financial services and payment solutions',
      details: 'Our fintech practice covers digital payments, lending platforms, wealth management technology, and blockchain solutions. We help fintech companies secure growth capital, navigate regulatory requirements, and establish strategic partnerships with traditional financial institutions.',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Agriculture', 
      icon: <Tractor className="h-12 w-12" />, 
      description: 'AgTech, sustainable farming, renewable energy and food security solutions',
      details: 'We support agricultural technology companies, sustainable farming initiatives, and food security solutions through specialized funding and strategic advisory services. Our focus includes precision agriculture, supply chain optimization, and sustainable farming practices.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const deals = [
    {
      title: 'Virutcham',
      company: 'TechCorp Solutions',
      amount: '$5.2M',
      sector: 'FinTech',
      description: 'Led successful Series A funding for B2B SaaS platform'
    },
    {
      title: 'Unnati',
      company: 'Healthcare Innovations',
      amount: '$12M',
      sector: 'Healthcare',
      description: 'Structured debt facility for medical device manufacturing'
    },
    {
      title: 'Shiksha',
      company: 'AgriTech Ventures',
      amount: '$3.8M',
      sector: 'Agriculture',
      description: 'Facilitated partnership with leading agricultural cooperative'
    }
  ];

  const stats = [
    { number: 50, label: 'Successful Deals', suffix: '+' },
    { number: 1000, label: 'Transaction Value (M)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section with 3D Background */}
      <section 
        ref={heroRef}
        className="relative text-white overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* 3D Spline Background */}
        <div className="absolute inset-0 z-0">
          <SplineViewer 
            url="https://prod.spline.design/Qgh9sL2R30wruHJRVzqFaCXN/scene.splinecode"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-50/80 via-primary-900/60 to-dark-50/80"></div>
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1 
                className="font-poppins font-bold leading-tight mb-6 text-white"
                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Investment Banking
                <span className="block text-primary-300">
                  <TypewriterText 
                    texts={['Excellence', 'Innovation', 'Growth', 'Success', 'Transformation', 'Progress']}
                    speed={120}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="font-inter text-xl lg:text-2xl text-dark-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Empowering businesses with strategic financial solutions, from seed funding to complex structured finance.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-700 transition-all duration-300 inline-flex items-center justify-center shadow-glow hover:shadow-glow-lg"
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="border-2 border-primary-400/80 text-primary-300 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-600/20 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Business Animation */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src='https://my.spline.design/perisoft3dphonesoftwaredevelopment-loaKbbubCNLNKYqcpSrQSvHr/' 
                  frameBorder='0' 
                  width='100%' 
                  height='100%'
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-primary-400/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Focus Sectors Section */}
      <motion.section 
        ref={sectorsRef} 
        className="py-20 bg-dark-100/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-dark-50/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
              Our Focus Sectors
            </h2>
            <p className="font-inter text-xl text-dark-500 max-w-3xl mx-auto">
              Specialized expertise across key industry verticals in investment banking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {focusSectors.map((sector, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <FloatingContainer delay={index * 0.2}>
                  <div className="text-center p-4">
                    <motion.div 
                      className="text-primary-400 mb-4 flex justify-center group-hover:text-primary-300 transition-colors duration-500"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {sector.icon}
                    </motion.div>
                    <h3 className="font-poppins text-lg font-semibold text-primary-300 mb-2 group-hover:text-primary-200 transition-colors duration-500">
                      {sector.name}
                    </h3>
                    <p className="font-inter text-sm text-dark-500 leading-relaxed group-hover:text-dark-400 transition-colors duration-500">
                      {sector.description}
                    </p>
                  </div>
                </FloatingContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        ref={servicesRef} 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-dark-50/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
              Our Core Services
            </h2>
            <p className="font-inter text-xl text-dark-500 max-w-3xl mx-auto">
              Comprehensive investment banking solutions tailored to empower your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link
                  to={service.link}
                  className="block bg-dark-100/80 backdrop-blur-md p-8 rounded-xl shadow-neumorphic hover:shadow-glow-lg transition-all duration-500 group relative overflow-hidden border border-primary-600/20"
                  style={{ height: '280px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-primary-400 mb-4 group-hover:text-primary-300 transition-colors duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="font-poppins text-xl font-semibold text-primary-300 mb-3 group-hover:text-primary-200 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-inter text-dark-500 leading-relaxed mb-4 line-clamp-3 group-hover:text-dark-400 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="font-inter text-primary-400 font-semibold group-hover:text-primary-300 transition-colors duration-500">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef} 
        className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-poppins font-bold mb-2 text-primary-200"
                  whileHover={{ scale: 1.2 }}
                >
                  <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                </motion.div>
                <div className="font-inter text-primary-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recent Deals Section */}
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
              Recent Transactions
            </h2>
            <p className="font-inter text-xl text-dark-500 max-w-3xl mx-auto">
              Showcasing our successful deals across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <FloatingContainer delay={index * 0.2}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm font-poppins font-semibold border border-primary-600/30">
                        {deal.sector}
                      </span>
                      <span className="text-2xl font-poppins font-bold text-green-400">{deal.amount}</span>
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-primary-300 mb-2">{deal.title}</h3>
                    <p className="font-inter text-dark-500 mb-4">{deal.company}</p>
                    <p className="font-inter text-dark-400 leading-relaxed mb-4">{deal.description}</p>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-inter font-semibold">Successfully Completed</span>
                    </div>
                  </div>
                </FloatingContainer>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/deals"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-700 transition-colors duration-300 inline-flex items-center shadow-glow hover:shadow-glow-lg"
              >
                View All Deals
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter text-xl text-primary-100 mb-8 leading-relaxed">
              Let's discuss how our investment banking expertise can help you achieve your Organisational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center shadow-glow"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:agiliocap@gmail.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
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
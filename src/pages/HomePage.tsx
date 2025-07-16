import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, Shield, Award, CheckCircle, Building2, Briefcase, DollarSign, Globe, BarChart3, PieChart, Banknote, Heart, Sprout, Smartphone, Tractor, Star } from 'lucide-react';
import Counter from '../components/Counter';
import TypewriterText from '../components/TypewriterText';
import FloatingContainer from '../components/FloatingContainer';
import ClientsSection from '../components/ClientsSection';
import FinancialAnimation from '../components/FinancialAnimation';
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
      description: 'We partner with early and concept stage enterprises, connect them to venture capital and seed, accelerator, HNI angel investors and unsecured loans to realize the capital',
      link: '/services/seed-angel-funding'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Private Equity & Venture Capital',
      description: 'Equity and Growth capital can be arranged from large PE| VC funds, Family offices and Strategic Investors for mature and potential business',
      link: '/services/corporate-finance'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'CFO & Support Services',
      description: 'The entire financial and compliance related functions can be done by us. We operate either independently or in conjunction with your finance team',
      link: '/services/cfo-services'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Debt Solutions & Working Capital',
      description: 'Term loan and NCDs, Debt Restructuring, Project Financing, Unsecured business Loan, Line of Credit for Equipment Finance',
      link: '/services/loan-debt-syndication'
    }
  ];

  const focusSectors = [
    { 
      name: 'BFSI', 
      icon: <Banknote className="h-12 w-12" />, 
      description: 'Banking, Financial Services & Affordable Housing Finance',
    },
    { 
      name: 'Healthcare', 
      icon: <Heart className="h-12 w-12" />, 
      description: 'Pharmaceuticals, health care and allied services',
    },
    { 
      name: 'Social Enterprises', 
      icon: <Users className="h-12 w-12" />, 
      description: 'Impact-driven organizations creating social value',
    },
    { 
      name: 'FinTech', 
      icon: <Smartphone className="h-12 w-12" />, 
      description: 'Digital financial services and payment solutions',
    },
    { 
      name: 'Agriculture', 
      icon: <Tractor className="h-12 w-12" />, 
      description: 'AgTech, sustainable farming, renewable energy and food security solutions',
    }
  ];

  const stats = [
    { number: 50, label: 'Successful Deals', suffix: '+' },
    { number: 1000, label: 'Transaction Value (M)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 30, label: 'Active Clients', suffix: '+' }
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative text-white overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
        style={{ minHeight: '100vh' }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-magenta-600/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1 
                className="font-poppins font-bold leading-tight mb-6 text-white text-shadow"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Investment Banking & Capital Market
                <span className="block bg-gradient-purple bg-clip-text text-transparent">
                  <TypewriterText 
                    texts={['Excellence', 'Innovation', 'Growth', 'Success', 'Transformation', 'Progress']}
                    speed={120}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="font-inter text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed text-shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Empowering businesses with strategic financial solutions, from seed funding to complex structured finance
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
                    to="/about"
                    className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-purple-400/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Spline 3D Scene */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                {/* Spline 3D Container */}
                <div className="w-full h-full bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm rounded-2xl border border-purple-600/20 flex items-center justify-center">
                  {/* Simple 3D Geometric Elements */}
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Floating Geometric Shapes */}
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-magenta-500/30 rounded-lg backdrop-blur-sm border border-purple-400/20"
                      animate={{
                        y: [-10, 10, -10],
                        rotateX: [0, 15, 0],
                        rotateY: [0, 15, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    />
                    
                    <motion.div
                      className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full backdrop-blur-sm border border-purple-300/30"
                      animate={{
                        y: [10, -10, 10],
                        x: [-5, 5, -5],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    
                    <motion.div
                      className="absolute bottom-1/3 left-1/2 w-20 h-6 bg-gradient-to-r from-purple-600/25 to-magenta-600/25 rounded-full backdrop-blur-sm border border-purple-500/20"
                      animate={{
                        rotateZ: [0, 360],
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        rotateZ: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }
                      }}
                    />
                    
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    
                    {/* Ambient Light Effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-purple-400/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef} 
        className="py-20 bg-navy-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-magenta-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="block bg-navy-800/80 backdrop-blur-md p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 group relative overflow-hidden border border-purple-600/20 hover:border-purple-400/40"
                  style={{ height: '300px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-magenta-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-purple-400 mb-6 group-hover:text-purple-300 transition-colors duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-inter text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="font-inter text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-500 flex items-center">
                      Learn More 
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Sectors Section */}
      <section 
        ref={sectorsRef} 
        className="py-20 bg-gradient-dark relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Focus Sectors
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div className="bg-navy-800/60 backdrop-blur-md rounded-2xl p-6 border border-purple-600/20 hover:border-purple-400/40 transition-all duration-500 group-hover:shadow-glow">
                  <div className="text-center">
                    <motion.div 
                      className="text-purple-400 mb-4 flex justify-center group-hover:text-purple-300 transition-colors duration-500"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {sector.icon}
                    </motion.div>
                    <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-500">
                      {sector.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef} 
        className="py-20 bg-gradient-purple relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
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
                  className="text-4xl lg:text-6xl font-poppins font-bold mb-2"
                  whileHover={{ scale: 1.2 }}
                >
                  <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                </motion.div>
                <div className="font-inter text-white/90 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-magenta-900/20 to-purple-900/20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our investment banking expertise can help you achieve your organizational goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-gradient-purple text-white px-8 py-4 rounded-full font-poppins font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-glow hover:shadow-glow-lg"
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
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-purple-400/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
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
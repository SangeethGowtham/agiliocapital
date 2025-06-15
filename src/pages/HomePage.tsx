import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, Shield, Award, CheckCircle, Building2, Briefcase, DollarSign, Globe, BarChart3, PieChart } from 'lucide-react';
import Counter from '../components/Counter';
import TypewriterText from '../components/TypewriterText';
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
      description: 'Connect startups with the right investors and secure funding for sustainable growth and market expansion.',
      link: '/services/seed-angel-funding'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Corporate Finance',
      description: 'Strategic financial advisory for mergers, acquisitions, and comprehensive corporate restructuring.',
      link: '/services/corporate-finance'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Debt Syndication',
      description: 'Optimize capital structure through strategic loan syndication and debt restructuring solutions.',
      link: '/services/loan-debt-syndication'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Strategic Partnerships',
      description: 'Facilitate strategic alliances and partnerships that drive sustainable business growth.',
      link: '/services/strategic-partnerships'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Structured Finance',
      description: 'Complex financial solutions including asset-backed securities and project finance advisory.',
      link: '/services/structured-finance'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'CFO Services',
      description: 'Comprehensive financial leadership and strategic planning for growing businesses.',
      link: '/services/cfo-services'
    }
  ];

  const sectors = [
    { name: 'Technology', icon: <Globe className="h-12 w-12" />, description: 'Fintech, SaaS, AI/ML, and emerging tech solutions' },
    { name: 'Healthcare', icon: <Users className="h-12 w-12" />, description: 'Medical devices, pharmaceuticals, and health services' },
    { name: 'Manufacturing', icon: <Building2 className="h-12 w-12" />, description: 'Industrial automation, supply chain, and production' },
    { name: 'Financial Services', icon: <BarChart3 className="h-12 w-12" />, description: 'Banking, insurance, and investment management' },
    { name: 'Infrastructure', icon: <PieChart className="h-12 w-12" />, description: 'Energy, transportation, and smart city solutions' }
  ];

  const deals = [
    {
      title: 'Series A Funding Round',
      company: 'TechCorp Solutions',
      amount: '$5.2M',
      sector: 'Technology',
      description: 'Led successful Series A funding for B2B SaaS platform'
    },
    {
      title: 'Debt Syndication',
      company: 'Manufacturing Inc.',
      amount: '$12M',
      sector: 'Manufacturing',
      description: 'Structured debt facility for equipment financing and expansion'
    },
    {
      title: 'Strategic Partnership',
      company: 'HealthTech Ventures',
      amount: '$3.8M',
      sector: 'Healthcare',
      description: 'Facilitated strategic partnership with leading pharmaceutical company'
    }
  ];

  const stats = [
    { number: 50, label: 'Successful Deals', suffix: '+' },
    { number: 500, label: 'Transaction Value (Cr)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative text-white overflow-hidden"
        style={{ 
          height: '100vh',
          backgroundImage: `
            linear-gradient(135deg, rgba(26, 75, 140, 0.9) 0%, rgba(26, 75, 140, 0.7) 50%, rgba(44, 62, 80, 0.8) 100%),
            url("https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Overlay */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-transparent to-primary-700/40"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(26, 75, 140, 0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(44, 62, 80, 0.4) 100%)',
                'linear-gradient(135deg, rgba(44, 62, 80, 0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(26, 75, 140, 0.6) 100%)',
                'linear-gradient(45deg, rgba(26, 75, 140, 0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(44, 62, 80, 0.4) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
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
                <span className="block text-blue-200">
                  <TypewriterText 
                    texts={['Excellence', 'Innovation', 'Growth', 'Success', 'Transformation']}
                    speed={120}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="font-inter text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed"
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
                    className="bg-white text-primary-900 px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center shadow-xl backdrop-blur-sm"
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
                    className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional financial consulting"
                    className="rounded-2xl shadow-xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-3xl"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md text-secondary-900 p-6 rounded-xl shadow-2xl border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-primary-600" />
                  <div>
                    <div className="text-lg font-poppins font-bold">
                      <Counter end={15} duration={2000} suffix="+ Years" />
                    </div>
                    <div className="text-sm font-inter text-secondary-600">Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Focus Sectors Section */}
      <motion.section 
        ref={sectorsRef} 
        className="py-20 bg-light relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Focus Sectors
            </h2>
            <p className="font-inter text-xl text-secondary-600 max-w-3xl mx-auto">
              Specialized expertise across key industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer relative"
                style={{ height: '200px' }}
                initial={{ opacity: 0, y: 50 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 h-full flex flex-col justify-center items-center text-center relative z-10">
                  <motion.div 
                    className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-500"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {sector.icon}
                  </motion.div>
                  <h3 className="font-poppins text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors duration-500">
                    {sector.name}
                  </h3>
                  <p className="font-inter text-sm text-secondary-600 leading-relaxed line-clamp-2 group-hover:text-secondary-700 transition-colors duration-500">
                    {sector.description}
                  </p>
                </div>
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
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Services
            </h2>
            <p className="font-inter text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive investment banking solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                  style={{ height: '250px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="font-poppins text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-inter text-secondary-600 leading-relaxed mb-4 line-clamp-3 group-hover:text-secondary-700 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="font-inter text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-500">
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
        className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden"
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
                  className="text-4xl lg:text-5xl font-poppins font-bold mb-2"
                  whileHover={{ scale: 1.2 }}
                >
                  <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                </motion.div>
                <div className="font-inter text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recent Deals Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Recent Transactions
            </h2>
            <p className="font-inter text-xl text-secondary-600 max-w-3xl mx-auto">
              Showcasing our successful deals across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                    {deal.sector}
                  </span>
                  <span className="text-2xl font-poppins font-bold text-green-600">{deal.amount}</span>
                </div>
                <h3 className="font-poppins text-xl font-semibold text-secondary-900 mb-2">{deal.title}</h3>
                <p className="font-inter text-secondary-600 mb-4">{deal.company}</p>
                <p className="font-inter text-secondary-700 leading-relaxed">{deal.description}</p>
                <div className="mt-4 flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-inter font-semibold">Successfully Completed</span>
                </div>
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
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-primary-700 transition-colors duration-300 inline-flex items-center shadow-lg"
              >
                View All Deals
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-30 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Agilio Capital Partners?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Expert Team', desc: 'CAs, Corporate Lawyers, and seasoned finance professionals' },
                  { title: 'Proven Track Record', desc: '50+ successful deals across multiple sectors' },
                  { title: 'Tailored Solutions', desc: 'Customized financial strategies for your unique needs' },
                  { title: 'End-to-End Support', desc: 'Complete financial advisory from inception to execution' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="font-inter text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Financial advisory team"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
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
            <p className="font-inter text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our investment banking expertise can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center shadow-xl"
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
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
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
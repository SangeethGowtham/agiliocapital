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
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden"
        style={{ 
          height: '100vh',
          backgroundAttachment: 'fixed',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <motion.h1 
                className="font-poppins font-bold leading-tight mb-6 text-white"
                style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Investment Banking
                <span className="block text-primary-200">
                  <TypewriterText 
                    texts={['Excellence', 'Innovation', 'Growth', 'Success']}
                    speed={150}
                  />
                </span>
              </motion.h1>
              <motion.p 
                className="font-inter text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering businesses with strategic financial solutions, from seed funding to complex structured finance.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-white text-primary-900 px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
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
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 inline-flex items-center justify-center"
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
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="animate-float"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional business meeting"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white text-secondary-900 p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-primary-600" />
                  <div>
                    <div className="text-lg font-poppins font-bold">
                      <Counter end={10} duration={2000} suffix="+ Years" />
                    </div>
                    <div className="text-sm font-inter text-secondary-600">Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Sectors Section */}
      <section ref={sectorsRef} className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
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
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                style={{ height: '200px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                  <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="font-poppins text-lg font-semibold text-secondary-900 mb-2">
                    {sector.name}
                  </h3>
                  <p className="font-inter text-sm text-secondary-600 leading-relaxed line-clamp-2">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={service.link}
                  className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style={{ height: '250px' }}
                >
                  <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-secondary-600 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="font-inter text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
                    Learn More →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-poppins font-bold mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                </div>
                <div className="font-inter text-primary-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Deals Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Recent Transactions
            </h2>
            <p className="font-inter text-xl text-secondary-600 max-w-3xl mx-auto">
              Showcasing our successful deals across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
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
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-primary-700 transition-colors duration-300 inline-flex items-center"
              >
                View All Deals
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial advisory team"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter text-xl text-primary-100 mb-8 leading-relaxed">
              Let's discuss how our investment banking expertise can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-primary-50 transition-colors duration-300 inline-flex items-center justify-center"
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
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300 inline-flex items-center justify-center"
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
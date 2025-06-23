import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, Shield, Award, CheckCircle, Building2, Briefcase, DollarSign, Globe, BarChart3, PieChart, Banknote, Heart, Sprout, Smartphone, Tractor } from 'lucide-react';
import Counter from '../components/Counter';
import TypewriterText from '../components/TypewriterText';
import FloatingContainer from '../components/FloatingContainer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HomePage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver();
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver();
  const { ref: sectorsRef, isIntersecting: sectorsInView } = useIntersectionObserver();
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver();
  const { ref: clientsRef, isIntersecting: clientsInView } = useIntersectionObserver();

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Seed & Angel Funding',
      description: 'We partner with early and concept stage enterprises, connecting them to venture capital, seed funds, accelerators, and angel investors to realize capital growth.',
      link: '/services/seed-angel-funding'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Private Equity & Venture Capital',
      description: 'Equity and growth capital arrangements from large PE/VC funds, family offices, and strategic investors for mature and high-potential businesses.',
      link: '/services/corporate-finance'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'CFO & Support Services',
      description: 'Comprehensive financial and compliance functions operated independently or in conjunction with your finance team for optimal business operations.',
      link: '/services/cfo-services'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Debt Solutions & Working Capital',
      description: 'Term loans, NCDs, debt restructuring, project financing, unsecured business loans, and line of credit for equipment finance solutions.',
      link: '/services/loan-debt-syndication'
    }
  ];

  const focusSectors = [
    { 
      name: 'BFSI', 
      icon: <Banknote className="h-12 w-12" />, 
      description: 'Banking, Financial Services & Insurance',
      details: 'Comprehensive investment solutions for banks, NBFCs, insurance companies, and fintech. Our services include capital raising, M&A advisory, regulatory compliance support, and strategic partnerships.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Healthcare', 
      icon: <Heart className="h-12 w-12" />, 
      description: 'Medical Technology & Healthcare Services',
      details: 'Investment banking for medical technology, pharmaceuticals, biotechnology, and healthcare services. We assist with funding rounds, strategic acquisitions, and partnerships.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Technology', 
      icon: <Smartphone className="h-12 w-12" />, 
      description: 'Digital Innovation & Software Solutions',
      details: 'Supporting technology companies through growth capital, strategic partnerships, and market expansion initiatives in the digital transformation space.',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Clean Energy', 
      icon: <Sprout className="h-12 w-12" />, 
      description: 'Renewable Energy & Sustainability',
      details: 'Investment solutions for renewable energy projects, sustainable technology, and environmental impact initiatives driving the green economy.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Manufacturing', 
      icon: <Building2 className="h-12 w-12" />, 
      description: 'Industrial & Manufacturing Excellence',
      details: 'Capital solutions for manufacturing companies, industrial automation, and supply chain optimization across various manufacturing sectors.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const deals = [
    {
      title: 'Meridian Technologies Acquisition',
      company: 'Apex Global Solutions',
      amount: '$18.5M',
      sector: 'Technology',
      description: 'Successfully advised on strategic acquisition of Meridian Technologies by Apex Global Solutions'
    },
    {
      title: 'Pinnacle Healthcare Merger',
      company: 'Summit Medical Group',
      amount: '$32M',
      sector: 'Healthcare',
      description: 'Facilitated merger between Pinnacle Healthcare and Summit Medical Group'
    },
    {
      title: 'Vertex Energy Series B',
      company: 'Vertex Energy Solutions',
      amount: '$15.2M',
      sector: 'Clean Energy',
      description: 'Led Series B funding round for renewable energy technology platform'
    },
    {
      title: 'Quantum Analytics IPO',
      company: 'Quantum Analytics Corp',
      amount: '$52M',
      sector: 'Data Analytics',
      description: 'Provided IPO advisory services for data analytics company'
    },
    {
      title: 'Nexus Logistics Buyout',
      company: 'Nexus Logistics Inc.',
      amount: '$28M',
      sector: 'Logistics',
      description: 'Advised on management buyout of logistics technology company'
    }
  ];

  const stats = [
    { number: 85, label: 'Successful Investments', suffix: '+' },
    { number: 2200, label: 'Assets Under Management (M)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' }
  ];

  const clients = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200',
      sector: 'Technology'
    },
    {
      name: 'Global Healthcare Partners',
      logo: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=200',
      sector: 'Healthcare'
    },
    {
      name: 'Renewable Energy Corp',
      logo: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=200',
      sector: 'Clean Energy'
    },
    {
      name: 'Financial Services Group',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      sector: 'BFSI'
    },
    {
      name: 'Manufacturing Excellence',
      logo: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=200',
      sector: 'Manufacturing'
    },
    {
      name: 'Digital Innovation Labs',
      logo: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=200',
      sector: 'Technology'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative text-gray-800 overflow-hidden bg-gradient-to-br from-purple-50 to-white"
        style={{ height: '100vh', minHeight: '700px' }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1 
                className="font-poppins font-bold leading-tight mb-6 text-gray-800"
                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Investment Management
                <span className="block text-primary-600">
                  <TypewriterText 
                    texts={['Excellence', 'Innovation', 'Growth', 'Success', 'Transformation', 'Progress']}
                    speed={120}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="font-inter text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Empowering businesses with strategic investment solutions, from seed funding to complex structured finance.
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
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
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
                    className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Professional Growth Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional investment management"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
                
                {/* Overlay Growth Metrics */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center justify-between text-gray-800">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">↗ 28%</div>
                        <div className="text-xs text-gray-600">Growth Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">₹2200M+</div>
                        <div className="text-xs text-gray-600">AUM</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">98%</div>
                        <div className="text-xs text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Sectors Section */}
      <motion.section 
        ref={sectorsRef} 
        className="py-20 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Focus Sectors
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across key industry verticals in investment management
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
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="text-primary-600 mb-4 flex justify-center group-hover:text-primary-700 transition-colors duration-500"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {sector.icon}
                  </motion.div>
                  <h3 className="font-poppins text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors duration-500">
                    {sector.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
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
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment management solutions tailored to empower your business
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
                  className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden border border-purple-100"
                  style={{ height: '280px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-700 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-500">
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
        className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
                  className="text-4xl lg:text-5xl font-poppins font-bold mb-2 text-white"
                  whileHover={{ scale: 1.2 }}
                >
                  <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                </motion.div>
                <div className="font-inter text-purple-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recent Deals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Recent Investments
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our successful investments across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.slice(0, 3).map((deal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-poppins font-semibold bg-purple-100 text-primary-700">
                      {deal.sector}
                    </span>
                    <span className="text-2xl font-poppins font-bold text-green-600">{deal.amount}</span>
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-2">{deal.title}</h3>
                  <p className="font-inter text-gray-600 mb-4">{deal.company}</p>
                  <p className="font-inter text-gray-500 leading-relaxed mb-4">{deal.description}</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-inter font-semibold">Successfully Completed</span>
                  </div>
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
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 inline-flex items-center shadow-lg"
              >
                View All Investments
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Valuable Clients Section */}
      <section ref={clientsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Valuable Clients
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={clientsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-poppins text-sm font-semibold text-gray-800 mb-1">{client.name}</h3>
                  <p className="font-inter text-xs text-gray-500">{client.sector}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Investment Strategy?
            </h2>
            <p className="font-inter text-xl text-purple-100 mb-8 leading-relaxed">
              Let's discuss how our investment management expertise can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-primary-700 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
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
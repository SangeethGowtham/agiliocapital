import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Globe, CheckCircle, Linkedin, TrendingUp, Shield, Building } from 'lucide-react';
import Counter from '../components/Counter';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutPage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver();
  const { ref: valuesRef, isIntersecting: valuesInView } = useIntersectionObserver();
  const { ref: teamRef, isIntersecting: teamInView } = useIntersectionObserver();
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver();

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction and client relationship, delivering superior results.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Transparent and ethical practices form the foundation of our business operations.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge financial strategies and technologies for optimal outcomes.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expertise',
      description: 'Deep industry knowledge across multiple sectors and financial instruments.'
    }
  ];

  const team = [
    {
      name: 'Durai',
      role: 'Founder & Managing Director',
      description: 'Seasoned investment banking professional with over 15 years of experience in corporate finance, mergers & acquisitions, and strategic advisory services.',
      credentials: ['Chartered Accountant', 'Corporate Finance Specialist', 'M&A Expert'],
      experience: [
        { title: 'Investment Banking', years: '15+', icon: <TrendingUp className="h-6 w-6" /> },
        { title: 'Corporate Finance', years: '12+', icon: <Building className="h-6 w-6" /> },
        { title: 'Risk Management', years: '10+', icon: <Shield className="h-6 w-6" /> }
      ]
    }
  ];

  const stats = [
    { number: 50, label: 'Successful Deals', suffix: '+' },
    { number: 500, label: 'Transaction Value (₹Cr)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  const metrics = [
    { value: 95, label: 'Success Rate', suffix: '%' },
    { value: 24, label: 'Avg Response Time', suffix: 'hrs' },
    { value: 8, label: 'Industry Sectors', suffix: '+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">About Agilio Capital Partners</h1>
            <p className="font-inter text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in navigating complex financial landscapes and achieving strategic business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="font-inter text-lg text-secondary-700 leading-relaxed mb-6">
                Agilio Capital Partners was founded with a clear vision: to provide world-class investment banking services 
                that drive meaningful business transformation. Based in Bangalore, we combine global financial expertise 
                with deep local market knowledge.
              </p>
              <p className="font-inter text-lg text-secondary-700 leading-relaxed mb-8">
                Our mission is to empower businesses across various sectors by providing strategic financial advisory, 
                facilitating capital raising, and creating value through innovative financial solutions.
              </p>
              
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-primary-50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-poppins font-bold text-primary-600">
                      <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                    </div>
                    <div className="font-inter text-secondary-600 font-medium">{stat.label}</div>
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
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office building"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Leadership Team
            </h2>
            <p className="font-inter text-xl text-secondary-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Agilio Capital Partners
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  {/* Profile Image - 40% */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <img
                        src="/files_5286024-1749798839350-WhatsApp_Image_2025-06-12_at_22.40.32_83de4719-removebg-preview (1).png"
                        alt={member.name}
                        className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                        style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Content - 60% */}
                  <div className="lg:col-span-3">
                    <h3 className="font-poppins text-2xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                    <p className="font-inter text-lg text-primary-600 font-semibold mb-4">{member.role}</p>
                    <p className="font-inter text-secondary-700 leading-relaxed mb-6">{member.description}</p>
                    
                    {/* Experience Cards - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {member.experience.map((exp, expIndex) => (
                        <div key={expIndex} className="bg-primary-50 p-4 rounded-lg text-center">
                          <div className="text-primary-600 mb-2 flex justify-center">
                            {exp.icon}
                          </div>
                          <div className="font-poppins font-bold text-primary-600 text-lg">{exp.years}</div>
                          <div className="font-inter text-sm text-secondary-600">{exp.title}</div>
                        </div>
                      ))}
                    </div>

                    {/* Metrics with Counter Animations */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="font-poppins font-bold text-2xl text-primary-600">
                            <Counter end={metric.value} suffix={metric.suffix} isActive={teamInView} />
                          </div>
                          <div className="font-inter text-sm text-secondary-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-poppins font-semibold text-secondary-900">Professional Credentials:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential, credIndex) => (
                          <span
                            key={credIndex}
                            className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-inter font-medium"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* LinkedIn Button with Brand Colors */}
                    <div className="mt-6">
                      <motion.a
                        href="https://www.linkedin.com/company/agilio-capital-partners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white px-6 py-3 rounded-lg font-inter font-medium transition-colors duration-300"
                        style={{ backgroundColor: '#0077b5' }}
                        whileHover={{ scale: 1.05, backgroundColor: '#005885' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        Connect on LinkedIn
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="font-inter text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide our approach to investment banking and client relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-poppins text-xl font-semibold text-secondary-900 mb-3">{value.title}</h3>
                <p className="font-inter text-secondary-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold mb-6">
                Professional Excellence
              </h2>
              <p className="font-inter text-xl text-gray-300 leading-relaxed mb-8">
                Our team comprises seasoned professionals with extensive experience in investment banking, 
                corporate finance, and strategic advisory services.
              </p>
              
              <div className="space-y-4">
                {[
                  'Chartered Accountants with deep financial expertise',
                  'Corporate lawyers specializing in M&A and finance',
                  'Investment banking professionals with global experience',
                  'Strategic advisors across multiple industry sectors'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="font-inter text-gray-300">{item}</span>
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
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Location
            </h2>
            <p className="font-inter text-xl text-secondary-600">
              Strategically located in the heart of Bangalore's business district
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-poppins text-2xl font-bold text-secondary-900 mb-4">Bangalore Office</h3>
                <div className="space-y-3 font-inter text-secondary-700">
                  <p className="text-lg">
                    <strong>Address:</strong><br />
                    14-1, BTS Main Road<br />
                    Wilson Garden<br />
                    Bangalore, Karnataka 560030
                  </p>
                  <p className="text-lg">
                    <strong>Email:</strong><br />
                    <a href="mailto:agiliocap@gmail.com" className="text-primary-600 hover:text-primary-800 transition-colors duration-300">
                      agiliocap@gmail.com
                    </a>
                  </p>
                  <p className="text-lg">
                    <strong>LinkedIn:</strong><br />
                    <a
                      href="https://www.linkedin.com/company/agilio-capital-partners"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin hover:opacity-80 inline-flex items-center transition-opacity duration-300"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Company Profile
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bangalore business district"
                  className="rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
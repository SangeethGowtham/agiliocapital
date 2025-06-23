import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Globe, CheckCircle, Linkedin, TrendingUp, Shield, Building } from 'lucide-react';
import Counter from '../components/Counter';
import FloatingContainer from '../components/FloatingContainer';
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
      description: 'We strive for excellence in every investment decision and client relationship, delivering superior results.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Transparent and ethical practices form the foundation of our investment management operations.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge investment strategies and technologies for optimal portfolio performance.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expertise',
      description: 'Deep industry knowledge across multiple sectors and financial instruments drives our success.'
    }
  ];

  const team = [
    {
      name: 'T M Durai',
      role: 'Investment Manager | Strategic Advisor | Portfolio Growth Specialist | Managing Director - Funds Progrez^',
      description: 'T M Durai is an investment management professional with 15+ years of experience, working across BFSI, Technology, Healthcare, and Clean Energy sectors. Specialized in portfolio management, strategic investments, and fund raising.',
      fullBio: `Led investment strategies for multiple high-growth companies and instrumental in scaling portfolio AUM to 2200+ Cr. Having expertise in asset allocation, strategic partnerships, and new investment opportunities. Executed strategic investment deals across various sectors.

Portfolio Management: Managed diversified investment portfolios worth more than 2200 Crore across equity, debt, and hybrid instruments including venture capital, private equity, and structured products.

As founder of Funds Progrez^ - working with 50+ clients on investment management and portfolio optimization. Advising on asset allocation, risk management, and strategic investment decisions. Mentoring investors and projects from initial investment to exit strategies.

Investment Strategy: Proven expertise in identifying high-potential investment opportunities, portfolio diversification, risk assessment, and value creation to achieve substantial returns and portfolio growth.`,
      credentials: ['Investment Management Expert', 'Portfolio Strategy Specialist', 'Risk Management Advisor'],
      experience: [
        { title: 'Investment Management', years: '15+ years', icon: <TrendingUp className="h-6 w-6" /> },
        { title: 'Portfolio Management', years: '12+ years', icon: <Building className="h-6 w-6" /> },
        { title: 'Risk Assessment', years: '10+ years', icon: <Shield className="h-6 w-6" /> }
      ]
    }
  ];

  const stats = [
    { number: 85, label: 'Successful Investments', suffix: '+' },
    { number: 2200, label: 'Assets Under Management (M)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 50, label: 'Active Clients', suffix: '+' }
  ];

  const metrics = [
    { value: 98, label: 'Success Rate', suffix: '%' },
    { value: 12, label: 'Avg Response Time', suffix: 'hrs' },
    { value: 15, label: 'Industry Sectors', suffix: '+' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative text-gray-800 py-20 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold mb-6 text-gray-800">About Funds Progrez^</h1>
            <p className="font-inter text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in navigating complex investment landscapes and achieving strategic financial objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Our Story & Mission
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
                Funds Progrez^ was founded with a clear vision: to provide world-class investment management services 
                that drive meaningful portfolio growth and financial transformation. Based in Bangalore, we combine global investment expertise 
                with deep local market knowledge.
              </p>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to empower investors across various sectors by providing strategic investment advisory, 
                facilitating portfolio optimization, and creating value through innovative investment solutions.
              </p>
              
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                    <div className="text-center">
                      <div className="text-3xl font-poppins font-bold text-primary-600">
                        <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                      </div>
                      <div className="font-inter text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
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
                alt="Modern investment office"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Funds Progrez^
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-purple-100"
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
                    <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="font-inter text-lg text-primary-600 font-semibold mb-4">{member.role}</p>
                    <p className="font-inter text-gray-600 leading-relaxed mb-6">{member.description}</p>
                    
                    {/* Experience Cards - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {member.experience.map((exp, expIndex) => (
                        <div key={expIndex} className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
                          <div className="text-primary-600 mb-2 flex justify-center">
                            {exp.icon}
                          </div>
                          <div className="font-poppins font-bold text-primary-600 text-lg">{exp.years}</div>
                          <div className="font-inter text-sm text-gray-600">{exp.title}</div>
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
                          <div className="font-inter text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-poppins font-semibold text-gray-800">Professional Credentials:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential, credIndex) => (
                          <span
                            key={credIndex}
                            className="px-3 py-1 rounded-full text-sm font-inter font-medium bg-purple-100 text-primary-700"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full Bio */}
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-800 mb-3">Professional Background:</h4>
                      <div className="font-inter text-gray-600 leading-relaxed whitespace-pre-line">
                        {member.fullBio}
                      </div>
                    </div>

                    {/* LinkedIn Button */}
                    <div className="mt-6">
                      <motion.a
                        href="https://www.linkedin.com/in/t-m-durai-b913356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-linkedin text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-linkedin/90 transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
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
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to investment management and client relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-primary-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="font-inter text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
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
              <p className="font-inter text-xl text-purple-100 leading-relaxed mb-8">
                Our team comprises seasoned professionals with extensive experience in investment management, 
                portfolio optimization, and strategic advisory services.
              </p>
              
              <div className="space-y-4">
                {[
                  'Investment management professionals with 15+ years experience',
                  'Portfolio optimization experts specializing in diversified investments',
                  'Strategic advisors across BFSI, Technology, Healthcare, and Clean Energy',
                  'Proven track record in scaling portfolio AUM from startup to 2200+ Cr'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="font-inter text-purple-100">{item}</span>
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
                alt="Professional investment team"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Location
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Strategically located in the heart of Bangalore's business district
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto shadow-lg border border-purple-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-4">Bangalore Office</h3>
                  <div className="space-y-3 font-inter text-gray-600">
                    <p className="text-lg">
                      <strong className="text-primary-600">Address:</strong><br />
                      14-1, BTS Main Road<br />
                      Wilson Garden<br />
                      Bangalore, Karnataka 560030
                    </p>
                    <p className="text-lg">
                      <strong className="text-primary-600">Email:</strong><br />
                      <a href="mailto:agiliocap@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-300">
                        agiliocap@gmail.com
                      </a>
                    </p>
                    <p className="text-lg">
                      <strong className="text-primary-600">LinkedIn:</strong><br />
                      <a
                        href="https://www.linkedin.com/in/t-m-durai-b913356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin hover:opacity-80 inline-flex items-center transition-opacity duration-300"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        Professional Profile
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
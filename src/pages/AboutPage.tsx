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
      title: 'Progress',
      description: 'Deep industry knowledge across multiple sectors and financial instruments.'
    }
  ];

  const team = [
    {
      name: 'T M Durai',
      role: 'Investment Banker | Strategic Advisor | Partnerships & Growth Enabler | Managing Director - Agilio Capital Private Limited',
      description: 'T M Durai an investment banker and growth strategy professional with 25+ years of experience, working in the BFSI, Microfinance, Dairy, and Social enterprises sectors. Handled Retail Financial Products, Corporate Finance and Fund raising, Treasury and Strategic Partnerships.',
      fullBio: `Was part of founding team of NBFC - MFI - Samasta Micro Finance and instrumental in scaling the AUM to 1000 Cr, Having expertise in resource mobilization, strategic partnerships, new initiatives. Executed a strategic M&A deal with large financial group.

Sphere Headed the treasury and mobilized funds more than 1500 Crore as Equity, Term loans, CP, NCD and securitization and DA. transactions.

As a founder of Agilio Capital - am working with 30+ clients on capital raising for the growth plans. Advising on PE /Venture Capital / Debt and structured finance. Mentoring start ups and projects from conceptualization to implementation and scale.

Arranging BC / Co lending and strategic partnerships for NBFC, MFI clients and need based support services to scale the AUM and increase the profitability.

Proven expertise in capturing strategic business / market opportunities, Product incubation, Promotional activities, Business development, revenue maximisation, to scale business volumes and achieve substantial growth`,
      credentials: ['Investment Banking Expert', 'Strategic Finance Specialist', 'M&A Advisor'],
      experience: [
        { title: 'Investment Banking', years: '25+ years', icon: <TrendingUp className="h-6 w-6" /> },
        { title: 'Corporate Finance', years: '20+ years', icon: <Building className="h-6 w-6" /> },
        { title: 'Risk Management', years: '15+ years', icon: <Shield className="h-6 w-6" /> }
      ]
    }
  ];

  const stats = [
    { number: 75, label: 'Successful Deals', suffix: '+' },
    { number: 1500, label: 'Funds Mobilized (₹Cr)', suffix: '+' },
    { number: 25, label: 'Years Experience', suffix: '+' },
    { number: 30, label: 'Active Clients', suffix: '+' }
  ];

  const metrics = [
    { value: 95, label: 'Success Rate', suffix: '%' },
    { value: 24, label: 'Avg Response Time', suffix: 'hrs' },
    { value: 12, label: 'Industry Sectors', suffix: '+' }
  ];

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative text-white py-20"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(37, 70, 101, 0.9), rgba(37, 70, 101, 0.8))`
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">About Agilio Capital</h1>
            <p className="font-inter text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in navigating complex financial landscapes and achieving strategic business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-6">
                Our Story & Mission
              </h2>
              <p className="font-inter text-lg text-dark-500 leading-relaxed mb-6">
                Agilio Capital was founded with a clear vision: to provide world-class investment banking services 
                that drive meaningful business transformation. Based in Bangalore, we combine global financial expertise 
                with deep local market knowledge.
              </p>
              <p className="font-inter text-lg text-dark-500 leading-relaxed mb-8">
                Our mission is to empower businesses across various sectors by providing strategic financial advisory, 
                facilitating capital raising, and creating value through innovative financial solutions.
              </p>
              
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <FloatingContainer key={index} delay={index * 0.1}>
                    <div className="text-center p-4">
                      <div className="text-3xl font-poppins font-bold text-primary-400">
                        <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                      </div>
                      <div className="font-inter text-dark-500 font-medium">{stat.label}</div>
                    </div>
                  </FloatingContainer>
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
      <section ref={teamRef} className="py-20 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
              Leadership Team
            </h2>
            <p className="font-inter text-xl text-dark-500 max-w-3xl mx-auto">
              Meet the experienced professionals leading Agilio Capital
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-dark-100/80 backdrop-blur-md rounded-2xl shadow-neumorphic p-8 lg:p-12 border border-primary-600/20"
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
                    <h3 className="font-poppins text-2xl font-bold text-primary-300 mb-2">{member.name}</h3>
                    <p className="font-inter text-lg text-primary-400 font-semibold mb-4">{member.role}</p>
                    <p className="font-inter text-dark-500 leading-relaxed mb-6">{member.description}</p>
                    
                    {/* Experience Cards - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {member.experience.map((exp, expIndex) => (
                        <FloatingContainer key={expIndex} delay={expIndex * 0.1}>
                          <div className="text-center p-4">
                            <div className="text-primary-400 mb-2 flex justify-center">
                              {exp.icon}
                            </div>
                            <div className="font-poppins font-bold text-primary-400 text-lg">{exp.years}</div>
                            <div className="font-inter text-sm text-dark-500">{exp.title}</div>
                          </div>
                        </FloatingContainer>
                      ))}
                    </div>

                    {/* Metrics with Counter Animations */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="font-poppins font-bold text-2xl text-primary-400">
                            <Counter end={metric.value} suffix={metric.suffix} isActive={teamInView} />
                          </div>
                          <div className="font-inter text-sm text-dark-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-poppins font-semibold text-primary-300">Professional Credentials:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential, credIndex) => (
                          <span
                            key={credIndex}
                            className="px-3 py-1 rounded-full text-sm font-inter font-medium text-white border"
                            style={{
                              backgroundColor: 'rgba(37, 70, 101, 0.2)',
                              borderColor: 'rgba(37, 70, 101, 0.3)'
                            }}
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full Bio */}
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-primary-300 mb-3">Professional Background:</h4>
                      <div className="font-inter text-dark-500 leading-relaxed whitespace-pre-line">
                        {member.fullBio}
                      </div>
                    </div>

                    {/* LinkedIn Button with Brand Colors */}
                    <div className="mt-6">
                      <motion.a
                        href="https://www.linkedin.com/in/t-m-durai-b913356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white px-6 py-3 rounded-full font-inter font-medium transition-colors duration-300 shadow-lg"
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
      <section ref={valuesRef} className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
              Our Core Values
            </h2>
            <p className="font-inter text-xl text-dark-500 max-w-3xl mx-auto">
              The principles that guide our approach to investment banking and client relationships
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
                <FloatingContainer delay={index * 0.1}>
                  <div className="text-center p-6">
                    <div className="text-primary-400 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-primary-300 mb-3">{value.title}</h3>
                    <p className="font-inter text-dark-500 leading-relaxed">{value.description}</p>
                  </div>
                </FloatingContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section 
        className="py-20 text-white"
        style={{
          background: `linear-gradient(135deg, rgba(37, 70, 101, 0.9), rgba(37, 70, 101, 0.8))`
        }}
      >
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
              <p className="font-inter text-xl text-gray-200 leading-relaxed mb-8">
                Our team comprises seasoned professionals with extensive experience in investment banking, 
                corporate finance, and strategic advisory services.
              </p>
              
              <div className="space-y-4">
                {[
                  'Investment Banking professionals with 25+ years experience',
                  'Corporate finance experts specializing in M&A and fundraising',
                  'Strategic advisors across BFSI, Healthcare, and Social enterprises',
                  'Proven track record in scaling businesses from startup to 1000+ Cr AUM'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="font-inter text-gray-200">{item}</span>
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
      <section className="py-20 bg-dark-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
              Our Location
            </h2>
            <p className="font-inter text-xl text-dark-500">
              Strategically located in the heart of Bangalore's business district
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FloatingContainer>
              <div className="p-8 lg:p-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-poppins text-2xl font-bold text-primary-300 mb-4">Bangalore Office</h3>
                    <div className="space-y-3 font-inter text-dark-500">
                      <p className="text-lg">
                        <strong className="text-primary-400">Address:</strong><br />
                        14-1, BTS Main Road<br />
                        Wilson Garden<br />
                        Bangalore, Karnataka 560030
                      </p>
                      <p className="text-lg">
                        <strong className="text-primary-400">Email:</strong><br />
                        <a href="mailto:agiliocap@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
                          agiliocap@gmail.com
                        </a>
                      </p>
                      <p className="text-lg">
                        <strong className="text-primary-400">LinkedIn:</strong><br />
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
            </FloatingContainer>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
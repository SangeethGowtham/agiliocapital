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
      description: 'We strive for excellence in every transaction and client relationship, delivering superior results'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Transparent and ethical practices form the foundation of our business operations'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge financial strategies and technologies for optimal outcomes'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Progress',
      description: 'Deep industry knowledge across multiple sectors and financial instruments'
    }
  ];

  const team = [
    {
      name: 'T M Durai',
     ,
      description: 'T M Durai an investment banker and growth strategy professional with 15+ years of experience, working in the BFSI, Microfinance, Dairy, and Social enterprises sectors. Handled Retail Financial Products, Corporate Finance and Fund raising, Treasury and Strategic Partnerships'
    }
  ];

  const stats = [
    { number: 50, label: 'Successful Deals', suffix: '+' },
    { number: 1000, label: 'Funds Mobilized (₹Cr)', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 30, label: 'Active Clients', suffix: '+' }
  ];


  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-gradient-purple text-white py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins text-5xl lg:text-6xl font-bold mb-6">About Agilio Capital Partners</h1>
            <p className="font-inter text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in navigating complex financial landscapes and achieving strategic business objectives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Story & Mission
              </h2>
              <p className="font-inter text-lg text-gray-300 leading-relaxed mb-6">
                Agilio Capital Partners was founded with a clear vision: to provide world-class investment banking services 
                that drive meaningful business transformation. We combine global financial expertise 
                with deep local market knowledge to deliver exceptional results
              </p>
              <p className="font-inter text-lg text-gray-300 leading-relaxed mb-8">
                Our mission is to empower businesses across various sectors by providing strategic financial advisory, 
                facilitating capital raising, and creating value through innovative financial solutions
              </p>
              
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-navy-800/60 backdrop-blur-md rounded-2xl p-6 border border-purple-600/20 hover:border-purple-400/40 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-3xl font-poppins font-bold text-purple-400 mb-2">
                        <Counter end={stat.number} suffix={stat.suffix} isActive={statsInView} />
                      </div>
                      <div className="font-inter text-gray-300 font-medium">{stat.label}</div>
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
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern office building"
                  className="rounded-2xl shadow-glow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals leading Agilio Capital Partners
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-navy-800/80 backdrop-blur-md rounded-2xl shadow-glow p-8 lg:p-12 border border-purple-600/20"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  {/* Profile Image */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <img
                        src="/files_5286024-1749798839350-WhatsApp_Image_2025-06-12_at_22.40.32_83de4719-removebg-preview (1).png"
                        alt={member.name}
                        className="w-full max-w-sm mx-auto rounded-2xl shadow-glow"
                        style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-3">
                    <h3 className="font-poppins text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="font-inter text-lg text-purple-400 font-semibold mb-4">{member.role}</p>
                    <p className="font-inter text-gray-300 leading-relaxed mb-6">{member.description}</p>
                    
                    {/* LinkedIn Button */}
                    <div className="mt-6">
                      <motion.a
                        href="https://www.linkedin.com/in/t-m-durai-b913356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 shadow-glow hover:shadow-glow-lg"
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
      <section ref={valuesRef} className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div className="bg-navy-800/60 backdrop-blur-md rounded-2xl p-6 border border-purple-600/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-glow">
                  <div className="text-center">
                    <div className="text-purple-400 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="font-inter text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Location
            </h2>
            <p className="font-inter text-xl text-gray-300">
              Strategically located in the heart of Bangalore's business district
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-navy-800/80 backdrop-blur-md rounded-2xl shadow-glow p-8 lg:p-12 max-w-4xl mx-auto border border-purple-600/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-white mb-4">Bangalore Office</h3>
                  <div className="space-y-3 font-inter text-gray-300">
                    <p className="text-lg">
                      <strong className="text-purple-400">Address:</strong><br />
                      14-1, BTS Main Road<br />
                      Wilson Garden<br />
                      Bangalore, Karnataka 560030
                    </p>
                    <p className="text-lg">
                      <strong className="text-purple-400">Email:</strong><br />
                      <a href="mailto:agiliocap@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                        agiliocap@gmail.com
                      </a>
                    </p>
                    <p className="text-lg">
                      <strong className="text-purple-400">LinkedIn:</strong><br />
                      <a
                        href="https://www.linkedin.com/in/t-m-durai-b913356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        Professional Profile
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Bangalore business district"
                      className="rounded-xl shadow-glow"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent rounded-xl"></div>
                  </div>
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
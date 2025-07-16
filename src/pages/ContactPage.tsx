import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Seed & Angel Funding',
    'Private Equity & Venture Capital',
    'CFO & Support Services',
    'Debt Solutions & Working Capital',
    'Structured Finance',
    'Strategic Partnerships',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-20 relative overflow-hidden">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-inter">
              Ready to explore how Agilio Capital Partners can help transform your business? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-navy-800/80 backdrop-blur-md rounded-2xl shadow-glow p-8 border border-purple-600/20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-poppins font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2 font-poppins">Thank You!</h3>
                  <p className="text-gray-300 font-inter">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2 font-inter">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-purple-600/30 bg-navy-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors font-inter placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2 font-inter">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-purple-600/30 bg-navy-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors font-inter placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-purple-400 mb-2 font-inter">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-purple-600/30 bg-navy-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors font-inter placeholder-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-purple-400 mb-2 font-inter">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-purple-600/30 bg-navy-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors font-inter placeholder-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-purple-400 mb-2 font-inter">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-600/30 bg-navy-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors font-inter"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2 font-inter">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-600/30 bg-navy-900/50 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none font-inter placeholder-gray-400"
                      placeholder="Tell us about your requirements and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-glow hover:shadow-glow-lg font-poppins"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div 
                className="bg-navy-800/80 backdrop-blur-md rounded-2xl p-8 shadow-glow border border-purple-600/20"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-poppins font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg border border-purple-600/30">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-poppins">Office Address</h3>
                      <p className="text-gray-300 font-inter">
                        14-1, BTS Main Road<br />
                        Wilson Garden<br />
                        Bangalore, Karnataka 560030<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg border border-purple-600/30">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-poppins">Email</h3>
                      <a 
                        href="mailto:agiliocap@gmail.com"
                        className="text-purple-400 hover:text-purple-300 transition-colors font-inter"
                      >
                        agiliocap@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg border border-purple-600/30">
                      <Linkedin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-poppins">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/company/agilio-capital-partners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors font-inter"
                      >
                        Agilio Capital Partners
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-purple-600/10 backdrop-blur-md rounded-2xl p-8 border border-purple-600/30"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-poppins font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300 font-inter">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-purple rounded-2xl p-8 text-white"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-xl font-poppins font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-white/90 leading-relaxed font-inter">
                  We understand that time is critical in financial matters. 
                  That's why we guarantee a response to all inquiries within 24 hours.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-300 font-inter">
              Located in the heart of Bangalore's business district
            </p>
          </motion.div>

          <motion.div 
            className="bg-navy-800/80 backdrop-blur-md rounded-2xl shadow-glow p-8 border border-purple-600/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <div className="bg-navy-900/50 rounded-lg flex items-center justify-center h-96">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-300 font-inter">
                    Interactive map would be integrated here<br />
                    14-1, BTS Main Road, Wilson Garden<br />
                    Bangalore, Karnataka 560030
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
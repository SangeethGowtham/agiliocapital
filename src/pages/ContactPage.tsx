import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track form submission with Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form Submission',
          value: 1
        });
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);

      // Reset form after 5 seconds
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
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-gray-800 py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 text-gray-800">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
              Ready to explore how Funds Progrez^ can help transform your investment strategy? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
              <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">Thank You!</h3>
                  <p className="text-gray-600 font-inter">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="+91 98765 43210"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none font-inter"
                      placeholder="Tell us about your investment requirements and how we can help..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center shadow-lg font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 font-poppins">Office Address</h3>
                      <p className="text-gray-600 font-inter">
                        14-1, BTS Main Road<br />
                        Wilson Garden<br />
                        Bangalore, Karnataka 560030<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 font-poppins">Email</h3>
                      <a 
                        href="mailto:agiliocap@gmail.com"
                        className="text-primary-600 hover:text-primary-700 transition-colors font-inter"
                      >
                        agiliocap@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Linkedin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 font-poppins">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/t-m-durai-b913356/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors font-inter"
                      >
                        Professional Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-poppins font-bold text-gray-800 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600 font-inter">
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
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-poppins font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-purple-100 leading-relaxed font-inter">
                  We understand that time is critical in investment decisions. 
                  That's why we guarantee a response to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Located in the heart of Bangalore's business district
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="aspect-w-16 aspect-h-9">
              <div className="bg-gray-100 rounded-lg flex items-center justify-center h-96">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-inter">
                    Interactive map would be integrated here<br />
                    14-1, BTS Main Road, Wilson Garden<br />
                    Bangalore, Karnataka 560030
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
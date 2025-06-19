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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
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
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section 
        className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed font-inter">
              Ready to explore how Agilio Capital Partners can help transform your business? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dark-100/80 backdrop-blur-md rounded-2xl shadow-neumorphic p-8 border border-primary-600/20">
              <h2 className="text-2xl font-poppins font-bold text-primary-300 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-300 mb-2 font-poppins">Thank You!</h3>
                  <p className="text-dark-500 font-inter">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2 font-inter">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-primary-600/30 bg-dark-200/50 text-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2 font-inter">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-primary-600/30 bg-dark-200/50 text-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary-300 mb-2 font-inter">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-primary-600/30 bg-dark-200/50 text-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-300 mb-2 font-inter">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-primary-600/30 bg-dark-200/50 text-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary-300 mb-2 font-inter">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-primary-600/30 bg-dark-200/50 text-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2 font-inter">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-primary-600/30 bg-dark-200/50 text-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none font-inter"
                      placeholder="Tell us about your requirements and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center shadow-glow font-poppins"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-dark-100/80 backdrop-blur-md rounded-2xl p-8 shadow-neumorphic border border-primary-600/20">
                <h2 className="text-2xl font-poppins font-bold text-primary-300 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-600/20 p-3 rounded-lg border border-primary-600/30">
                      <MapPin className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-300 mb-1 font-poppins">Office Address</h3>
                      <p className="text-dark-500 font-inter">
                        14-1, BTS Main Road<br />
                        Wilson Garden<br />
                        Bangalore, Karnataka 560030<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-600/20 p-3 rounded-lg border border-primary-600/30">
                      <Mail className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-300 mb-1 font-poppins">Email</h3>
                      <a 
                        href="mailto:agiliocap@gmail.com"
                        className="text-primary-400 hover:text-primary-300 transition-colors font-inter"
                      >
                        agiliocap@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-600/20 p-3 rounded-lg border border-primary-600/30">
                      <Linkedin className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-300 mb-1 font-poppins">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/company/agilio-capital-partners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors font-inter"
                      >
                        Agilio Capital Partners
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-600/10 backdrop-blur-md rounded-2xl p-8 border border-primary-600/30">
                <h3 className="text-xl font-poppins font-bold text-primary-300 mb-4">Office Hours</h3>
                <div className="space-y-2 text-dark-500 font-inter">
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

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-poppins font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-primary-100 leading-relaxed font-inter">
                  We understand that time is critical in financial matters. 
                  That's why we guarantee a response to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-dark-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary-300 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-dark-500 font-inter">
              Located in the heart of Bangalore's business district
            </p>
          </div>

          <div className="bg-dark-100/80 backdrop-blur-md rounded-2xl shadow-neumorphic p-8 border border-primary-600/20">
            <div className="aspect-w-16 aspect-h-9">
              <div className="bg-dark-200/50 rounded-lg flex items-center justify-center h-96">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <p className="text-dark-500 font-inter">
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
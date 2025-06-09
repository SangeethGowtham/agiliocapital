import React from 'react';
import { Award, Users, Target, Globe, CheckCircle, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction and client relationship.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Transparent and ethical practices form the foundation of our business.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge financial strategies and technologies.'
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
      description: 'Seasoned investment banking professional with over 15 years of experience in corporate finance, mergers & acquisitions, and strategic advisory.',
      credentials: ['Chartered Accountant', 'Corporate Finance Specialist', 'M&A Expert']
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Deals' },
    { number: '₹500Cr+', label: 'Transaction Value' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Agilio Capital Partners</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in navigating complex financial landscapes and achieving strategic business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Agilio Capital Partners was founded with a clear vision: to provide world-class investment banking services 
                that drive meaningful business transformation. Based in Bangalore, we combine global financial expertise 
                with deep local market knowledge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our mission is to empower businesses across various sectors by providing strategic financial advisory, 
                facilitating capital raising, and creating value through innovative financial solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office building"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Agilio Capital Partners
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{member.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Professional Credentials:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential, credIndex) => (
                          <span
                            key={credIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="https://www.linkedin.com/company/agilio-capital-partners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to investment banking and client relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Professional Excellence
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our team comprises seasoned professionals with extensive experience in investment banking, 
                corporate finance, and strategic advisory services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Chartered Accountants with deep financial expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Corporate lawyers specializing in M&A and finance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Investment banking professionals with global experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Strategic advisors across multiple industry sectors</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Strategically located in the heart of Bangalore's business district
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bangalore Office</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg">
                    <strong>Address:</strong><br />
                    14-1, BTS Main Road<br />
                    Wilson Garden<br />
                    Bangalore, Karnataka 560030
                  </p>
                  <p className="text-lg">
                    <strong>Email:</strong><br />
                    <a href="mailto:agiliocap@gmail.com" className="text-blue-600 hover:text-blue-800">
                      agiliocap@gmail.com
                    </a>
                  </p>
                  <p className="text-lg">
                    <strong>LinkedIn:</strong><br />
                    <a
                      href="https://www.linkedin.com/company/agilio-capital-partners"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
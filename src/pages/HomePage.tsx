import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, Shield, Banknote, Heart, Smartphone, Tractor } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';
import SplineViewer from '../components/SplineViewer';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Seed & Angel Funding',
      description: 'We partner with early and concept stage enterprises, connect them to venture capital and seed, accelerator, HNI angel investors and unsecured loans to realize the capital.',
      link: '/services/seed-angel-funding',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Private Equity & Venture Capital',
      description: 'Equity and Growth capital can be arranged from large PE| VC funds, Family offices and Strategic Investors for mature and potential business.',
      link: '/services/corporate-finance',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'CFO & Support Services',
      description: 'The entire financial and compliance related functions can be done by us. We operate either independently or in conjunction with your finance team.',
      link: '/services/cfo-services',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Debt Solutions & Working Capital',
      description: 'Term loan and NCDs, Debt Restructuring, Project Financing, Unsecured business Loan, Line of Credit for Equipment Finance.',
      link: '/services/loan-debt-syndication',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const focusSectors = [
    { 
      name: 'BFSI', 
      icon: <Banknote className="h-12 w-12" />, 
      description: 'Banking, Financial Services & Affordable Housing Finance'
    },
    { 
      name: 'Healthcare', 
      icon: <Heart className="h-12 w-12" />, 
      description: 'Pharmaceuticals, health care and allied services'
    },
    { 
      name: 'Social Enterprises', 
      icon: <Users className="h-12 w-12" />, 
      description: 'Impact-driven organizations creating social value'
    },
    { 
      name: 'FinTech', 
      icon: <Smartphone className="h-12 w-12" />, 
      description: 'Digital financial services and payment solutions'
    },
    { 
      name: 'Agriculture', 
      icon: <Tractor className="h-12 w-12" />, 
      description: 'AgTech, sustainable farming, renewable energy and food security solutions'
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Deals' },
    { number: '₹1000Cr+', label: 'Transaction Value' },
    { number: '25+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const clients = [
    { name: 'MSM Microfinance Limited', logo: 'https://i.ibb.co/whpkyGw/clients.png' },
    { name: 'Unnatti', logo: 'https://i.ibb.co/whpkyGw/clients.png' },
    { name: 'Virutcham', logo: 'https://i.ibb.co/whpkyGw/clients.png' },
    { name: 'Sugmya Finance', logo: 'https://i.ibb.co/whpkyGw/clients.png' },
    { name: 'Shiksha', logo: 'https://i.ibb.co/whpkyGw/clients.png' },
    { name: 'Swara', logo: 'https://i.ibb.co/whpkyGw/clients.png' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with 3D Background */}
      <section className="relative text-white overflow-hidden" style={{ height: '100vh' }}>
        {/* 3D Spline Background */}
        <div className="absolute inset-0 z-0">
          <SplineViewer 
            url="https://prod.spline.design/6Wq5GiW7CRJZgKua/scene.splinecode"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-transparent to-primary-800/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20">
          <div className="text-center w-full">
            <h1 className="font-poppins font-bold leading-tight mb-6 text-white text-4xl lg:text-6xl">
              Investment Banking
              <span className="block text-primary-300 mt-2">
                <TypewriterText 
                  texts={['Excellence', 'Innovation', 'Growth', 'Success', 'Transformation', 'Progress']}
                  speed={120}
                />
              </span>
            </h1>
            
            <p className="font-inter text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Empowering businesses with strategic financial solutions, from seed funding to complex structured finance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Sectors Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Focus Sectors
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across key industry verticals in investment banking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {focusSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {sector.icon}
                </div>
                <h3 className="font-poppins text-lg font-semibold text-gray-800 mb-2">
                  {sector.name}
                </h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment banking solutions tailored to empower your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="block bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200/50 overflow-hidden hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9 h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="font-inter text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Clients
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across various sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="hover:scale-110 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-poppins font-bold mb-2 text-primary-200">
                  {stat.number}
                </div>
                <div className="font-inter text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="font-inter text-xl text-primary-100 mb-8 leading-relaxed">
            Let's discuss how our investment banking expertise can help you achieve your organizational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:agiliocap@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
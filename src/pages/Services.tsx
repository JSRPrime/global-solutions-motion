
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const servicesList = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically to address your business needs and challenges.",
      details: [
        "Enterprise Software Solutions",
        "CRM & ERP Systems",
        "E-commerce Platforms",
        "Content Management Systems",
        "Custom API Development"
      ],
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Engaging and feature-rich mobile applications for iOS and Android platforms.",
      details: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-platform Solutions",
        "Progressive Web Apps",
        "App Store Optimization"
      ],
      icon: "📱"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Responsive and dynamic websites and web applications with modern technologies.",
      details: [
        "Responsive Website Design",
        "Progressive Web Applications",
        "E-commerce Websites",
        "Web Portals & Dashboards",
        "Performance Optimization"
      ],
      icon: "🌐"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable and reliable cloud infrastructure and migration services.",
      details: [
        "Cloud Migration",
        "AWS & Azure Solutions",
        "Cloud-native Applications",
        "Serverless Architecture",
        "DevOps Implementation"
      ],
      icon: "☁️"
    },
    {
      id: 5,
      title: "IT Consulting",
      description: "Strategic technology advisory to help your business grow and transform.",
      details: [
        "Digital Transformation Strategy",
        "Technology Assessment",
        "IT Roadmap Development",
        "Process Optimization",
        "Security Consulting"
      ],
      icon: "🤝"
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Comprehensive testing and QA services to ensure high-quality software.",
      details: [
        "Manual & Automated Testing",
        "Performance Testing",
        "Security Testing",
        "User Experience Testing",
        "Continuous Integration"
      ],
      icon: "✅"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Services Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We offer a comprehensive range of software development and IT services to help your business thrive in the digital era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Separator className="my-4" />
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure quality and efficiency in all our projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Discovery', 'Design', 'Development', 'Delivery'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "We understand your business needs, goals, and challenges to define project scope."}
                  {index === 1 && "We create wireframes and prototypes to visualize the solution before development."}
                  {index === 2 && "Our team builds your solution using the latest technologies and best practices."}
                  {index === 3 && "We deploy your solution and provide ongoing support and maintenance."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can address your specific needs and help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

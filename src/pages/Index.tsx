import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Package, Database, Book, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Map from '@/components/Map';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Tally Software Service",
      description: "Comprehensive Tally software support and maintenance services",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Tally Integration",
      description: "Seamless integration with your existing business systems",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Tally AMC",
      description: "Annual maintenance contract for continued support",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Tally Synchronisation",
      description: "Sync your Tally data across multiple locations",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Tally Corporate Training",
      description: "Professional training programs for your team",
      icon: <Book className="w-8 h-8" />
    },
    {
      title: "Tally Customization",
      description: "Customize Tally to match your business needs",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Tally Implementation",
      description: "Expert implementation services for smooth transition",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  const featuredProducts = [
    {
      title: "TallyPrime",
      description: "Complete Business Management Software",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301462781/WG/JP/YR/64443040/tally-prime-software.png"
    },
    {
      title: "Biz Analyst",
      description: "Mobile Business Analytics Solution",
      image: "https://play-lh.googleusercontent.com/zfjrbaT9qyM5H6Kmuy9m824IDtGHypDyL0tO-AvfmUw7z_zC763RIrNYDYJCDzA1wA"
    },
    {
      title: "Busy",
      description: "Professional Accounting Software",
      image: "https://w7.pngwing.com/pngs/382/649/png-transparent-brand-computer-software-logo-accounting-software-design-logo-business-accounting.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Complete Business
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses with comprehensive software solutions and expert services
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-500 text-white hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions and support services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading software solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="h-32" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Business Street, City, Country</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contact@example.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-[600px] rounded-lg overflow-hidden shadow-lg"
            >
              <Map />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

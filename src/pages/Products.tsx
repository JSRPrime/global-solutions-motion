import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Package, ChartBar, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productCategories = [
    { id: "tally", label: "TallyPrime" },
    { id: "biz", label: "Biz Analyst" },
    { id: "busy", label: "Busy" },
    { id: "vyapar", label: "Vyapar" }
  ];

  const products = {
    tally: [
      {
        title: "TallyPrime Gold",
        description: "Premium business management solution with advanced features.",
        features: [
          "Multi-user support",
          "Advanced reporting",
          "Remote access",
          "Bank integration",
          "Advanced security"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1530"
      },
      {
        title: "TallyPrime Silver",
        description: "Essential business management solution for growing businesses.",
        features: [
          "Single user",
          "Standard reporting",
          "Local access",
          "Basic security",
          "Standard features"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470"
      },
      {
        title: "TallyPrime Server",
        description: "Enterprise-grade solution for large organizations.",
        features: [
          "Unlimited users",
          "Enterprise features",
          "Advanced customization",
          "High security",
          "Premium support"
        ],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1470"
      }
    ],
    biz: [
      {
        title: "Biz Analyst - 1 Year",
        description: "Business analytics solution with 1-year subscription.",
        features: [
          "Real-time analytics",
          "Mobile access",
          "1 year validity",
          "Standard support",
          "Regular updates"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470"
      },
      {
        title: "Biz Analyst - 3 Years",
        description: "Extended business analytics solution with 3-year subscription.",
        features: [
          "Advanced analytics",
          "Priority support",
          "3 years validity",
          "Additional features",
          "Premium updates"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1530"
      },
      {
        title: "Biz Analyst - 5 Years",
        description: "Long-term business analytics solution with 5-year subscription.",
        features: [
          "Enterprise analytics",
          "VIP support",
          "5 years validity",
          "All features",
          "Priority updates"
        ],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1470"
      }
    ],
    busy: [
      {
        title: "Busy Accounting Software",
        description: "Complete accounting solution for businesses.",
        features: [
          "Financial accounting",
          "Inventory management",
          "GST compliance",
          "MIS reports",
          "Bank reconciliation"
        ],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1470"
      }
    ],
    vyapar: [
      {
        title: "Vyapar Software",
        description: "Business accounting software for small businesses.",
        features: [
          "Billing & invoicing",
          "Inventory tracking",
          "Business reports",
          "GST filing",
          "Mobile app access"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1530"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Products Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powerful software solutions designed to transform and grow your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs defaultValue="tally" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {productCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.keys(products).map(category => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products[category].map((product, index) => (
                      <motion.div
                        key={product.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      >
                        <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{product.title}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <h4 className="font-medium mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {product.features.map((feature, i) => (
                                <li key={i} className="text-gray-600 flex items-start text-sm">
                                  <span className="text-blue-500 mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Product Demo CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Want to See Our Products in Action?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our product specialists to see how our solutions can help your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                <p className="text-gray-600 mb-6">
                  Our products can be tailored to meet your specific business requirements. Our team of experts will work with you to customize our solutions or develop entirely new ones based on your unique needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tailored to your specific workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Integration with your existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Scalable as your business grows</span>
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Explore Custom Development
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-gray-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&q=80&w=1470"
                  alt="Custom software development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServiceLayout = ({ title, description, children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/services"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceLayout;


import ServiceLayout from '@/components/ServiceLayout';
import { FileText, CheckCircle } from 'lucide-react';

const TallyService = () => {
  const features = [
    "Software Updates & Upgrades",
    "Technical Support",
    "Remote Access Support",
    "Data Recovery Support",
    "Priority Response"
  ];

  return (
    <ServiceLayout
      title="Tally Software Service"
      description="Comprehensive Tally software support and maintenance services to keep your business running smoothly."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <FileText className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Service Features</h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Service?</h2>
          <p className="text-gray-600 mb-4">
            Our Tally Software Service ensures your business operations run without interruption. 
            We provide comprehensive support, regular updates, and expert assistance whenever you need it.
          </p>
          <p className="text-gray-600">
            With our dedicated team of Tally experts, you can focus on your business 
            while we take care of your software needs.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TallyService;

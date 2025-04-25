
import ServiceLayout from '@/components/ServiceLayout';
import { Database, CheckCircle } from 'lucide-react';

const TallyIntegrationService = () => {
  const features = [
    "API Integration with Third-party Systems",
    "Custom Integration Solutions",
    "Data Synchronization",
    "Real-time Integration",
    "Automated Data Flow"
  ];

  return (
    <ServiceLayout
      title="Tally Integration Service"
      description="Seamlessly integrate Tally with your existing business systems for enhanced efficiency."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <Database className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Integration Features</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Integration Benefits</h2>
          <p className="text-gray-600 mb-4">
            Our Tally integration service ensures seamless data flow between your systems. 
            We provide custom solutions tailored to your business needs, ensuring maximum efficiency.
          </p>
          <p className="text-gray-600">
            With our expert integration services, you can automate data transfer, 
            reduce manual entry, and improve accuracy across your business operations.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TallyIntegrationService;

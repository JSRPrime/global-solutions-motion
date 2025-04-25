
import ServiceLayout from '@/components/ServiceLayout';
import { Book, CheckCircle } from 'lucide-react';

const TallyTrainingService = () => {
  const features = [
    "Customized Training Programs",
    "Hands-on Practice Sessions",
    "Real-world Case Studies",
    "Certification Programs",
    "Post-training Support"
  ];

  return (
    <ServiceLayout
      title="Tally Corporate Training"
      description="Professional Tally training programs designed for your team's success."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <Book className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Training Features</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Training Benefits</h2>
          <p className="text-gray-600 mb-4">
            Our comprehensive training programs are designed to enhance your team's proficiency 
            in Tally software, improving productivity and accuracy in daily operations.
          </p>
          <p className="text-gray-600">
            With practical exercises and real-world scenarios, your team will gain 
            hands-on experience and confidence in using Tally effectively.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TallyTrainingService;

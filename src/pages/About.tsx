
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState([
    { name: "Tally Implementation", value: 95 },
    { name: "Software Integration", value: 90 },
    { name: "Technical Support", value: 85 },
    { name: "Custom Development", value: 80 },
    { name: "Business Analytics", value: 75 }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* About Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Alphabet Global Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We are a leading software development company delivering innovative solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Alphabet Global Solutions was founded with a vision to transform how businesses leverage technology. Starting as a small team of passionate developers, we've grown into a global company serving clients across multiple industries.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a commitment to quality and innovation, values that continue to drive our work today. We believe that powerful software solutions should be accessible to businesses of all sizes.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped hundreds of companies achieve their digital transformation goals through custom software, mobile applications, and cloud solutions.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470"
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our guiding principles that shape every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through innovative technology solutions that solve real-world problems and drive sustainable growth. We are committed to delivering high-quality software that exceeds client expectations and creates lasting value.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in digital transformation, recognized for our technical excellence, innovative approach, and client-focused solutions. We aspire to shape the future of technology and help businesses thrive in an increasingly digital world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We excel in various technologies to deliver comprehensive solutions
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

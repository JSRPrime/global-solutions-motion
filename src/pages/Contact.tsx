
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('general');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally, this would send the form data to a server
    // For demo purposes, we'll just show a success toast
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubject('general');
  };

  const offices = [
    {
      city: "New York",
      address: "123 Business Avenue, Suite 100, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@ags.com"
    },
    {
      city: "San Francisco",
      address: "456 Technology Drive, San Francisco, CA 94105",
      phone: "+1 (555) 765-4321",
      email: "sanfrancisco@ags.com"
    },
    {
      city: "London",
      address: "10 Innovation Square, London, UK EC2A 1NT",
      phone: "+44 20 1234 5678",
      email: "london@ags.com"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Contact Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Have a question or want to discuss your project? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="+1 (555) 123-4567" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <RadioGroup 
                    defaultValue="general"
                    value={subject}
                    onValueChange={setSubject}
                    className="flex flex-wrap gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general">General Inquiry</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" />
                      <Label htmlFor="support">Technical Support</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sales" id="sales" />
                      <Label htmlFor="sales">Sales</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or question..." 
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full">Submit Message</Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="font-semibold text-lg mb-3">Headquarters</h3>
                <p className="text-gray-700 mb-1">Alphabet Global Solutions</p>
                <p className="text-gray-700 mb-1">789 Tech Plaza</p>
                <p className="text-gray-700 mb-1">Silicon Valley, CA 94024</p>
                <p className="text-gray-700 mb-3">United States</p>
                <p className="text-gray-700 flex items-center">
                  <span className="mr-2">📞</span>
                  Main: +1 (555) 987-6543
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="mr-2">✉️</span>
                  info@ags.com
                </p>
              </div>
              
              <h3 className="font-semibold text-lg mb-4">Our Offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-medium mb-2">{office.city}</h4>
                    <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                    <p className="text-gray-600 text-sm mb-1">{office.phone}</p>
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-700 font-medium">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-medium">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our headquarters is conveniently located in Silicon Valley
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200"
          >
            {/* Replace with actual map if desired */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Map placeholder - Google Maps would be embedded here</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

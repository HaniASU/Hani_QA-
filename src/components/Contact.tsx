
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to discuss quality assurance opportunities or collaborate on testing projects? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <Card className="p-8 bg-white border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <a 
                      href="mailto:hanimohamedfcis2023@gmail.com" 
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      hanimohamedfcis2023@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Phone</div>
                    <a 
                      href="tel:+201221136042" 
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      (+20) 1221136042
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Location</div>
                    <span className="text-slate-600">Cairo, Egypt</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="#"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#"
                    className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-colors transform hover:scale-105"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:hanimohamedfcis2023@gmail.com"
                    className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors transform hover:scale-105"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card className="p-8 bg-white border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center animate-on-scroll">
          <p className="text-slate-600">
            © 2024 Hani Mohamed Sayed Ahmed. Built with passion for quality assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

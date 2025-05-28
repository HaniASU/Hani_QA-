
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Hani Mohamed
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              Software Quality Assurance Engineer
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl leading-relaxed">
              Specialized in ensuring software reliability through structured test planning, 
              execution, and issue tracking. Passionate about delivering high-quality software 
              products that enhance user experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="mailto:hanimohamedfcis2023@gmail.com"
                className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50"
              >
                <Mail className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </a>
              <a 
                href="#"
                className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50"
              >
                <Linkedin className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </a>
              <a 
                href="#"
                className="p-3 bg-white shadow-md rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50"
              >
                <Github className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-slate-100 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-200 to-slate-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-slate-400">HM</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

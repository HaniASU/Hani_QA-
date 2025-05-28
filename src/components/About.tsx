
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "1+ Years Experience",
      description: "Manual and API testing expertise"
    },
    {
      icon: Target,
      title: "20% Faster Resolution",
      description: "Reduced defect resolution time"
    },
    {
      icon: Users,
      title: "Cross-Platform Testing",
      description: "iOS, Android, and Web applications"
    },
    {
      icon: Zap,
      title: "Test Automation",
      description: "Selenium & TestNG proficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Software Quality Assurance Engineer with 1+ year of experience in manual and API testing. 
            Specialized in ensuring software reliability through structured test planning, execution, and issue tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Passionate About Quality
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I specialize in identifying and resolving critical integration issues, with proven experience 
              in reducing defect resolution time by 20% using Jira & Azure DevOps. My expertise spans 
              functional, regression, and UAT testing.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Currently expanding my skills in test automation using Selenium, I'm passionate about 
              delivering high-quality software products that enhance user experience and ensure 
              seamless functionality across all platforms.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-slate-700">Faculty of Computer and Information Sciences</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-slate-700">Ain Shams University (2019-2023)</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-slate-700">ISTQB Foundation Level Certified</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 animate-on-scroll">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white border-slate-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

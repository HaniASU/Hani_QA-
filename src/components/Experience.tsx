
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Software Quality Assurance Engineer",
    company: "Step by Step",
    period: "Jan 2024 - Present",
    location: "Cairo, Egypt",
    responsibilities: [
      "Developed and executed detailed test cases, bug reports, and test plans using Azure DevOps and Jira, ensuring 100% traceability",
      "Designed and managed structured test plans, along with weekly status and estimation reports, facilitating effective project management",
      "Performed API testing and validated backend services using Postman, identifying and resolving 15+ critical integration issues",
      "Managed frontend-backend integration testing, ensuring seamless data flow across systems and reducing error rates by 10%",
      "Conducted manual testing to verify functional and non-functional requirements, ensuring high-quality deliverables",
      "Prepared and conducted User Acceptance Testing (UAT) on customer sites, ensuring alignment with business expectations",
      "Implemented test automation basics using Selenium & TestNG, leading to a 15% improvement in test efficiency"
    ],
    skills: ["Azure DevOps", "Jira", "Postman", "Selenium", "TestNG", "API Testing", "UAT"]
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Currently working as a Software Quality Assurance Engineer, focusing on delivering 
            high-quality software solutions through comprehensive testing strategies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Card className="p-8 shadow-lg border-slate-200 hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-blue-600 mb-2">
                    <Building className="h-5 w-5 mr-2" />
                    <span className="text-lg font-semibold">{experience.company}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-slate-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Responsibilities & Achievements</h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-600 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

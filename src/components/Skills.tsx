
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TestTube, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing & QA",
      icon: TestTube,
      skills: [
        "Manual Testing",
        "API Testing", 
        "Regression Testing",
        "Smoke Testing",
        "UAT Testing",
        "Integration Testing",
        "Performance Testing",
        "Cross-platform Testing"
      ],
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Automation & Tools",
      icon: Wrench,
      skills: [
        "Selenium",
        "TestNG",
        "Postman",
        "Jira",
        "Azure DevOps",
        "Git/GitHub",
        "Gatling",
        "IntelliJ"
      ],
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        "Java",
        "Scala", 
        "JavaScript",
        "SQL",
        "POM (Page Object Model)",
        "Test Automation",
        "API Development",
        "Web Automation"
      ],
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Technologies",
      icon: Database,
      skills: [
        "Databases",
        "Flask API",
        "TensorFlow",
        "Machine Learning",
        "Android Studio",
        "Visual Studio",
        "Networking",
        "Software Engineering"
      ],
      color: "bg-orange-100 text-orange-700"
    }
  ];

  const certifications = [
    "ISTQB Foundation Level",
    "Effective Test Case and Bug Report Writing Techniques",
    "Database Fundamentals (ITI)",
    "Gatling Performance Testing Scala",
    "Manual Testing Bootcamp",
    "Postman Certification",
    "Automation Testing and Quality Assurance using Java"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit of testing methodologies, automation frameworks, 
            and programming languages that enable me to deliver robust quality assurance solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-slate-200 animate-on-scroll"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${category.color.split(' ')[0]} mr-3`}>
                  <category.icon className={`h-5 w-5 ${category.color.split(' ')[1]} ${category.color.split(' ')[2]}`} />
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className={`${category.color} text-xs block w-fit`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-on-scroll">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-slate-50 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700 text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Languages */}
        <div className="mt-12 animate-on-scroll">
          <Card className="p-6 bg-white border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
              Languages
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Arabic</div>
                <div className="text-sm text-slate-600">Native</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">English</div>
                <div className="text-sm text-slate-600">Professional</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">German</div>
                <div className="text-sm text-slate-600">Beginner</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

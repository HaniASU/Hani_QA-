
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Study App",
      description: "Educational App: Led multi-platform quality assurance efforts using Azure DevOps. Conducted regression testing, uncovering hidden issues and enhancing stability.",
      achievements: [
        "Improved app usability and response time by 15%",
        "Increased user satisfaction by 10% through UX/UI improvements",
        "Led comprehensive regression testing across platforms"
      ],
      technologies: ["Azure DevOps", "Regression Testing", "Cross-platform", "Performance Testing"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Maktaby App",
      description: "Paperless Workflow Management App for Oman government employees. Executed smoke & regression testing to maintain cross-platform functionality.",
      achievements: [
        "Reduced defect resolution time by 20%",
        "Ensured smooth communication between frontend and backend",
        "Validated API endpoints using Postman"
      ],
      technologies: ["Azure DevOps", "Postman", "API Testing", "Smoke Testing", "Regression Testing"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Helpdesk App",
      description: "Customer Service App for digital services in Oman. Designed and implemented quality assurance plans for iOS & Android compatibility.",
      achievements: [
        "Ensured 99% system uptime during production releases",
        "Reduced issue resolution time by 15%",
        "Coordinated frontend-backend quality assurance testing"
      ],
      technologies: ["iOS Testing", "Android Testing", "Azure DevOps", "System Integration"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Key2Bus",
      description: "Bus Tracking App that facilitates real-time tracking and scheduling to enhance student transportation services.",
      achievements: [
        "Improved GPS accuracy & reduced tracking errors by 20%",
        "Led smoke and regression testing, resolving 10+ critical defects",
        "Created detailed test strategies for iOS and Android platforms"
      ],
      technologies: ["Postman", "API Testing", "GPS Testing", "iOS", "Android", "Real-time Systems"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of quality assurance projects where I've applied comprehensive testing strategies 
            to ensure software reliability and enhance user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-slate-200 animate-on-scroll"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

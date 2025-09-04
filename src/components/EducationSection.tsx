import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // disconnect once visible to avoid repeated calls
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Master of Science",
      field: "Information Systems",
      university: "Wilmington University",
      location: "Delaware, USA",
      period: "Jan 2022 - Apr 2023",
      gpa: "3.8/4.0",
      description: "Specialized in data analytics, systems integration, and enterprise technology solutions with focus on HR information systems.",
      highlights: [
        "Advanced Database Management",
        "Business Intelligence & Analytics",
        "Systems Analysis & Design",
        "Project Management"
      ],
      color: "from-primary to-primary-glow",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      university: "SCIENT Institute of Technology",
      location: "Hyderabad, India",
      period: "2015-2019"
      gpa: "First Class",
      description: "Foundation in computer science fundamentals with emphasis on software development, data structures, and algorithmic thinking.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Technologies"
      ],
      color: "from-secondary to-secondary-glow",
      icon: Award
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-10 px-6">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-gradient-secondary mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in technology and information systems
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.university}
              className={`card-hover p-8 rounded-2xl transform transition-all duration-700 h-full ${isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >

              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gradient-primary mb-1">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    {edu.field}
                  </h4>
                  <h5 className="text-lg font-medium text-foreground mb-3">
                    {edu.university}
                  </h5>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{edu.gpa}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Key Subjects */}
              <div>
                <h6 className="font-semibold text-foreground mb-3">Key Coursework</h6>
                <div className="grid grid-cols-2 gap-2">
                  {edu.highlights.map((subject, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-violet flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-accent">
                      Academic Excellence
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-foreground">{edu.gpa}</div>
                    <div className="text-xs text-muted-foreground">GPA</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;

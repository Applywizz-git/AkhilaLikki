import { useState, useEffect, useRef } from 'react';
import { Building2, Calendar, MapPin, TrendingUp, Users, Database } from 'lucide-react';

const CareerJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

   const experiences = [
    {
      company: "Amazon",
      role: "People Analytics Analyst",
      type: "Full-time",
      duration: "2022 - Present",
      location: "Seattle, WA",
      logo: "https://logo.clearbit.com/amazon.com",
      description: "Leading advanced people analytics initiatives to drive strategic HR decisions across global operations.",
      achievements: [
        "Developed geo-based attrition analysis reducing turnover by 7%",
        "Built executive dashboards serving 500+ managers",
        "Implemented predictive models for workforce planning",
        "Led cross-functional teams for data-driven DEI initiatives"
      ],
      technologies: ["Tableau", "SQL", "Redshift", "Workday", "Python", "AWS"],
      impact: {
        icon: TrendingUp,
        value: "7% reduction",
        metric: "in attrition rate"
      }
    },
    {
      company: "QVC",
      role: "Workday Analyst",
      type: "Full-time",
      duration: "2021 - 2022",
      location: "West Chester, PA",
      logo: "https://logo.clearbit.com/qvc.com",
      description: "Specialized in Workday HCM optimization, focusing on compensation automation and reporting excellence.",
      achievements: [
        "Automated compensation processes reducing manual touchpoints by 30%",
        "Designed and implemented custom Workday reports",
        "Led Workday Studio integrations for payroll systems",
        "Maintained 100% SLA compliance for critical HR processes"
      ],
      technologies: ["Workday HCM", "Workday Studio", "EIB", "Compensation Module", "REST APIs"],
      impact: {
        icon: Users,
        value: "30% reduction",
        metric: "in manual processes"
      }
    },
    {
      company: "Way2Online",
      role: "HR Operations Intern",
      type: "Internship",
      duration: "2020 - 2021",
      location: "Hyderabad, India",
      logo: "https://logo.clearbit.com/way2online.com",
      description: "Foundation role in HR operations, building expertise in data analysis and process optimization.",
      achievements: [
        "Streamlined employee onboarding processes",
        "Created performance tracking dashboards",
        "Analyzed recruitment metrics and trends",
        "Supported HRIS implementation projects"
      ],
      technologies: ["Excel", "HRIS", "Data Analysis", "Process Mapping"],
      impact: {
        icon: Database,
        value: "100% accuracy",
        metric: "in data reporting"
      }
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-10 px-6 bg-card/30">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-gradient-secondary mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through enterprise HR transformation and people analytics
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`card-hover p-8 rounded-2xl transform transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">

                {/* Company Info */}
                <div className="lg:col-span-4">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center border border-secondary/20">
                      <Building2 className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient-secondary mb-1">
                        {exp.company}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.role}
                      </h4>
                      <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metric */}
                  <div className="bg-gradient-to-br from-accent/10 to-violet/10 p-4 rounded-xl border border-accent/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
                        <exp.impact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">{exp.impact.value}</div>
                        <div className="text-sm text-muted-foreground">{exp.impact.metric}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Technologies & Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}>
          <p className="text-lg text-muted-foreground mb-4">
            Ready to bring data-driven HR transformation to your organization?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero px-8 py-3"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;

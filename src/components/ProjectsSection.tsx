import { useState, useEffect, useRef } from 'react';
import { BarChart3, Users, Database, TrendingUp, Zap, Settings } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: "Workday Compensation Automation",
      company: "QVC",
      category: "Process Automation",
      description: "Comprehensive automation solution for compensation processes, eliminating manual touchpoints and ensuring accuracy across all compensation workflows.",
      impact: {
        primary: "30% reduction in manual touchpoints",
        secondary: "100% accuracy in compensation calculations",
        tertiary: "50% faster processing time"
      },
      technologies: ["Workday HCM", "Compensation Module", "Workday Studio", "EIB", "REST APIs"],
      features: [
        "Automated salary adjustment workflows",
        "Real-time compensation reporting",
        "Integration with payroll systems",
        "Audit trail and compliance tracking"
      ],
      metrics: [
        { label: "Time Saved", value: "40hrs/week", icon: TrendingUp },
        { label: "Accuracy", value: "100%", icon: Settings },
        { label: "Users Impacted", value: "500+", icon: Users }
      ],
      color: "from-primary to-primary-glow",
    },
    {
      title: "People Analytics Dashboard Suite",
      company: "Amazon",
      category: "Data Analytics",
      description: "Advanced analytics platform providing actionable insights into workforce dynamics, attrition patterns, and organizational health metrics.",
      impact: {
        primary: "7% reduction in geo-based attrition",
        secondary: "Real-time insights for 500+ managers",
        tertiary: "Data-driven DEI initiatives"
      },
      technologies: ["Tableau", "SQL", "AWS Redshift", "Workday", "Python", "AWS S3"],
      features: [
        "Predictive attrition modeling",
        "Geographic workforce analysis",
        "DEI metrics and reporting",
        "Executive-level dashboards"
      ],
      metrics: [
        { label: "Attrition Reduction", value: "7%", icon: TrendingUp },
        { label: "Dashboards", value: "15+", icon: BarChart3 },
        { label: "Data Points", value: "1M+", icon: Database }
      ],
      color: "from-secondary to-secondary-glow",
    },
    {
      title: "HR Scorecard Automation Platform",
      company: "Amazon",
      category: "Reporting Automation",
      description: "Automated HR scorecard generation using Composite Reports and Excel macros to streamline reporting across business units.",
      impact: {
        primary: "50+ hours saved per quarter",
        secondary: "Consistent delivery across HR and finance",
        tertiary: "Improved leadership visibility"
      },
      technologies: ["Workday Reporting", "Excel Macros", "Workday Composite Reports", "Automation"],
      features: [
        "Scheduled HR scorecard delivery",
        "Quarterly analytics with minimal manual effort",
        "Cross-BU reporting standardization",
        "Plug-and-play automation"
      ],
      metrics: [
        { label: "Hours Saved", value: "50+/quarter", icon: TrendingUp },
        { label: "Scorecards", value: "20+", icon: BarChart3 },
        { label: "Stakeholders", value: "300+", icon: Users }
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Benefits & Payroll Audit System",
      company: "Way2Online",
      category: "Data Integrity",
      description: "Designed monthly HR dashboards and automated reconciliation to identify payroll discrepancies and ensure benefits compliance.",
      impact: {
        primary: "60% reduction in data mismatch errors",
        secondary: "Accurate open enrollment audits",
        tertiary: "Streamlined HR reporting"
      },
      technologies: ["Power BI", "Excel", "Workday", "VLOOKUP", "PivotTables"],
      features: [
        "Leave utilization & salary tracking",
        "Automated data validation",
        "Benefit enrollment audits",
        "Payroll reconciliation tools"
      ],
      metrics: [
        { label: "Error Reduction", value: "60%", icon: TrendingUp },
        { label: "Audit Accuracy", value: "98%", icon: Settings },
        { label: "Employees Tracked", value: "800+", icon: Users }
      ],
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-10 px-6 bg-card/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-gradient-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformative HR solutions that deliver measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass-morphism card-3d-tilt p-8 rounded-2xl transform transition-all duration-700 h-full overflow-hidden ${
                isVisible ? 'animate-card-3d' : 'opacity-0'
              } ${hoveredProject === index ? 'neon-glow animate-gradient-shift' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center border border-white/10 animate-morph group-hover:animate-particle-float">
                    {index % 2 === 0 ? (
                      <Zap className="w-8 h-8 text-primary group-hover:drop-shadow-lg" />
                    ) : (
                      <BarChart3 className="w-8 h-8 text-secondary group-hover:drop-shadow-lg" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-accent">{project.company}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${hoveredProject === index ? 'holographic' : 'text-gradient-secondary'}`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Impact</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-accent">{project.impact.primary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-sm text-muted-foreground">{project.impact.secondary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{project.impact.tertiary}</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${project.color} text-white shadow-sm hover:shadow-md transition-shadow`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="border-t border-border pt-4">
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center`}>
                          <metric.icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="text-sm font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none animate-gradient-shift`} />
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-particle-float" style={{ animationDelay: '0s' }} />
              <div className="absolute top-12 right-8 w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 animate-particle-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-violet rounded-full opacity-0 group-hover:opacity-100 animate-particle-float" style={{ animationDelay: '1s' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

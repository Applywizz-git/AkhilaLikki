import { useState, useEffect, useRef } from 'react';
import { Database, BarChart3, Settings, Shield, Code, Users, Brain, Zap } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startSkillAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startSkillAnimation = () => {
    const skills = skillCategories.flatMap(category => category.skills);
    
    skills.forEach((skill, index) => {
      setTimeout(() => {
        let current = 0;
        const target = skill.level;
        const increment = target / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedSkills(prev => ({
            ...prev,
            [skill.name]: current
          }));
        }, 30);
      }, index * 150);
    });
  };

  const skillCategories = [
    {
      title: "Workday Ecosystem",
      icon: Settings,
      color: "from-primary to-primary-glow",
      bgColor: "from-primary/10 to-primary-glow/10",
      skills: [
        { name: "Workday HCM", level: 95 },
        { name: "Workday Reporting", level: 92 },
        { name: "EIB (Enterprise Interface Builder)", level: 88 },
        { name: "Workday Studio", level: 85 },
        { name: "Core Connectors", level: 82 }
      ]
    },
    {
      title: "Analytics Tools",
      icon: BarChart3,
      color: "from-secondary to-secondary-glow",
      bgColor: "from-secondary/10 to-secondary-glow/10",
      skills: [
        { name: "Tableau", level: 93 },
        { name: "SQL", level: 90 },
        { name: "Advanced Excel", level: 95 },
        { name: "Python", level: 78 },
        { name: "Power BI", level: 75 }
      ]
    },
    {
      title: "Integrations & APIs",
      icon: Code,
      color: "from-accent to-accent-glow",
      bgColor: "from-accent/10 to-accent-glow/10",
      skills: [
        { name: "REST APIs", level: 85 },
        { name: "Core Connectors", level: 88 },
        { name: "ADP Integration", level: 80 },
        { name: "SFTP/Web Services", level: 82 },
        { name: "JSON/XML", level: 87 }
      ]
    },
    {
      title: "Compliance & Security",
      icon: Shield,
      color: "from-violet to-violet-glow",
      bgColor: "from-violet/10 to-violet-glow/10",
      skills: [
        { name: "EEO Reporting", level: 92 },
        { name: "GDPR Compliance", level: 88 },
        { name: "HIPAA", level: 85 },
        { name: "Data Privacy", level: 90 },
        { name: "Audit & Controls", level: 87 }
      ]
    }
  ];

  const getSkillLevel = (skillName: string, targetLevel: number) => {
    return animatedSkills[skillName] || 0;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-10 px-6">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-gradient-secondary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the HR technology ecosystem
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`card-hover p-8 rounded-2xl transform transition-all duration-700 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.bgColor} border border-white/10 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient-secondary mb-1">
                    {category.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-sm text-muted-foreground">Professional Level</span>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`transform transition-all duration-500 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    
                    {/* Skill Name and Percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-bold text-accent">
                        {Math.round(getSkillLevel(skill.name, skill.level))}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="progress-bar">
                      <div 
                        className="progress-fill transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${getSkillLevel(skill.name, skill.level)}%`,
                          background: `linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--secondary-glow)))`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Summary */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-accent">Expert Level</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-foreground">
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </div>
                    <div className="text-xs text-muted-foreground">Avg. Proficiency</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
             style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-gradient-primary mb-8">
            Additional Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              "AWS Redshift", "Salesforce", "SAP SuccessFactors", "BambooHR", "Greenhouse",
              "Git", "Jira", "Confluence", "Jenkins", "Docker", "MongoDB", "PostgreSQL",
              "Machine Learning", "Statistical Analysis", "Data Visualization", "ETL Processes",
              "Agile Methodology", "Scrum", "Project Management", "Stakeholder Management"
            ].map((tech, index) => (
              <span 
                key={tech}
                className={`px-4 py-2 rounded-full text-sm bg-muted/50 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-default transform hover:scale-105 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${1.2 + (index * 0.05)}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
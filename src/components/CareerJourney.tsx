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
    company: "QVC",
    role: "Workday Analyst",
    type: "Full-time",
    duration: "Aug 2023 – Present",
    location: "West Chester, PA",
    logo: "https://logo.clearbit.com/qvc.com",
    description:
      "Workday HCM reporting & configuration across compensation, payroll, and benefits; dashboards for payroll audits and eligibility; vendor integrations and security controls.",
    achievements: [
      "Built interactive Workday dashboards for payroll audits and benefits eligibility, reducing manual tracking effort by ~40%",
      "Configured and maintained annual merit & bonus plan templates with Finance/Comp, ensuring accurate and on-time payouts",
      "Developed turnover, EEO, and headcount reports (calculated fields, matrix formats) for on-demand compliance insights",
      "Optimized HCM business processes for job changes, compensation updates, and benefits to reduce processing errors",
      "Integrated Workday with ServiceNow and ADP via EIB/Core Connectors, improving turnaround on ticketed HR actions",
      "Performed quarterly audits of Workday RBAC/security groups (SOX alignment) and reduced third-party file rejection rates"
    ],
    technologies: [
      "Workday HCM",
      "Advanced Reporting",
      "Calculated Fields",
      "EIB",
      "Core Connectors",
      "ServiceNow",
      "ADP",
      "Workday Security (RBAC)",
      "SOX"
    ],
    impact: {
      icon: TrendingUp,
      value: "≈40% less manual effort",
      metric: "in payroll/benefits tracking"
    }
  },
  {
    company: "Amazon Development Centre",
    role: "SDS Associate (People Analytics Analyst)",
    type: "Full-time",
    duration: "Oct 2019 – Jan 2022",
    location: "Hyderabad, India",
    logo: "https://logo.clearbit.com/amazon.com",
    description:
      "People analytics and reporting across headcount, attrition, mobility; Tableau dashboards; Workday custom/matrix reports; scorecard automation and release validations.",
    achievements: [
      "Authored/optimized 100+ Workday custom & matrix reports for HR/Finance to accelerate attrition and headcount insights",
      "Partnered with HRBPs to surface mobility and promotion trends via Tableau dashboards for succession planning",
      "Automated quarterly HR scorecards using Composite Reports + Excel macros, saving 50+ hours per cycle",
      "Improved data hygiene via termination/position audits, supporting SLAs for payroll and compliance processes",
      "Produced equity/diversity analysis for executive and audit review to support DEI objectives",
      "Led impact assessments for bi-annual Workday releases across Core HCM, Benefits, and Compensation",
      "Delivered Tier-1 reporting support across Benefits/Absence/Compensation with a 97% resolution SLA"
    ],
    technologies: [
      "Workday Reporting",
      "Calculated Fields",
      "Composite Reports",
      "Tableau",
      "Excel (Macros/Pivots)",
      "Redshift",
      "SQL"
    ],
    impact: {
      icon: Users,
      value: "7% reduction",
      metric: "in attrition (geo-specific tracking)"
    }
  },
  {
    company: "Way2Online Interactive",
    role: "Operations Analyst Intern",
    type: "Internship",
    duration: "May 2017 – Jun 2018",
    location: "Hyderabad, India",
    logo: "https://logo.clearbit.com/way2online.com",
    description:
      "HR operations support: employee lifecycle data accuracy, benefits audits, payroll reconciliations, dashboards, UAT, and SOPs.",
    achievements: [
      "Processed employee lifecycle transactions (hire/terminate/job changes) with high data accuracy",
      "Built monthly HR dashboards in Excel/Power BI for salary progression, training, and leave utilization",
      "Automated employee data sync into finance/security systems with Payroll & IT, cutting mismatches by >60%",
      "Led benefits enrollment audits to ensure correct medical coverage and avoid payroll discrepancies",
      "Performed payroll reconciliations using advanced Excel (VLOOKUP, pivots) to resolve hours/deductions/tax flags",
      "Supported Workday HCM UAT; authored onboarding assets, offer letters, and SOPs for scale"
    ],
    technologies: ["Excel", "Power BI", "Workday HCM", "HRIS", "Process Mapping", "UAT"],
    impact: {
      icon: Database,
      value: ">60% reduction",
      metric: "in downstream data mismatches"
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

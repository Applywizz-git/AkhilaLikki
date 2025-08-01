import { useState, useEffect, useRef } from 'react';
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    dashboards: 0,
    sla: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    experience: 4,
    dashboards: 10,
    sla: 100
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetValues).forEach((key) => {
      let current = 0;
      const target = targetValues[key as keyof typeof targetValues];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const certifications = [
    {
      title: "Workday HCM",
      issuer: "Workday",
      icon: Award,
      color: "from-primary to-primary-glow"
    },
    {
      title: "SHRM-SCP",
      issuer: "SHRM",
      icon: Users,
      color: "from-secondary to-secondary-glow"
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      icon: TrendingUp,
      color: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-10 px-6">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-gradient-secondary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming HR through data-driven insights and strategic automation
          </p>
        </div>

        {/* Bio Paragraphs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about leveraging technology to create meaningful impact in people's careers.
              My mission is to bridge the gap between human resources and data science, ensuring that
              every HR decision is backed by actionable insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of automation to eliminate mundane tasks, allowing HR professionals
              to focus on what truly matters—building inclusive, engaging workplace cultures that drive
              organizational success.
            </p>
          </div>

          {/* Animated Counters */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}>

            <div className="text-center p-6 card-hover rounded-xl">
              <div className="counter mb-2">{counters.experience}+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>

            <div className="text-center p-6 card-hover rounded-xl">
              <div className="counter mb-2">{counters.dashboards}+</div>
              <p className="text-sm text-muted-foreground">Dashboards Built</p>
            </div>

            <div className="text-center p-6 card-hover rounded-xl">
              <div className="counter mb-2">{counters.sla}%</div>
              <p className="text-sm text-muted-foreground">SLA Success</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
            Certifications & Credentials
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`card-hover p-6 rounded-xl text-center transform transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <CheckCircle className="w-5 h-5 text-accent mx-auto mt-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

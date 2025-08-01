import { useState, useEffect } from 'react';
import { ArrowUp, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 px-6 bg-charcoal border-t border-border">
      <div className="container mx-auto">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-lg animate-pulse-glow">
                AL
              </div>
              <span className="text-xl font-bold text-gradient-secondary">
                Akhila Likki
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming HR through data-driven insights, strategic automation,
              and innovative analytics solutions. Workday-certified specialist with 4+ years of impact.
            </p>
            <div className="flex items-center space-x-2 text-sm text-accent">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient-accent mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-secondary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient-primary mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:akhilalikki.97@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>akhilalikki.97@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akhila-likki-6a4a97155/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>linkedin.com/in/akhila-likki-6a4a97155</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/akhila-likki-6a4a97155/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:akhilalikki.97@gmail.com"
                className="social-icon group"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Akhila Likki.</span>
            <span></span>

          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span className="text-accent">Available for Hire</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-50 animate-bounce-gentle"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white mx-auto group-hover:animate-bounce-gentle" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
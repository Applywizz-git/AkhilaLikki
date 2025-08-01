import { useState, useRef } from 'react';
import { Send, Linkedin, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Show success toast
      toast({
        title: "Message sent successfully! 🎉",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      // Trigger confetti effect (you can add a confetti library here)
      console.log('🎉 Confetti effect triggered!');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akhilalikki.97@gmail.com",
      href: "mailto:akhilalikki.97@gmail.com",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akhila-likki-6a4a97155",
      href: "https://www.linkedin.com/in/akhila-likki-6a4a97155/",
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Newark,DE",
      href: "#",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Phone,
      label: "Phone",
      value: " +1 (848)-844-5252 ",
      href: "tel: +1 (848)-844-5252 ",
      color: "from-violet to-violet-glow"
    }
  ];

  return (
    <section id="contact" className="py-10 px-6 bg-card/30">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-gradient-secondary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your HR operations with data-driven insights?
            Let's discuss how we can drive meaningful change together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, share insights about HR analytics,
                or explore how data-driven approaches can solve your organization's challenges.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-4 p-4 rounded-xl card-hover transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-secondary transition-colors">
                      {info.label}
                    </div>
                    <div className="text-muted-foreground group-hover:text-muted-foreground transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/akhila-likki-6a4a97155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:akhilalikki.97@gmail.com"
                  className="social-icon group"
                >
                  <Mail className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-hover p-8 rounded-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                Send a Message
              </h3>

              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-secondary group-hover:border-secondary/50"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-secondary group-hover:border-secondary/50"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Company Input */}
              <div className="group">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company / Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-secondary group-hover:border-secondary/50"
                  placeholder="Your company name"
                />
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-secondary focus:border-secondary group-hover:border-secondary/50"
                  placeholder="Tell me about your project, challenges, or how I can help..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 text-lg font-semibold ${isSubmitted
                    ? ' text-white'
                    : 'btn-hero text-white  '
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className=" w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3" />
                    Sending Message...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3 text-white" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Form Footer */}
              <p className="text-sm text-muted-foreground text-center">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
              </p>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto card-hover p-8 rounded-2xl">
            <h3 className="text-2xl font-bold border-secondary text-secondary mb-4">
              Interested in My Professional Background?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Explore my resume to learn more about my skills, experience, and the value I can bring to your team.
              Download it now and let’s connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
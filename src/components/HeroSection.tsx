import { useState, useEffect } from 'react';
import { Download, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import akhilaPortrait from '../assets/akhila-photo2.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "Workday & People Analytics Specialist"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          if (currentPhraseIndex < phrases.length - 1) {
            setIsTyping(false);
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentPhraseIndex, isTyping, phrases]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/akhila-resume.pdf';
    link.download = 'Akhila_Likki_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-10 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className=" text-5xl sm:text-5xl lg:text-hero py-10 font-bold text-gradient-primary">
                <span className="block sm:inline py-5">Hello, I'm</span>{' '}
                <span className="block sm:inline ">Akhila Likki</span>
              </h1>
              <h2 className="text-xl text-secondary font-semibold typewriter min-h-[2rem]">
                {displayText}
                <span className="animate-pulse"></span>
              </h2>
            </div>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Workday-certified analyst with 4+ years' experience in HCM transformations,
                DEI reporting, and enterprise analytics using Workday, Tableau, and SQL.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert in Compensation, Payroll, and vendor integrations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={handleDownloadCV}
                className="text-sm px-4 py-2 bg-blue-500 text-black border border-blue-700 rounded-md shadow-sm
                           hover:bg-blue active:bg-blue-500 focus:bg-blue-500
                           hover:text-black active:text-black focus:text-black"
              >
                <Download className="w-4 h-4 mr-2 text-black" />
                Download CV
              </Button>

              <div className="flex gap-4 ml-4">
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

          {/* Right Column */}
          {/* <div className="flex">
            <div
              className=" ml-40 w-[19rem] h-[25rem] flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "linear-gradient(135deg, #00ffe6 60%, #001a1f 100%)",
                boxShadow:
                  "0 0 40px 10px #00ffe6, 0 0 100px 50px #00ffe688",
              }}
            >
              <img
                src={akhilaPortrait}
                alt="Akhila Likki - HRIS & People Analytics Specialist"
                className="w-[93%] h-[93%] object-cover"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </div>
          </div> */}

       <div className="flex justify-center relative">
  {/* Hexagon Background */}
  <div className="flex justify-center relative animate-fade-in" style={{ animationDelay: '1s' }}>
  <div className="w-[19rem] h-[25rem] relative flex items-end justify-center z-0">
    {/* Hexagon Background with Glow and Rounded Effect */}
    <div
      className="absolute w-full h-full bottom-0"
      style={{
        clipPath:
          'polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)',
        background: 'linear-gradient(135deg, #00ffe6 60%, #001a1f 100%)',
        boxShadow:
          '0 20px 60px rgba(0, 255, 230, 0.5), 0 40px 90px rgba(0, 255, 230, 0.3)',
        borderRadius: '1rem', // slight softening effect
        zIndex: 0,
      }}
    />

    {/* Image Overlayed – Top popping out, bottom clipped with hexagon */}
    <img
      src={akhilaPortrait}
      alt="Akhila Likki - HRIS & People Analytics Specialist"
      className="w-[20rem] h-[27rem] absolute object-cover"
      style={{
        clipPath:
          'polygon(50% 2%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)',
        transform: 'translateY(-1.5rem)', // top pop-out
        boxShadow:
          '0 20px 50px rgba(0, 255, 230, 0.25), 0 50px 100px rgba(0, 255, 230, 0.2)',
        borderRadius: '1rem',
        zIndex: 10,
      }}
    />
  </div>
</div>

</div>


        </div>
        {/* Scroll Indicator */}
        {/*<div className="flex justify-center mt-16 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce-gentle" />
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect } from 'react';

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start fade out after progress completes
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade animation to complete
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
      !isVisible ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center space-y-8">
        
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-3xl font-bold text-white animate-spin-slow">
            AL
          </div>
          
          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1 rounded-full bg-primary animate-pulse" />
            <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 translate-y-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute left-0 top-1/2 w-3 h-3 -translate-x-1 -translate-y-1/2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute right-0 top-1/2 w-3 h-3 translate-x-1 -translate-y-1/2 rounded-full bg-violet animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 animate-pulse-glow" />
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gradient-primary">
            Akhila Likki
          </h1>
          <p className="text-lg text-muted-foreground">
            Loading Portfolio...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="progress-bar mb-2">
            <div 
              className="progress-fill transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Initializing</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className={`flex items-center justify-center space-x-2 transition-opacity ${progress > 20 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Loading experience data...</span>
          </div>
          <div className={`flex items-center justify-center space-x-2 transition-opacity ${progress > 50 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Preparing portfolio...</span>
          </div>
          <div className={`flex items-center justify-center space-x-2 transition-opacity ${progress > 80 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Finalizing interface...</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gradient-to-br from-violet/50 to-accent/50 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gradient-to-br from-secondary/50 to-primary/50 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-gradient-to-br from-accent/30 to-violet/30 animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
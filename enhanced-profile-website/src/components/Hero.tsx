import { Mail, MapPin, Phone, ArrowDown, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Decorative elements with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-foreground/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Enhanced Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-30 animate-float group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-gradient-secondary rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              {/* Profile image with enhanced border */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-foreground shadow-elegant group-hover:shadow-[0_20px_60px_-10px_hsl(var(--secondary)/0.4)] transition-all duration-500 group-hover:scale-105">
                <img 
                  src={profilePhoto} 
                  alt="Dr.Shaik Karimulla" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              {/* Decorative badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-secondary px-6 py-2 rounded-full shadow-elegant border-2 border-primary-foreground">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>24+ Awards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className={`text-center lg:text-left space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm md:text-base text-secondary font-semibold uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                  Social Worker & Humanitarian
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-3 leading-tight">
                Dr.Shaik Karimulla
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold">
                Founder & Chairman
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/80 mt-2 font-medium">
                Yuvatejam Trust
              </p>
            </div>

            <div className="space-y-4 text-primary-foreground/90 pt-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start group cursor-pointer hover:text-secondary transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-medium">Tirupathi, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start group cursor-pointer hover:text-secondary transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <a href="tel:9094444115" className="font-medium hover:underline">9094444115 / 9094444116</a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start group cursor-pointer hover:text-secondary transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <a href="mailto:Karimullaking1987@gmail.com" className="font-medium hover:underline">Karimullaking1987@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("awards")} 
                className="border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary-foreground)/0.3)] group"
              >
                <span>View Awards</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("contact")} 
                className="border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary-foreground)/0.3)]"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
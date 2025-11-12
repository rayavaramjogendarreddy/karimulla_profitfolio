import { Users, Award, Heart, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ awards: 0, years: 0, programs: 0, communities: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { awards: 24, years: 8, programs: 6, communities: 100 };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        awards: Math.floor(targets.awards * easeOut),
        years: Math.floor(targets.years * easeOut),
        programs: Math.floor(targets.programs * easeOut),
        communities: Math.floor(targets.communities * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Award,
      value: counts.awards,
      suffix: "+",
      label: "Prestigious Awards",
      description: "National & International Recognition",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: TrendingUp,
      value: counts.years,
      suffix: "+",
      label: "Years of Service",
      description: "Dedicated Social Work",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: BookOpen,
      value: counts.programs,
      suffix: "+",
      label: "Active Programs",
      description: "Education, Development & Welfare",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: Users,
      value: counts.communities,
      suffix: "+",
      label: "Communities Served",
      description: "Lives Impacted Positively",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section ref={sectionRef} id="impact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-full mb-6 shadow-elegant">
              <TrendingUp className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Impact & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measurable results from years of dedicated service to communities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`shadow-card hover:shadow-elegant transition-all duration-500 border-0 group overflow-hidden relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-8 text-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-secondary ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional impact highlight */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-elegant border-0 bg-gradient-primary overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
              <CardContent className="p-12 text-center relative">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Heart className="w-12 h-12 text-primary-foreground" />
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    Making a Difference Every Day
                  </h3>
                </div>
                <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Through education, rural development, awareness programs, and community welfare initiatives, 
                  we continue to create lasting positive change in the lives of thousands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;


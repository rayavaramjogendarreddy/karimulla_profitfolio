import { Award, Heart, Users, BookOpen, GraduationCap, Globe, Calendar, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const highlights = [
    {
      icon: Users,
      title: "Community Impact",
      description: "Serving thousands through education, rural development, and food distribution programs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "24+ Prestigious Awards",
      description: "Recognized nationally and internationally for exceptional social service",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Humanitarian Mission",
      description: "Dedicated to uplifting communities and creating sustainable change",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: BookOpen,
      title: "Youth Empowerment",
      description: "Focus on education and awareness programs for the next generation",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const objectives = ["Education", "Rural Development", "Awareness Programs", "Food Distribution", "Community Welfare", "Youth Empowerment"];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-full mb-6 shadow-elegant">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About Dr.Shaik Karimulla
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A visionary social worker making a significant impact through dedicated service
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">About Me</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Dr.Shaik Karimulla, belongs to a lower middle-class family. He has been very interested in social work since his childhood, with the inspiration of many social activists. By seeing the drastic lives of many people suffering due to various social issues and pathetic situations of marginalized sections who have been taking shelter in the streets, choultries, railway stations and bus stands, he felt ashamed and thought about doing something to such people. Hence, he established Yuvatejam Trust in 2015 with two like-minded friends, which was later registered in 2017, to serve without any self-benefit for the welfare of the destitute and has been awarded as a committed social activist by some local and national social institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Education & Background</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <p><strong className="text-foreground">Education:</strong> BA Degree</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-secondary" />
                    <p><strong className="text-foreground">Languages:</strong> Urdu, Telugu, Hindi, English</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <p><strong className="text-foreground">Location:</strong> Tirupathi, Andhra Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-elegant border-0 bg-gradient-to-br from-background to-muted group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-elegant">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Yuvatejam Trust</h3>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Established: 2015</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Registered: 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to create lasting positive change in communities through comprehensive social welfare programs.
                </p>
                <div>
                  <p className="font-semibold text-foreground mb-4 text-lg">Core Objectives:</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {objectives.map((objective, index) => (
                      <div 
                        key={objective} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group/item"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full group-hover/item:scale-150 transition-transform" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors font-medium">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 group overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg group-hover:text-secondary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

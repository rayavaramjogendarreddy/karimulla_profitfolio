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

  const objectives = [
    { title: "Education", description: "Providing quality learning opportunities for underprivileged children." },
    { title: "Rural Development", description: "Improving infrastructure and livelihood in rural areas." },
    { title: "Awareness Programs", description: "Educating communities on social, health, and legal rights." },
    { title: "Food Distribution", description: "Ensuring no one in our community goes hungry." },
    { title: "Community Welfare", description: "Supporting the destitute and marginalized sections of society." },
    { title: "Youth Empowerment", description: "Training and mentoring the next generation of leaders." },
    { title: "Old Age Home", description: "Providing dignity and care for our senior citizens." },
    { title: "Bala Vihar", description: "A safe and nurturing home for children in need." }
  ];

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
              Founder Profile
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dr. Shaik Karimulla: A life dedicated to service and social transformation.
            </p>
          </div>

          {/* Profile Summary & Vision/Mission */}
          <div className={`grid lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="lg:col-span-2 shadow-card hover:shadow-elegant transition-all duration-300 border-0 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <CardContent className="p-8 relative h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Profile Summary</h3>
                </div>
                <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                  <p>
                    Hailing from a humble background, Dr. Shaik Karimulla has been driven by a profound passion for social service since childhood. Inspired by legendary social activists, he dedicated his life to addressing the systemic issues facing marginalized communities.
                  </p>
                  <p>
                    Witnessing the plight of those living on the streets, in railway stations, and bus stands, he felt a deeper calling to serve. In 2015, he co-founded **Yuvatejam Trust** (formally registered in 2017) with a singular mission: to provide selfless service for the welfare of the destitute and neglected sections of society.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 group overflow-hidden relative bg-gradient-to-br from-background to-muted">
              <CardContent className="p-8 relative h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Background</h3>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-secondary mb-1">Education</p>
                    <p className="text-foreground font-medium">B.A. Degree & Honorary Doctorate</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-secondary mb-1">Languages</p>
                    <p className="text-foreground font-medium">Urdu, Telugu, Hindi, English</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider font-semibold text-secondary mb-1">Location</p>
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <Globe className="w-4 h-4 text-secondary" />
                      <span>Tirupathi, Andhra Pradesh</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission */}
          <div className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-card border-0 bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-secondary" /> Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create lasting, positive change in communities through comprehensive social welfare programs. We believe education and basic dignity are rights that should be accessible to every individual, regardless of their socio-economic background.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-0 bg-secondary/5 hover:bg-secondary/10 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-secondary" /> Our Mission
                </h3>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Empower underprivileged youth through education and vocational training.</li>
                  <li>Bridge the gap between community needs and organizational resources.</li>
                  <li>Promote civic-driven change through active community participation.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Key Contributions */}
          <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Key Contributions & Focus Areas</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {objectives.map((objective, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all group">
                  <CardContent className="p-6">
                    <div className="w-2 h-12 bg-secondary/20 group-hover:bg-secondary absolute left-0 top-1/2 -translate-y-1/2 transition-all rounded-r" />
                    <h4 className="font-bold text-foreground mb-2">{objective.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Founder's Message */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-elegant border-0 bg-gradient-to-br from-secondary/10 to-primary/10 overflow-hidden relative border-l-4 border-secondary">
              <CardContent className="p-10 md:p-14 relative italic text-center">
                <div className="absolute top-4 left-4 opacity-10">
                  <Heart className="w-24 h-24 text-secondary" />
                </div>
                <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                  "Social service is not a choice, but a responsibility we owe to humanity. At Yuvatejam Trust, we believe that by uplifting the most vulnerable, we strengthen the foundation of our entire society."
                </p>
                <div className="mt-6">
                  <p className="font-bold text-xl text-foreground">— Dr. Shaik Karimulla</p>
                  <p className="text-muted-foreground">Founder & Managing Trustee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

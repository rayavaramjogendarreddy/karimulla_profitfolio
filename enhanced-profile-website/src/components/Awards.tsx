import { Award, Trophy, Filter, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
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

  const awards = [
    { year: "2019", title: "Vishishta Seva Ratna National Award", category: "National" },
    { year: "2019", title: "Nehru Yuvajana Kendra Youth Award", category: "Youth" },
    { year: "2019", title: "Kerala Vishishta Award", category: "Regional" },
    { year: "2020", title: "Honorary Doctorate", category: "Academic" },
    { year: "2020", title: "Andhra Seva Award", category: "Regional" },
    { year: "2021", title: "Youth Icon", category: "Youth" },
    { year: "2021", title: "Corona Warriors", category: "Service" },
    { year: "2020 & 2021", title: "Seva Keerti Award", category: "Service" },
    { year: "2022", title: "Kalam Excellence Award", category: "Excellence" },
    { year: "2022", title: "Andhra Kesari Seva Ratna Award", category: "Regional" },
    { year: "2022", title: "City Excellent", category: "Excellence" },
    { year: "2023", title: "Uttam Samaj Seva Ratna Award", category: "Service" },
    { year: "2023", title: "Seva Keerti Award", category: "Service" },
    { year: "2024", title: "Rashtriya Ratna Award", category: "National" },
    { year: "2024", title: "Mahatma Gandhi National Award", category: "National" },
    { year: "2024", title: "International Prestigious Awards", category: "International" },
    { year: "2024", title: "Samajsevi Utkarsh Puraskar", category: "Service" },
    { year: "2024", title: "Bhartiya Pratibha Gaurav Samman", category: "National" },
    { year: "2024-2025", title: "National Pride Award", category: "National" },
    { year: "2025", title: "Euro Asian University Honorary Doctorate", category: "Academic" },
    { year: "2025", title: "Mahatma Gandhi Global Peace Award", category: "International" },
    { year: "2025", title: "Abdul Kalam Nandhi Puraskaram", category: "Excellence" },
    { year: "2025", title: "Dr.A.P.J. Abdul Kalam Excellence Award", category: "Excellence" },
    { year: "2025", title: "London Book of World Records", category: "International" },
  ];

  const years = Array.from(new Set(awards.map(a => a.year.split(" & ")[0]))).sort();

  const filteredAwards = selectedYear
    ? awards.filter(a => a.year.includes(selectedYear))
    : awards;

  return (
    <section ref={sectionRef} id="awards" className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-full mb-6 shadow-elegant">
              <Trophy className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Honored with 24+ prestigious awards for exceptional contribution to social welfare
            </p>
          </div>

          {/* Filter buttons */}
          <div className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              variant={selectedYear === null ? "default" : "outline"}
              onClick={() => setSelectedYear(null)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              All Awards
            </Button>
            {years.slice(-5).map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAwards.map((award, index) => (
              <Card
                key={index}
                className={`group shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center gap-1">
                      {award.category === "International" && <Star className="w-4 h-4 text-accent fill-accent" />}
                      {award.category === "National" && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                    {award.year}
                  </span>
                  <h3 className="font-bold text-foreground leading-tight group-hover:text-secondary transition-colors text-lg">
                    {award.title}
                  </h3>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {award.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-elegant border-0 bg-gradient-primary overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Trophy className="w-12 h-12 text-primary-foreground" />
                  <p className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    24+ Prestigious Awards
                  </p>
                </div>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Recognized nationally and internationally for outstanding social service and humanitarian work
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

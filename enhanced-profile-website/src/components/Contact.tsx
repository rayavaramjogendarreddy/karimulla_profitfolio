import { Mail, MapPin, Phone, Globe, Send, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["9094444115", "9094444116"],
      action: "tel:9094444115",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Karimullaking1987@gmail.com"],
      action: "mailto:Karimullaking1987@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Tirupathi, Andhra Pradesh", "India"],
      action: null,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Languages",
      details: ["Urdu, Telugu", "Hindi, English"],
      action: null,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-full mb-6 shadow-elegant">
              <MessageCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect for collaboration, partnerships, or to learn more about our social initiatives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className={`shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 group overflow-hidden relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-6 text-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg group-hover:text-secondary transition-colors">{item.title}</h3>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {item.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground w-full group/btn"
                      onClick={() => window.location.href = item.action}
                    >
                      <span>Contact</span>
                      <Send className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="shadow-elegant border-0 bg-gradient-primary overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-12 text-center relative">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    Yuvatejam Trust
                  </h3>
                </div>
                <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Working together to create positive change through education, rural development, 
                  awareness programs, and community welfare initiatives.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant={undefined}
                    size={undefined}
                    className="!bg-gradient-to-r !from-purple-600 !to-pink-600 hover:!from-purple-700 hover:!to-pink-700 !text-white !shadow-lg hover:!shadow-xl !rounded-full !px-8 !py-6 group/btn !transition-all !duration-300 hover:!scale-110 !border-0 !font-semibold !text-base !h-auto"
                    onClick={() => window.location.href = "mailto:yuvatejamtrust1@gmail.com"}
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    <span>Email Us</span>
                    <Send className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant={undefined}
                    size={undefined}
                    className="!bg-gradient-to-r !from-blue-600 !to-cyan-600 hover:!from-blue-700 hover:!to-cyan-700 !text-white !shadow-lg hover:!shadow-xl !rounded-full !px-8 !py-6 group/btn !transition-all !duration-300 hover:!scale-110 !border-0 !font-semibold !text-base !h-auto"
                    onClick={() => window.location.href = "tel:9094444115"}
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    <span>Call Now</span>
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Available for collaboration and partnerships</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

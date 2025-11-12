import { Heart, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About section */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent fill-accent" />
                Yuvatejam Trust
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Dedicated to creating positive change through education, rural development, 
                and community welfare initiatives.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "About", id: "about" },
                  { label: "Impact", id: "impact" },
                  { label: "Awards", id: "awards" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="tel:9094444115" className="hover:text-primary-foreground transition-colors">
                    9094444115 / 9094444116
                  </a>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:Karimullaking1987@gmail.com" className="hover:text-primary-foreground transition-colors break-all">
                    Karimullaking1987@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Tirupathi, Andhra Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 my-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70 text-center md:text-left">
              © {new Date().getFullYear()} Dr.Shaik Karimulla - Yuvatejam Trust. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-primary-foreground/70 flex items-center gap-2">
                Built with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> for social impact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 text-primary-foreground shadow-elegant z-50 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;

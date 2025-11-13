import { Download, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; alt: string } | null>(null);
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

  const personalMoments = [
    {
      id: 1,
      url: "/gallery/IMG-20230913-WA0292.jpg",
      alt: "traditional photo",
      title: " "
    },
    {
      id: 2,
      url: "/gallery/graduation.jpg",
      alt: "graduation photo",
      title: ""
    },
    {
      id: 3,
      url: "/gallery/p1.jpg",
      alt: "Donation drive",
      title: "Donation Campaign"
    },
    {
      id: 4,
      url: "/gallery/p2.jpg",
      alt: "Environmental conservation",
      title: ""
    },
    {
      id: 5,
      url: "/gallery/p3.jpg",
      alt: "Community gathering",
      title: ""
    },
    {
      id: 6,
      url: "/gallery/p4.jpg",
      alt: "Social work event",
      title: ""
    }
  ];

  const awardsRecognition = [
    {
      id: 7,
      url: "/gallery/a1.jpg",
      alt: "Study Guide materials Distibution",
      title: "Books Distibution"
    },
    {
      id: 8,
      url: "/gallery/a2.jpg",
      alt: "Award ceremony",
      title: "Winning Celebration"
    },
    {
      id: 9,
      url: "/gallery/a3.jpg",
      alt: "Recognition event",
      title: "Awards Distibution Event"
    },
    {
      id: 10,
      url: "/gallery/a4.jpg",
      alt: "Honering the Special Guest",
      title: ""
    },
    {
      id: 11,
      url: "/gallery/a5.jpg",
      alt: "",
      title: ""
    },
    {
      id: 12,
      url: "/gallery/a6.jpg",
      alt: "",
      title: ""
    },{
      id: 13,
      url: "/gallery/a7.jpg",
      alt: "",
      title: ""
    },
    {
      id: 14,
      url: "/gallery/a8.jpg",
      alt: "",
      title: ""
    }
  ];

  const handleDownload = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const renderGallerySection = (title: string, subtitle: string, images: typeof personalMoments) => (
    <div className="mb-20">
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((image, index) => (
          <Card
            key={image.id}
            className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: `${index * 50}ms`
            }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{image.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <>
    <section ref={sectionRef} id="gallery" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          </div>

          {renderGallerySection(
            "Personal Moments",
            "A glimpse into the journey of service and dedication",
            personalMoments
          )}

          {renderGallerySection(
            "Social Service, Awards & Recognition",
            "Celebrating milestones and achievements in social service",
            awardsRecognition
          )}
        </div>
      </div>
    </section>

    {/* Image Popup Dialog */}
    {selectedImage && (
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
          <div className="relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 left-4 rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(selectedImage.url, selectedImage.title);
              }}
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
};

export default Gallery;

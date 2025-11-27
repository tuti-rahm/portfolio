import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Available for Projects</span>
            </div>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Tuti Rahmawati
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in-delay">
            <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              PSM I
            </span>
            <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              CSA
            </span>
            <span className="bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              CITPM
            </span>
          </div>
          
          <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6 animate-fade-in-delay">
            Experienced & Certified Project Manager
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Over 21 years in IT Professional Industries. I excel in project management, budgeting, and team coordination, 
            ensuring projects meet their objectives while adhering to timeline and budget constraints. My collaborative 
            approach with clients and coaching of teams on Agile methodologies leads to successful project outcomes.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-muted-foreground animate-fade-in-delay">
            <a href="mailto:tuti.rahmawati.id@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>tuti.rahmawati.id@gmail.com</span>
            </a>
            <a href="https://wa.me/6281284699161" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+62-812-8469-9161</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Jakarta</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/10"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

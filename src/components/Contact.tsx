import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. 
            Feel free to reach out and let's create something amazing together.
          </p>
          
          <Card className="p-8 bg-card border-border">
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:tuti.rahmawati.id@gmail.com"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">tuti.rahmawati.id@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+6281284699161"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">+62-812-8469-9161</p>
                </div>
              </a>
              
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                onClick={() => window.location.href = 'mailto:tuti.rahmawati.id@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send me an Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

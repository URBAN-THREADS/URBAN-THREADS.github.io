import { Button } from "@/components/ui/button";
import collectionImage from "@/assets/product-collection.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Defining Urban <span className="text-accent">Culture</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Urban Threads was born from the streets, inspired by the raw energy and creativity 
              of urban culture. We're not just another clothing brand – we're a movement that 
              celebrates individuality and self-expression.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Every piece in our collection tells a story. From our premium materials to our 
              cutting-edge designs, we craft clothing that doesn't just look good – it feels 
              authentic to who you are.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Sustainable & ethical manufacturing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Limited edition drops & exclusive designs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Community-driven brand development</span>
              </div>
            </div>
            
            <Button variant="cta" size="lg">
              Learn Our Story
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={collectionImage} 
                alt="Urban Threads collection showcasing diverse streetwear pieces" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl blur-2xl transform translate-x-6 translate-y-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
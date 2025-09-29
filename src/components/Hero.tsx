import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-tshirt.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1 bg-accent/10 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-sm font-medium text-accent">Premium Quality</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Elevate Your</span>
              <br />
              <span className="text-accent">Street Style</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover our exclusive collection of premium streetwear. Each piece is crafted 
              with attention to detail and designed for the modern urban lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal" size="lg">
                View Lookbook
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-sm text-gray-400">Star Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Premium streetwear t-shirt collection" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl blur-3xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              URBAN <span className="text-accent">THREADS</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Defining urban culture through premium streetwear. Express your individuality 
              with our exclusive collection of contemporary designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-accent transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-accent transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-accent transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-accent transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-accent transition-smooth">Home</a></li>
              <li><a href="/products" className="text-muted-foreground hover:text-accent transition-smooth">Products</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-accent transition-smooth">About</a></li>
              <li><a href="/size-guide" className="text-muted-foreground hover:text-accent transition-smooth">Size Guide</a></li>
              <li><a href="/lookbook" className="text-muted-foreground hover:text-accent transition-smooth">Lookbook</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-muted-foreground hover:text-accent transition-smooth">Contact Us</a></li>
              <li><a href="/shipping-info" className="text-muted-foreground hover:text-accent transition-smooth">Shipping Info</a></li>
              <li><a href="/returns" className="text-muted-foreground hover:text-accent transition-smooth">Returns</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-accent transition-smooth">FAQ</a></li>
              <li><a href="/products" className="text-muted-foreground hover:text-accent transition-smooth">Track Order</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-secondary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Urban Threads. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-accent text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-muted-foreground hover:text-accent text-sm transition-smooth">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-muted-foreground hover:text-accent text-sm transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
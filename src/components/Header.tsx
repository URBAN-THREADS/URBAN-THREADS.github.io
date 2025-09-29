import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">
              URBAN <span className="text-accent">THREADS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-accent transition-smooth">
              Home
            </a>
            <a href="/products" className="text-foreground hover:text-accent transition-smooth">
              Products
            </a>
            <a href="/about" className="text-foreground hover:text-accent transition-smooth">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-accent transition-smooth">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" data-testid="button-cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="cta" size="sm" data-testid="button-shop-now">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/products"
                className="block px-3 py-2 text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-3 px-3 py-2">
                <Link to="/cart">
                  <Button variant="ghost" size="icon" data-testid="button-cart-mobile">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="cta" size="sm" data-testid="button-shop-now-mobile">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
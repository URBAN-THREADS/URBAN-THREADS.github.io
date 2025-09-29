import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Calendar, User } from "lucide-react";
import heroImage from "@/assets/hero-tshirt.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Lookbook = () => {
  const looks = [
    {
      id: 1,
      title: "Urban Explorer",
      season: "Spring 2024",
      image: product1,
      description: "Street-ready essentials for the modern adventurer",
      stylist: "Alex Chen"
    },
    {
      id: 2,
      title: "Night Moves",
      season: "Spring 2024", 
      image: product2,
      description: "Elevated streetwear for after-dark adventures",
      stylist: "Maya Rodriguez"
    },
    {
      id: 3,
      title: "Weekend Warrior",
      season: "Spring 2024",
      image: product3,
      description: "Comfortable yet stylish pieces for your downtime",
      stylist: "Jordan Smith"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Style <span className="text-accent">Lookbook</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how to style our latest pieces. Get inspired by our curated looks 
              and find your perfect urban aesthetic.
            </p>
          </div>
        </section>

        {/* Featured Look */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Featured <span className="text-accent">Look</span>
                </h2>
                <h3 className="text-2xl font-semibold mb-4">Street Minimalist</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Clean lines meet urban edge in this effortlessly cool ensemble. 
                  Perfect for those who appreciate the beauty of simplicity with a modern twist.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Spring 2024 Collection
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    Styled by Alex Chen
                  </div>
                </div>
                <Button variant="cta" size="lg" data-testid="button-shop-look">
                  Shop This Look
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Featured street minimalist look" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lookbook Gallery */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Spring 2024 <span className="text-accent">Collection</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our latest styling inspiration and discover new ways to express your urban style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {looks.map((look) => (
                <Card key={look.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300" data-testid={`card-look-${look.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={look.image} 
                      alt={look.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm" data-testid={`button-view-${look.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-title-${look.id}`}>{look.title}</h3>
                    <p className="text-muted-foreground mb-3" data-testid={`text-description-${look.id}`}>{look.description}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span data-testid={`text-season-${look.id}`}>{look.season}</span>
                      <span data-testid={`text-stylist-${look.id}`}>by {look.stylist}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Your <span className="text-accent">Look</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our full collection and start building your perfect urban wardrobe today.
            </p>
            <Button variant="cta" size="lg" data-testid="button-browse-collection">
              Browse Full Collection
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lookbook;
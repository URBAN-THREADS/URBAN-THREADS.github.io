import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Truck, Heart } from "lucide-react";
import collectionImage from "@/assets/product-collection.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-accent">Urban Threads</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Born from the streets, inspired by the raw energy and creativity of urban culture. 
              We're not just another clothing brand – we're a movement.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Our <span className="text-accent">Story</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Urban Threads was founded in 2020 by a group of passionate designers and streetwear enthusiasts 
                  who wanted to create something different. We saw a gap in the market for high-quality, 
                  ethically-made streetwear that truly represented urban culture.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Every piece in our collection tells a story. From our premium materials to our cutting-edge 
                  designs, we craft clothing that doesn't just look good – it feels authentic to who you are. 
                  We believe fashion should be a form of self-expression, not conformity.
                </p>
                <Button variant="cta" size="lg">
                  Shop Our Collection
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={collectionImage} 
                  alt="Urban Threads team and collection" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-accent">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                What drives us every day and shapes everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We use only premium materials and ethical manufacturing processes to ensure every piece meets our high standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We're building a community of individuals who aren't afraid to express themselves and stand out from the crowd.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to sustainable practices, from our supply chain to our packaging, because we care about our planet.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries in design and technology to create unique pieces that set trends rather than follow them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet Our <span className="text-accent">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The creative minds behind Urban Threads, working together to bring you the best in streetwear fashion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Alex Chen</h3>
                <p className="text-accent mb-2">Creative Director</p>
                <p className="text-muted-foreground">
                  Leading our design team with 10+ years of experience in streetwear and urban fashion.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Maya Rodriguez</h3>
                <p className="text-accent mb-2">Head of Sustainability</p>
                <p className="text-muted-foreground">
                  Ensuring our environmental impact remains minimal while maintaining the highest quality standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Jordan Smith</h3>
                <p className="text-accent mb-2">Brand Manager</p>
                <p className="text-muted-foreground">
                  Building connections with our community and ensuring every customer has an amazing experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
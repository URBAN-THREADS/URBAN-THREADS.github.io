import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Minimalist Black Tee",
    price: 39,
    originalPrice: 59,
    image: product1,
    colors: ["#000000", "#ffffff", "#6b7280"],
  },
  {
    id: 2,
    name: "Urban Typography Shirt",
    price: 45,
    image: product2,
    colors: ["#ffffff", "#000000", "#3b82f6"],
  },
  {
    id: 3,
    name: "Electric Gradient Tee",
    price: 49,
    originalPrice: 69,
    image: product3,
    colors: ["#00bcd4", "#8b5cf6", "#ec4899"],
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-accent">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of premium streetwear pieces that define modern urban fashion.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-muted-foreground">
              100% organic cotton with sustainable manufacturing processes for maximum comfort and durability.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
            <p className="text-muted-foreground">
              Free worldwide shipping on orders over $75. Express delivery available in 1-2 business days.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
            <p className="text-muted-foreground">
              30-day hassle-free returns. If you're not satisfied, we'll make it right with free return shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
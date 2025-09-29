import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const allProducts = [
  {
    id: 1,
    name: "Minimalist Black Tee",
    price: 39,
    originalPrice: 59,
    image: product1,
    colors: ["#000000", "#ffffff", "#6b7280"],
    category: "T-Shirts"
  },
  {
    id: 2,
    name: "Urban Typography Shirt",
    price: 45,
    image: product2,
    colors: ["#ffffff", "#000000", "#3b82f6"],
    category: "T-Shirts"
  },
  {
    id: 3,
    name: "Electric Gradient Tee",
    price: 49,
    originalPrice: 69,
    image: product3,
    colors: ["#00bcd4", "#8b5cf6", "#ec4899"],
    category: "T-Shirts"
  },
  {
    id: 4,
    name: "Oversized Street Hoodie",
    price: 89,
    image: product1,
    colors: ["#000000", "#6b7280", "#ffffff"],
    category: "Hoodies"
  },
  {
    id: 5,
    name: "Vintage Graphic Tee",
    price: 42,
    originalPrice: 55,
    image: product2,
    colors: ["#ffffff", "#000000"],
    category: "T-Shirts"
  },
  {
    id: 6,
    name: "Neon Streetwear Set",
    price: 129,
    image: product3,
    colors: ["#00bcd4", "#ec4899"],
    category: "Sets"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              All <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete collection of premium streetwear designed for the modern urban lifestyle.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="t-shirts">T-Shirts</SelectItem>
                    <SelectItem value="hoodies">Hoodies</SelectItem>
                    <SelectItem value="sets">Sets</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="cta" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
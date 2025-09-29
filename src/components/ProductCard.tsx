import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: string[];
}

const ProductCard = ({ id, name, price, originalPrice, image, colors = [] }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-smooth">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <Button variant="hero" size="sm" className="transform translate-y-2 group-hover:translate-y-0 transition-smooth">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
        
        {/* Heart Icon */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm transition-smooth hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 transition-smooth ${
              isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>
        
        {/* Sale Badge */}
        {originalPrice && originalPrice > price && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
            SALE
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
          {name}
        </h3>
        
        {/* Colors */}
        {colors.length > 0 && (
          <div className="flex items-center space-x-2 mb-3">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-4 h-4 rounded-full border-2 transition-smooth ${
                  selectedColor === index ? "border-accent scale-110" : "border-muted"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">${price}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
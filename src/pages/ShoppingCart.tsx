import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const ShoppingCart = () => {
  // Mock cart items - in a real app, this would come from state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Urban Classic Tee",
      price: 29.99,
      quantity: 2,
      size: "M",
      color: "Black",
      image: product1
    },
    {
      id: 2,
      name: "Street Hoodie",
      price: 59.99,
      quantity: 1,
      size: "L",
      color: "Gray",
      image: product2
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-md mx-auto">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-muted-foreground mb-8">
                  Looks like you haven't added anything to your cart yet. 
                  Start shopping to fill it up!
                </p>
                <Link to="/products">
                  <Button variant="cta" size="lg" data-testid="button-start-shopping">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link to="/products" className="flex items-center text-muted-foreground hover:text-accent transition-smooth" data-testid="link-continue-shopping">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mt-4">
              Shopping <span className="text-accent">Cart</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <Card key={item.id} data-testid={`cart-item-${item.id}`}>
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg" data-testid={`text-item-name-${item.id}`}>{item.name}</h3>
                                <p className="text-muted-foreground" data-testid={`text-item-details-${item.id}`}>
                                  {item.size} • {item.color}
                                </p>
                                <p className="text-lg font-semibold mt-2" data-testid={`text-item-price-${item.id}`}>
                                  ${item.price}
                                </p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                data-testid={`button-remove-${item.id}`}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <div className="flex items-center gap-3 mt-4">
                              <span className="text-sm text-muted-foreground">Quantity:</span>
                              <div className="flex items-center gap-2">
                                <Button 
                                  variant="outline" 
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  data-testid={`button-decrease-${item.id}`}
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <Input 
                                  type="number" 
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="w-16 h-8 text-center"
                                  min="1"
                                  data-testid={`input-quantity-${item.id}`}
                                />
                                <Button 
                                  variant="outline" 
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  data-testid={`button-increase-${item.id}`}
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                              <span className="text-sm text-muted-foreground ml-4" data-testid={`text-item-total-${item.id}`}>
                                Total: ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span data-testid="text-subtotal">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span data-testid="text-shipping">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-sm text-accent">
                        🎉 You qualify for free shipping!
                      </p>
                    )}
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span data-testid="text-tax">${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span data-testid="text-total">${total.toFixed(2)}</span>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <Button variant="cta" size="lg" className="w-full" data-testid="button-checkout">
                        Proceed to Checkout
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" data-testid="button-save-later">
                        Save for Later
                      </Button>
                    </div>
                    
                    <div className="text-center pt-4">
                      <p className="text-sm text-muted-foreground">
                        Secure checkout with SSL encryption
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                You Might Also <span className="text-accent">Like</span>
              </h2>
              <p className="text-muted-foreground">
                Complete your urban look with these recommended items.
              </p>
            </div>
            
            <div className="text-center">
              <Link to="/products">
                <Button variant="cta" size="lg" data-testid="button-view-recommendations">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
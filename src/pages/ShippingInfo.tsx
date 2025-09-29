import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Globe, Clock, Shield } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Shipping <span className="text-accent">Information</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fast, reliable shipping to get your Urban Threads gear to you safely and on time.
            </p>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Shipping <span className="text-accent">Options</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the shipping method that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Truck className="w-5 h-5 text-accent mr-3" />
                    Standard Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-accent">$5.99</span>
                    <span className="text-muted-foreground ml-2">or FREE on orders over $75</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Reliable delivery within 5-7 business days for domestic orders.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tracking included</li>
                    <li>• Signature not required</li>
                    <li>• Available nationwide</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Package className="w-5 h-5 text-accent mr-3" />
                    Express Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-accent">$12.99</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Fast delivery within 2-3 business days for when you need it quick.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Priority tracking</li>
                    <li>• Signature required</li>
                    <li>• Available in most areas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    International
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-accent">$19.99+</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Worldwide shipping with delivery in 7-14 business days.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Customs handling included</li>
                    <li>• Full tracking available</li>
                    <li>• Duties may apply</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shipping Details */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Processing <span className="text-accent">Time</span>
                </h2>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="w-5 h-5 text-accent mr-3" />
                      Order Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Standard Items</h4>
                      <p className="text-muted-foreground">1-2 business days for in-stock items</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom/Limited Edition</h4>
                      <p className="text-muted-foreground">3-5 business days for special orders</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Weekend Orders</h4>
                      <p className="text-muted-foreground">Orders placed after Friday 2 PM EST will be processed on Monday</p>
                    </div>
                  </CardContent>
                </Card>
                
                <h3 className="text-xl font-semibold mb-4">Order Cutoff Times</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Standard Shipping: 2:00 PM EST</li>
                  <li>• Express Shipping: 12:00 PM EST</li>
                  <li>• International: 11:00 AM EST</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Tracking & <span className="text-accent">Delivery</span>
                </h2>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="w-5 h-5 text-accent mr-3" />
                      Package Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      All orders are fully insured and tracked from our warehouse to your door.
                    </p>
                    <div>
                      <h4 className="font-semibold">Tracking Updates</h4>
                      <p className="text-muted-foreground">Real-time notifications via email and SMS</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Delivery Confirmation</h4>
                      <p className="text-muted-foreground">Photo proof of delivery for all packages</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lost Package Protection</h4>
                      <p className="text-muted-foreground">Full refund or replacement if package goes missing</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                International <span className="text-accent">Shipping</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We ship worldwide to bring Urban Threads to your doorstep, wherever you are.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Shipping Zones & Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Canada</span>
                    <span className="text-muted-foreground">5-8 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Europe</span>
                    <span className="text-muted-foreground">7-12 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Asia Pacific</span>
                    <span className="text-muted-foreground">8-14 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rest of World</span>
                    <span className="text-muted-foreground">10-16 business days</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Customs duties and taxes may apply</li>
                  <li>• Delivery times may vary during peak seasons</li>
                  <li>• Some remote locations may require additional time</li>
                  <li>• Prohibited items vary by country</li>
                  <li>• All prices are in USD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfo;
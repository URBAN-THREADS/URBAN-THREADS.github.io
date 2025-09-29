import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Package2, CreditCard, MessageCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Returns & <span className="text-accent">Exchanges</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Not completely satisfied? We've got you covered with our hassle-free 30-day return policy.
            </p>
          </div>
        </section>

        {/* Quick Return Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How to <span className="text-accent">Return</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple steps to get your return processed quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Return</h3>
                <p className="text-muted-foreground">
                  Initiate your return online or contact our customer service team.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pack Items</h3>
                <p className="text-muted-foreground">
                  Pack items in original packaging with tags attached if possible.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ship Back</h3>
                <p className="text-muted-foreground">
                  Use our prepaid return label to send items back to us.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Refund</h3>
                <p className="text-muted-foreground">
                  Receive your refund within 3-5 business days after we receive your return.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="cta" size="lg" data-testid="button-start-return">
                Start Return Process
              </Button>
            </div>
          </div>
        </section>

        {/* Return Policy Details */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Return <span className="text-accent">Policy</span>
                </h2>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <RefreshCw className="w-5 h-5 text-accent mr-3" />
                      30-Day Return Window
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      You have 30 days from the delivery date to return any item for a full refund or exchange.
                    </p>
                    <div>
                      <h4 className="font-semibold">Eligible Items</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Items in original condition</li>
                        <li>• Unworn with tags attached</li>
                        <li>• No signs of wear, damage, or alteration</li>
                        <li>• Items in original packaging when possible</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Package2 className="w-5 h-5 text-accent mr-3" />
                      Non-Returnable Items
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Intimate apparel and undergarments</li>
                      <li>• Custom or personalized items</li>
                      <li>• Items marked as final sale</li>
                      <li>• Gift cards and digital products</li>
                      <li>• Items damaged by customer</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Refunds & <span className="text-accent">Exchanges</span>
                </h2>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <CreditCard className="w-5 h-5 text-accent mr-3" />
                      Refund Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Refund Timeline</h4>
                      <p className="text-muted-foreground">3-5 business days after we receive your return</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Refund Method</h4>
                      <p className="text-muted-foreground">Refunds are processed to your original payment method</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Shipping Costs</h4>
                      <p className="text-muted-foreground">Original shipping costs are non-refundable unless the return is due to our error</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <MessageCircle className="w-5 h-5 text-accent mr-3" />
                      Exchange Policy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We offer free exchanges for different sizes or colors of the same item.
                    </p>
                    <div>
                      <h4 className="font-semibold">Exchange Process</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Contact us to initiate an exchange</li>
                        <li>• We'll send you the new item first</li>
                        <li>• Return the original item within 30 days</li>
                        <li>• No additional shipping charges</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Returns */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need <span className="text-accent">Help</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our customer service team is here to help with your return or exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" data-testid="button-contact-support">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" data-testid="button-track-return">
                Track Your Return
              </Button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-muted-foreground">returns@urbanthreads.com</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-muted-foreground">+1 (555) 987-6543</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
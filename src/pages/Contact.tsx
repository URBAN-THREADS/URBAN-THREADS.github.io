import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our products, need styling advice, or want to collaborate? 
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full sm:w-auto"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    We're here to help! Reach out through any of these channels and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MapPin className="w-5 h-5 text-accent mr-3" />
                        Visit Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        123 Street Fashion Ave<br />
                        Urban District, NY 10001<br />
                        United States
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Phone className="w-5 h-5 text-accent mr-3" />
                        Call Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Main: +1 (555) 123-4567<br />
                        Support: +1 (555) 987-6543
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Mail className="w-5 h-5 text-accent mr-3" />
                        Email Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        General: hello@urbanthreads.com<br />
                        Support: support@urbanthreads.com<br />
                        Press: press@urbanthreads.com
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Clock className="w-5 h-5 text-accent mr-3" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to the most common questions we receive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                <p className="text-muted-foreground mb-6">
                  Standard shipping takes 3-5 business days within the US. Express shipping is available for 1-2 day delivery.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What's your return policy?</h3>
                <p className="text-muted-foreground mb-6">
                  We offer 30-day hassle-free returns on all items. Items must be unworn with original tags attached.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-muted-foreground mb-6">
                  Yes! We ship worldwide. International shipping times vary by location, typically 7-14 business days.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How do I track my order?</h3>
                <p className="text-muted-foreground mb-6">
                  Once your order ships, you'll receive a tracking number via email. You can also track orders in your account.
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

export default Contact;
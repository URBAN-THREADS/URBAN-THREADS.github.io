import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Mail, Phone } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Orders & Shipping",
      icon: <HelpCircle className="w-5 h-5 text-accent" />,
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and International shipping takes 7-14 business days. Orders placed after our cutoff times will be processed the next business day."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on all orders over $75 within the United States. International shipping rates vary by location."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! You'll receive a tracking number via email once your order ships. You can also track your order by logging into your account on our website."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "You can modify or cancel your order within 2 hours of placing it. After that, your order enters our fulfillment process and cannot be changed. Contact our customer service team immediately if you need assistance."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      icon: <HelpCircle className="w-5 h-5 text-accent" />,
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy on all items. Items must be unworn, with original tags attached, and in original packaging. Some items like intimate apparel and custom pieces are not eligible for return."
        },
        {
          question: "How do I start a return?",
          answer: "You can start a return by logging into your account and selecting the order you'd like to return, or by contacting our customer service team. We'll provide you with a prepaid return label."
        },
        {
          question: "Do you offer exchanges?",
          answer: "Yes! We offer free exchanges for different sizes or colors of the same item. We'll send you the new item first, and you have 30 days to return the original item."
        },
        {
          question: "When will I get my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive your return. The refund will be credited to your original payment method."
        }
      ]
    },
    {
      title: "Sizing & Fit",
      icon: <HelpCircle className="w-5 h-5 text-accent" />,
      faqs: [
        {
          question: "How do I find my size?",
          answer: "Check out our comprehensive Size Guide page which includes detailed measurements for all our products. If you're between sizes, we generally recommend sizing up for a more relaxed fit."
        },
        {
          question: "Do your clothes run true to size?",
          answer: "Our sizing is generally true to standard US sizing, but fits can vary by style. Each product page includes specific fit notes and model measurements to help you choose the right size."
        },
        {
          question: "What if my item doesn't fit?",
          answer: "No problem! We offer free exchanges for different sizes within 30 days. We'll send you the new size first so you can try it on before returning the original."
        }
      ]
    },
    {
      title: "Product Information",
      icon: <HelpCircle className="w-5 h-5 text-accent" />,
      faqs: [
        {
          question: "How do I care for my Urban Threads clothing?",
          answer: "Care instructions are included on the label of each garment and on the product page. Generally, we recommend washing in cold water and air drying to maintain the quality and longevity of your pieces."
        },
        {
          question: "Are your products ethically made?",
          answer: "Yes! We're committed to ethical manufacturing practices. We work with certified factories that ensure fair wages, safe working conditions, and sustainable production methods."
        },
        {
          question: "Do you restock sold-out items?",
          answer: "We regularly restock popular items, but limited edition pieces may not return. Sign up for restock notifications on product pages to be notified when items become available again."
        },
        {
          question: "Can I get notified about new releases?",
          answer: "Absolutely! Subscribe to our newsletter or follow us on social media to be the first to know about new drops, exclusive releases, and special promotions."
        }
      ]
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
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to the most common questions about Urban Threads. 
              Can't find what you're looking for? We're here to help!
            </p>
          </div>
        </section>

        {/* Quick Help */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Quick <span className="text-accent">Help</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get instant help with these common topics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-size-guide">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-xl">📏</span>
                  </div>
                  <h3 className="font-semibold mb-2">Size Guide</h3>
                  <p className="text-sm text-muted-foreground">Find your perfect fit</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-order-status">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-xl">📦</span>
                  </div>
                  <h3 className="font-semibold mb-2">Order Status</h3>
                  <p className="text-sm text-muted-foreground">Track your package</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-returns">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-xl">🔄</span>
                  </div>
                  <h3 className="font-semibold mb-2">Returns</h3>
                  <p className="text-sm text-muted-foreground">Start a return</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-contact">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-xl">💬</span>
                  </div>
                  <h3 className="font-semibold mb-2">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">Get personal help</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-8">
                    {category.icon}
                    <h2 className="text-2xl font-bold ml-3" data-testid={`heading-${category.title.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}>
                      {category.title}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-card border border-border rounded-lg px-6"
                        data-testid={`accordion-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6" data-testid={`trigger-${categoryIndex}-${faqIndex}`}>
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 text-muted-foreground" data-testid={`content-${categoryIndex}-${faqIndex}`}>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Still Need <span className="text-accent">Help</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our friendly customer service team is ready to assist you with any questions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg">
                    <MessageCircle className="w-5 h-5 text-accent mr-3" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Get instant help from our support team
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available Mon-Fri, 9 AM - 6 PM EST
                  </p>
                  <Button variant="cta" size="sm" data-testid="button-start-chat">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg">
                    <Mail className="w-5 h-5 text-accent mr-3" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Send us a detailed message
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    support@urbanthreads.com
                  </p>
                  <Button variant="outline" size="sm" data-testid="button-send-email">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Speak directly with our team
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    +1 (555) 987-6543
                  </p>
                  <Button variant="outline" size="sm" data-testid="button-call-now">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
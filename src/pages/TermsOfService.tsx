import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertCircle } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our terms and conditions for using Urban Threads website and services.
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Agreement <span className="text-accent">Overview</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These Terms of Service govern your use of our website, products, and services. 
                By using Urban Threads, you agree to these terms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clear Terms</h3>
                <p className="text-muted-foreground">
                  Plain language terms that are easy to understand.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair Policies</h3>
                <p className="text-muted-foreground">
                  Balanced terms that protect both you and Urban Threads.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                <p className="text-muted-foreground">
                  Clear explanation of your rights as a customer.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                <p className="text-muted-foreground">
                  Your responsibilities when using our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By accessing or using the Urban Threads website and services, you agree to be bound by these 
                    Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not 
                    use our services. These terms apply to all visitors, users, and customers of our website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Use of Our Website</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Permitted Use</h4>
                    <p className="text-muted-foreground">
                      You may use our website for lawful purposes only. You agree to use our services in compliance 
                      with all applicable laws and regulations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                    <p className="text-muted-foreground">You agree not to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                      <li>Use our website for any unlawful purpose</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Upload or transmit harmful content</li>
                      <li>Interfere with other users' experience</li>
                      <li>Violate any intellectual property rights</li>
                      <li>Engage in fraudulent activities</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Account Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To make purchases or access certain features, you may need to create an account. You are responsible 
                    for maintaining the confidentiality of your account credentials and for all activities that occur 
                    under your account.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Account Responsibilities</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Provide accurate and complete information</li>
                      <li>Keep your account information up to date</li>
                      <li>Protect your password and account security</li>
                      <li>Notify us immediately of any unauthorized use</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Products and Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Product Information</h4>
                    <p className="text-muted-foreground">
                      We strive to provide accurate product descriptions, images, and pricing. However, we do not 
                      warrant that product descriptions or other content is error-free, complete, or current.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pricing and Availability</h4>
                    <p className="text-muted-foreground">
                      Prices are subject to change without notice. We reserve the right to modify or discontinue 
                      products at any time. In case of pricing errors, we reserve the right to cancel orders.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Orders and Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Order Acceptance</h4>
                    <p className="text-muted-foreground">
                      All orders are subject to acceptance by Urban Threads. We reserve the right to refuse or 
                      cancel any order for any reason, including but not limited to product availability, 
                      errors in pricing or product information, or suspected fraudulent activity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payment Terms</h4>
                    <p className="text-muted-foreground">
                      Payment is required at the time of purchase. We accept major credit cards and other 
                      payment methods as displayed on our website. All payments are processed securely.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Shipping and Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Shipping and return policies are detailed in our separate Shipping Information and Returns pages. 
                    By placing an order, you agree to our shipping and return terms as outlined in those policies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    All content on our website, including but not limited to text, graphics, logos, images, and 
                    software, is the property of Urban Threads or its licensors and is protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Limited License</h4>
                    <p className="text-muted-foreground">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our website 
                      for personal, non-commercial purposes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To the fullest extent permitted by law, Urban Threads shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                    whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
                    intangible losses resulting from your use of our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless Urban Threads and its officers, directors, employees, 
                    and agents from any claims, damages, or expenses arising from your use of our website or 
                    violation of these terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the 
                    State of New York, without regard to its conflict of law provisions. Any disputes arising 
                    under these terms shall be subject to the exclusive jurisdiction of the courts of New York.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                    immediately upon posting. Your continued use of our website after any changes constitutes 
                    acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> legal@urbanthreads.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Street Fashion Ave, Urban District, NY 10001</p>
                  </div>
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

export default TermsOfService;
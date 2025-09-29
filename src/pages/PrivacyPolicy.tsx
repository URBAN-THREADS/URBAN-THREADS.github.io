import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
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

        {/* Privacy Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Privacy <span className="text-accent">Commitment</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At Urban Threads, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure</h3>
                <p className="text-muted-foreground">
                  Your data is protected with industry-standard security measures.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent</h3>
                <p className="text-muted-foreground">
                  We're clear about what data we collect and how we use it.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Controlled</h3>
                <p className="text-muted-foreground">
                  You have full control over your personal information.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Respectful</h3>
                <p className="text-muted-foreground">
                  We never sell your personal data to third parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, 
                      make a purchase, or contact us. This may include your name, email address, phone number, 
                      shipping address, payment information, and any other information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                    <p className="text-muted-foreground">
                      We automatically collect certain information about your device and how you interact with our website, 
                      including IP address, browser type, operating system, referring URLs, pages visited, and time spent on our site.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cookies and Tracking Technologies</h4>
                    <p className="text-muted-foreground">
                      We use cookies, web beacons, and similar tracking technologies to collect information about your 
                      browsing activities and to provide personalized experiences.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Process and fulfill your orders</li>
                    <li>Provide customer service and support</li>
                    <li>Send you important updates about your orders</li>
                    <li>Improve our website and services</li>
                    <li>Personalize your shopping experience</li>
                    <li>Send promotional emails (with your consent)</li>
                    <li>Prevent fraud and enhance security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, rent, or trade your personal information to third parties. We may share your 
                    information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>With service providers who help us operate our business</li>
                    <li>With shipping carriers to deliver your orders</li>
                    <li>With payment processors to handle transactions</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                    of transmission over the internet is 100% secure.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Security Measures Include:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security assessments</li>
                      <li>Limited access to personal information</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Access and review your personal information</li>
                    <li>Update or correct inaccurate information</li>
                    <li>Delete your account and personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Disable cookies in your browser settings</li>
                    <li>Request a copy of your data</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us at privacy@urbanthreads.com.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect 
                    personal information from children under 13. If you are a parent or guardian and believe your 
                    child has provided us with personal information, please contact us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes 
                    by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued 
                    use of our website after any changes constitutes acceptance of the updated policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@urbanthreads.com</p>
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

export default PrivacyPolicy;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, Shield, Eye } from "lucide-react";
import { useState } from "react";

const CookiePolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    personalization: false
  });

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    setCookiePreferences(prev => ({ ...prev, [type]: value }));
  };

  const savePreferences = () => {
    // In a real app, this would save to cookies/localStorage
    console.log('Cookie preferences saved:', cookiePreferences);
    // You could show a toast notification here
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Cookie <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn about how we use cookies to improve your experience on Urban Threads.
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

        {/* Cookie Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Are <span className="text-accent">Cookies</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better, faster, and safer experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cookie className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Essential</h3>
                <p className="text-muted-foreground">
                  Necessary for the website to function properly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics</h3>
                <p className="text-muted-foreground">
                  Help us understand how visitors use our website.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalization</h3>
                <p className="text-muted-foreground">
                  Remember your preferences and settings.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing</h3>
                <p className="text-muted-foreground">
                  Show you relevant ads and content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Preferences */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Cookie <span className="text-accent">Preferences</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose which cookies you'd like to allow. Essential cookies are always enabled.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Cookie className="w-5 h-5 text-accent mr-3" />
                      Essential Cookies
                    </CardTitle>
                    <div className="flex items-center">
                      <span className="text-sm text-muted-foreground mr-3">Always On</span>
                      <div className="w-12 h-6 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Authentication cookies</li>
                      <li>• Shopping cart contents</li>
                      <li>• Security tokens</li>
                      <li>• Website settings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Eye className="w-5 h-5 text-accent mr-3" />
                      Analytics Cookies
                    </CardTitle>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                        className="sr-only"
                        data-testid="toggle-analytics"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${cookiePreferences.analytics ? 'bg-accent' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${cookiePreferences.analytics ? 'translate-x-7' : 'translate-x-1'} mt-1`}></div>
                      </div>
                    </label>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These cookies allow us to count visits and traffic sources so we can measure and improve 
                    the performance of our site. They help us understand which pages are most popular.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Page view tracking</li>
                      <li>• User behavior analysis</li>
                      <li>• Performance monitoring</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 text-accent mr-3" />
                      Personalization Cookies
                    </CardTitle>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.personalization}
                        onChange={(e) => handlePreferenceChange('personalization', e.target.checked)}
                        className="sr-only"
                        data-testid="toggle-personalization"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${cookiePreferences.personalization ? 'bg-accent' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${cookiePreferences.personalization ? 'translate-x-7' : 'translate-x-1'} mt-1`}></div>
                      </div>
                    </label>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These cookies remember your preferences and choices to provide a more personalized experience. 
                    They help us tailor content and recommendations to your interests.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Language preferences</li>
                      <li>• Theme settings</li>
                      <li>• Recommended products</li>
                      <li>• Recently viewed items</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 text-accent mr-3" />
                      Marketing Cookies
                    </CardTitle>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                        className="sr-only"
                        data-testid="toggle-marketing"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${cookiePreferences.marketing ? 'bg-accent' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${cookiePreferences.marketing ? 'translate-x-7' : 'translate-x-1'} mt-1`}></div>
                      </div>
                    </label>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These cookies are used to deliver advertising that is more relevant to you and your interests. 
                    They may also be used to limit the number of times you see an advertisement.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Targeted advertising</li>
                      <li>• Social media integration</li>
                      <li>• Retargeting campaigns</li>
                      <li>• Ad performance tracking</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="cta" size="lg" onClick={savePreferences} data-testid="button-save-preferences">
                Save Preferences
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Managing Cookies in Your Browser</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are 
                    already on your computer and you can set most browsers to prevent them from being placed.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Popular Browsers:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                      <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                      <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Some cookies on our website are set by third-party services that appear on our pages. 
                    These include social media platforms, analytics providers, and advertising networks. 
                    We do not control these cookies, and you should check the relevant third party's 
                    cookie policy for more information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us About Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;
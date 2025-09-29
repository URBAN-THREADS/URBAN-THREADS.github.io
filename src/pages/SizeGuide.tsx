import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizeGuide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Size <span className="text-accent">Guide</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size guide. Get the measurements right for maximum comfort and style.
            </p>
          </div>
        </section>

        {/* Size Guide Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="tshirts" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
                <TabsTrigger value="hoodies">Hoodies</TabsTrigger>
                <TabsTrigger value="pants">Pants</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tshirts">
                <Card>
                  <CardHeader>
                    <CardTitle>T-Shirt Size Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border p-3 text-left">Size</th>
                            <th className="border border-border p-3 text-left">Chest (inches)</th>
                            <th className="border border-border p-3 text-left">Length (inches)</th>
                            <th className="border border-border p-3 text-left">Shoulder (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-3 font-medium">XS</td>
                            <td className="border border-border p-3">34-36</td>
                            <td className="border border-border p-3">26</td>
                            <td className="border border-border p-3">15.5</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">S</td>
                            <td className="border border-border p-3">36-38</td>
                            <td className="border border-border p-3">27</td>
                            <td className="border border-border p-3">16.5</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">M</td>
                            <td className="border border-border p-3">38-40</td>
                            <td className="border border-border p-3">28</td>
                            <td className="border border-border p-3">17.5</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">L</td>
                            <td className="border border-border p-3">40-42</td>
                            <td className="border border-border p-3">29</td>
                            <td className="border border-border p-3">18.5</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">XL</td>
                            <td className="border border-border p-3">42-44</td>
                            <td className="border border-border p-3">30</td>
                            <td className="border border-border p-3">19.5</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">XXL</td>
                            <td className="border border-border p-3">44-46</td>
                            <td className="border border-border p-3">31</td>
                            <td className="border border-border p-3">20.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="hoodies">
                <Card>
                  <CardHeader>
                    <CardTitle>Hoodie Size Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border p-3 text-left">Size</th>
                            <th className="border border-border p-3 text-left">Chest (inches)</th>
                            <th className="border border-border p-3 text-left">Length (inches)</th>
                            <th className="border border-border p-3 text-left">Sleeve (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-3 font-medium">XS</td>
                            <td className="border border-border p-3">36-38</td>
                            <td className="border border-border p-3">26</td>
                            <td className="border border-border p-3">23</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">S</td>
                            <td className="border border-border p-3">38-40</td>
                            <td className="border border-border p-3">27</td>
                            <td className="border border-border p-3">24</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">M</td>
                            <td className="border border-border p-3">40-42</td>
                            <td className="border border-border p-3">28</td>
                            <td className="border border-border p-3">25</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">L</td>
                            <td className="border border-border p-3">42-44</td>
                            <td className="border border-border p-3">29</td>
                            <td className="border border-border p-3">26</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">XL</td>
                            <td className="border border-border p-3">44-46</td>
                            <td className="border border-border p-3">30</td>
                            <td className="border border-border p-3">27</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">XXL</td>
                            <td className="border border-border p-3">46-48</td>
                            <td className="border border-border p-3">31</td>
                            <td className="border border-border p-3">28</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pants">
                <Card>
                  <CardHeader>
                    <CardTitle>Pants Size Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border p-3 text-left">Size</th>
                            <th className="border border-border p-3 text-left">Waist (inches)</th>
                            <th className="border border-border p-3 text-left">Hip (inches)</th>
                            <th className="border border-border p-3 text-left">Inseam (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-3 font-medium">28</td>
                            <td className="border border-border p-3">28-29</td>
                            <td className="border border-border p-3">36-37</td>
                            <td className="border border-border p-3">32</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">30</td>
                            <td className="border border-border p-3">30-31</td>
                            <td className="border border-border p-3">38-39</td>
                            <td className="border border-border p-3">32</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">32</td>
                            <td className="border border-border p-3">32-33</td>
                            <td className="border border-border p-3">40-41</td>
                            <td className="border border-border p-3">32</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">34</td>
                            <td className="border border-border p-3">34-35</td>
                            <td className="border border-border p-3">42-43</td>
                            <td className="border border-border p-3">32</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 font-medium">36</td>
                            <td className="border border-border p-3">36-37</td>
                            <td className="border border-border p-3">44-45</td>
                            <td className="border border-border p-3">32</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="accessories">
                <Card>
                  <CardHeader>
                    <CardTitle>Accessories Size Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Hats & Caps</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border border-border p-3 text-left">Size</th>
                                <th className="border border-border p-3 text-left">Head Circumference (inches)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-border p-3 font-medium">One Size</td>
                                <td className="border border-border p-3">21.5 - 24 (adjustable)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Bags</h3>
                        <p className="text-muted-foreground">All bags are one size fits all with adjustable straps where applicable.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Measurement Guide */}
            <div className="mt-16">
              <Card>
                <CardHeader>
                  <CardTitle>How to Measure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">For Best Results:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Use a flexible measuring tape</li>
                        <li>• Measure over light clothing or undergarments</li>
                        <li>• Keep the tape snug but not tight</li>
                        <li>• Ask someone to help you for accuracy</li>
                        <li>• If between sizes, choose the larger size</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Key Measurements:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• <strong>Chest:</strong> Around the fullest part of your chest</li>
                        <li>• <strong>Waist:</strong> Around your natural waistline</li>
                        <li>• <strong>Hip:</strong> Around the fullest part of your hips</li>
                        <li>• <strong>Shoulder:</strong> From shoulder seam to shoulder seam</li>
                        <li>• <strong>Length:</strong> From highest shoulder point to hem</li>
                      </ul>
                    </div>
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

export default SizeGuide;
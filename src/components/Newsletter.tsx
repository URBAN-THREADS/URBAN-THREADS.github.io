import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Urban Threads!",
        description: "You've successfully joined our newsletter. Get ready for exclusive drops!",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay in the <span className="text-accent">Loop</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know about new drops, exclusive designs, and special offers. 
            Join our community of 50,000+ style enthusiasts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit" 
              variant="cta" 
              disabled={isLoading}
              className="px-8"
            >
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, just style. Unsubscribe anytime.
          </p>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm">50K+ Subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm">Weekly Drops</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm">Exclusive Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
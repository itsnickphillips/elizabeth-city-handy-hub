import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

// Reviews will be added once we have verified customer testimonials

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See why homeowners across NC and VA trust us 
            with their most important projects.
          </p>
        </div>

        {/* Placeholder for Reviews */}
        <div className="text-center mb-16">
          <Card className="shadow-sm border border-primary max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Customers Love Our Work
              </h3>
              <p className="text-foreground mb-6">
                Reviews coming soon! We're building our online presence and will be sharing 
                customer testimonials as we grow our business in the region.
              </p>
              <Button variant="primary">
                Leave a Review
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Future Google Reviews Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto border border-primary">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                We're Building Our Online Presence
              </h3>
              <p className="text-foreground mb-2">
                As we establish our digital footprint, we're excited to share the experiences 
                of our satisfied customers across Northeastern NC and Hampton Roads.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Leave Us a Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
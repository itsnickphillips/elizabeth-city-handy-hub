import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Virginia Beach, VA",
    rating: 5,
    date: "2 weeks ago",
    text: "Horizon Property Services did an amazing job fixing our kitchen cabinet doors and installing new shelving. The work was completed quickly and professionally. Would definitely recommend to anyone in the Hampton Roads area!",
    service: "Kitchen Repairs & Installation"
  },
  {
    name: "Mike Rodriguez",
    location: "Norfolk, VA", 
    rating: 5,
    date: "1 month ago",
    text: "I needed several electrical outlets installed in my home office and a ceiling fan mounted. The technician was punctual, knowledgeable, and cleaned up perfectly after the job. Great communication throughout the project!",
    service: "Electrical Installation"
  },
  {
    name: "Linda Chen",
    location: "Elizabeth City, NC",
    rating: 5,
    date: "3 weeks ago",
    text: "They painted our entire living room and it looks fantastic. The crew was professional, respectful of our home, and the price was very fair. Will definitely use again.",
    service: "Painting Services"
  },
  {
    name: "Robert Wilson",
    location: "Chesapeake, VA",
    rating: 5,
    date: "2 months ago",
    text: "Fast response for a plumbing emergency. Fixed our leaky faucet and toilet issue the same day. Transparent pricing and excellent workmanship. Very satisfied!",
    service: "Plumbing Services"
  }
];

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

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-primary text-lg">{review.name}</h4>
                    <p className="text-foreground text-sm">{review.location}</p>
                    <p className="text-muted-foreground text-xs">{review.date}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-current" size={20} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-border" size={32} />
                  <p className="text-foreground italic pl-6 mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Service Type */}
                <div className="inline-block bg-white text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary">
                  {review.service}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto border border-primary">
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-current" size={24} />
                  ))}
                </div>
                <span className="text-2xl font-bold text-primary">4.9/5</span>
              </div>
              <p className="text-foreground mb-2">Based on 127+ Google Reviews</p>
              <p className="text-sm text-muted-foreground">
                See all our reviews and leave your own feedback
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Read All Reviews
              </Button>
              <Button variant="outline" size="lg">
                Write a Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
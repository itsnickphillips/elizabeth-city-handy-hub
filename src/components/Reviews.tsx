import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Elizabeth City, NC",
    rating: 5,
    date: "2 weeks ago",
    text: "ElizabethCity Pro did an amazing job fixing our kitchen cabinet doors and installing new shelving. The work was completed quickly and professionally. Highly recommend!",
    service: "Kitchen Repairs"
  },
  {
    name: "Mike Rodriguez",
    location: "Camden, NC", 
    rating: 5,
    date: "1 month ago",
    text: "I needed several electrical outlets installed in my home office. The technician was punctual, knowledgeable, and cleaned up after the job. Great service!",
    service: "Electrical Work"
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
    location: "Hertford, NC",
    rating: 5,
    date: "2 months ago",
    text: "Fast response for a plumbing emergency. Fixed our leaky faucet and toilet issue the same day. Transparent pricing and excellent workmanship. Very satisfied!",
    service: "Plumbing Services"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See why Elizabeth City homeowners trust us 
            with their most important projects.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.location}</p>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-secondary fill-current" size={20} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-gray-200" size={32} />
                  <p className="text-gray-700 italic pl-6 mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Service Type */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {review.service}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-secondary fill-current" size={24} />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              </div>
              <p className="text-gray-600 mb-2">Based on 127+ Google Reviews</p>
              <p className="text-sm text-gray-500">
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started on your project? Contact us for a free, no-obligation estimate. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-custom border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <MessageSquare className="mr-3 text-primary" />
                Request Your Free Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input placeholder="(919) 457-7325" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input placeholder="your.email@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address
                </label>
                <Input placeholder="Where do you need the work done?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Service Needed
                </label>
                <Input placeholder="e.g., Plumbing repair, Painting, Electrical work" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <Textarea 
                  placeholder="Please describe your project in detail. Include any specific requirements, timeline, or questions you have."
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="cta" size="lg" className="w-full">
                <Send className="mr-2" size={20} />
                Send My Request
              </Button>

              <p className="text-sm text-gray-500 text-center">
                We'll respond to your request within 2 hours during business hours
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-md border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Need Immediate Service?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us Now</p>
                      <p className="text-xl text-primary font-bold">(919) 457-7325</p>
                      <p className="text-sm text-gray-600">Available 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-primary">office@horizonpropertyservices.com</p>
                      <p className="text-sm text-gray-600">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-600">Northeastern NC & Hampton Roads</p>
                      <p className="text-sm text-gray-600">Licensed in North Carolina & Virginia</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 7AM - 7PM</p>
                      <p className="text-gray-600">Sat-Sun: 8AM - 5PM</p>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
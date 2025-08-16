import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Loader2
} from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  serviceAddress: z.string().optional(),
  serviceType: z.string().optional(),
  projectDescription: z.string().min(10, "Please provide more details about your project")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Store in Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          phone: data.phone,
          email: data.email,
          service_address: data.serviceAddress || null,
          service_type: data.serviceType || null,
          project_description: data.projectDescription
        });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Call send-email edge function after successful Supabase insertion
      try {
        const emailResponse = await fetch('https://yylgysaoxzwgzwudphcc.supabase.co/functions/v1/send-email', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bGd5c2FveHp3Z3p3dWRwaGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNjgwMTIsImV4cCI6MjA3MDg0NDAxMn0.5d5cdr3e7Biheoc4dRvvP71c_G9BFt-pT2OHwpdCUbM',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            email: data.email,
            service_address: data.serviceAddress,
            service_type: data.serviceType,
            project_description: data.projectDescription
          })
        });

        if (emailResponse.ok) {
          toast({
            title: "Request Submitted Successfully!",
            description: "We've received your request and sent you a confirmation email. We'll contact you within 2 hours during business hours.",
          });
        } else {
          throw new Error('Email sending failed');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        toast({
          title: "Request Received!",
          description: "Your request was received, but email confirmation failed. We'll follow up soon.",
        });
      }
      
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try calling us directly at (919) 457-7325.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to get started on your project? Contact us for a free, no-obligation estimate. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-custom border-0">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl text-gray-900 flex items-center">
                <MessageSquare className="mr-2 sm:mr-3 text-primary" size={20} />
                Request Your Free Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      {...register("firstName")}
                      placeholder="Enter your first name"
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      {...register("lastName")}
                      placeholder="Enter your last name"
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      {...register("phone")}
                      placeholder="(xxx) xxx-xxxx"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input 
                      {...register("email")}
                      type="email"
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Address
                  </label>
                  <Input 
                    {...register("serviceAddress")}
                    placeholder="Where do you need the work done?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Service Needed
                  </label>
                  <Input 
                    {...register("serviceType")}
                    placeholder="e.g., Light fixture installation, Painting, Plumbing fixture replacement"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <Textarea 
                    {...register("projectDescription")}
                    placeholder="Please describe your project in detail. Include any specific requirements, timeline, or questions you have."
                    className={`min-h-[120px] ${errors.projectDescription ? "border-red-500" : ""}`}
                  />
                  {errors.projectDescription && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send My Request
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond to your request within 2 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-md border-0">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Ready to Schedule Service?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us Now</p>
                      <a 
                        href="tel:+19194577325" 
                        className="text-xl text-primary font-bold hover:underline"
                      >
                        (919) 457-7325
                      </a>
                      <p className="text-sm text-gray-600">Available 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <a 
                        href="mailto:office@horizonpropertyservice.com"
                        className="text-primary hover:underline"
                      >
                        office@horizonpropertyservice.com
                      </a>
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
                      <p className="text-sm text-gray-600">Fully Insured – Licensed for eligible work</p>
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
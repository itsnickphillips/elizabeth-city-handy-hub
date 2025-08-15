import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of repairs do you handle?",
    answer: "We handle a wide range of interior and exterior repairs including drywall patching, door adjustments, cabinet repairs, fence fixes, deck maintenance, and much more. If you're unsure whether we can help with your specific project, just give us a call!"
  },
  {
    question: "Do you handle major plumbing or electrical work?",
    answer: "We handle fixture replacements and minor repairs such as faucet swaps, light fixture installation, and ceiling fans. Major projects requiring licensed specialists will be referred to our trusted partners in your area."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes! We are fully insured for your protection and peace of mind. We also conduct background checks on all team members for your safety and security."
  },
  {
    question: "How do you schedule service appointments?",
    answer: "In most cases, within 48 hours for smaller projects. Larger projects may require more lead time to ensure proper planning and preparation. We believe in doing quality work rather than rushing, which means better results for you."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all projects. We'll assess your needs and provide transparent, upfront pricing before any work begins."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the entire Northeastern North Carolina region including Elizabeth City, Manteo, and the Outer Banks, plus the Hampton Roads area of Virginia including Norfolk, Virginia Beach, Chesapeake, and Portsmouth. Call us to confirm service in your specific location."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Your satisfaction is our top priority. We offer a satisfaction guarantee on all our work. If there are any issues, we'll work with you to make it right. We believe in doing the job correctly the first time and building long-term relationships with our customers."
  },
  {
    question: "How do you price your services?",
    answer: "We offer transparent, competitive pricing with no hidden fees. Pricing depends on the scope of work, materials needed, and time required. We provide detailed estimates upfront so you know exactly what to expect."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Got questions about our property services across NC and VA? 
            Here are answers to the most common questions from our customers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="text-primary flex-shrink-0" size={20} />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pl-8 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions CTA */}
          <Card className="mt-12 bg-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6 text-white/90">
                Can't find the answer you're looking for? Our friendly team is here to help 
                and answer any specific questions about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9194577325" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors">
                  Call (919) 457-7325
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors">
                  Send Us a Message
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
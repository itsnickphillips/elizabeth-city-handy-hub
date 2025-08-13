import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of repairs do you handle?",
    answer: "We handle a wide range of interior and exterior repairs including drywall patching, door adjustments, cabinet repairs, fence fixes, deck maintenance, and much more. If you're unsure whether we can help with your specific project, just give us a call!"
  },
  {
    question: "Do you do major electrical or plumbing work?",
    answer: "We handle basic electrical work like outlet installation, switch replacement, and light fixtures. For major electrical work (panel upgrades, rewiring) or plumbing (water heater installation, main line repairs), we can recommend licensed specialists in Elizabeth City."
  },
  {
    question: "Are your handymen licensed and insured?",
    answer: "Absolutely! All our team members are fully licensed, bonded, and insured. We also conduct background checks on all employees for your peace of mind and safety."
  },
  {
    question: "How quickly can you respond to service requests?",
    answer: "We offer same-day service for most repairs when you call before noon. Emergency services are available 24/7 for urgent issues like water leaks or electrical problems."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all projects. We'll assess your needs and provide transparent, upfront pricing before any work begins."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Elizabeth City, Camden, Hertford, and all of Pasquotank County, NC. We also serve select areas in Currituck and Chowan counties. Call us to confirm service in your specific location."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Your satisfaction is our top priority. We offer a 100% satisfaction guarantee on all our work. If you're not completely happy, we'll make it right at no additional cost."
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
            Got questions about our handyman services in Elizabeth City? 
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
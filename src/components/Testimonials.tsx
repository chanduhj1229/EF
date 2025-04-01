
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Eventify transformed our company retreat into an unforgettable experience. Their attention to detail and creative approach exceeded our expectations.",
    author: "Sarah Johnson",
    position: "HR Director, TechCorp"
  },
  {
    quote: "Working with Eventify for our product launch was the best decision we made. They handled everything professionally and the event was a huge success.",
    author: "Michael Chen",
    position: "Marketing VP, Innovate Inc"
  },
  {
    quote: "Our wedding day was absolutely perfect thanks to Eventify's coordination. They took care of every detail so we could enjoy our special day.",
    author: "Emily & David Rodriguez",
    position: "Newlyweds"
  },
  {
    quote: "The conference Eventify organized for us received amazing feedback from all attendees. Their technical expertise and organization skills are unmatched.",
    author: "Robert Patel",
    position: "Conference Chair, Industry Association"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it - hear from some of our satisfied clients who have experienced
            the Eventify difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-10 w-10 text-eventify-lightPurple mb-6" />
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`block h-2 w-2 rounded-full ${
                      index === currentIndex ? "bg-eventify-purple" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

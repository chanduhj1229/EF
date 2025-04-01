
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-eventify-green hero-section text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create an Unforgettable Event?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let our team of experts help you plan and execute the perfect event that meets your vision and exceeds expectations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-eventify-green hover:bg-gray-100">
              Book a Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

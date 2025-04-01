
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';
import HomeFeatures from '@/components/HomeFeatures';
import CategoryCard from '@/components/CategoryCard';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import { categories, services } from '@/data/services';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const featuredServices = services.slice(0, 3);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section text-white py-24 md:py-32 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Create Unforgettable Event Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional event planning and management services for 
            corporate functions, social gatherings, and special celebrations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/services">
              <Button size="lg" className="bg-white text-eventify-purple hover:bg-gray-100">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
          <button 
            onClick={scrollToServices}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-200 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Event Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive event planning and management services 
              tailored to your specific needs and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={servicesRef}>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular event management packages designed to make your event exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-eventify-purple hover:bg-eventify-darkPurple">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <HomeFeatures />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default Index;

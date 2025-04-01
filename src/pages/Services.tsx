
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ServiceFilters from "@/components/ServiceFilters";
import { services, getServicesByCategory } from "@/data/services";

const Services = () => {
  const [searchParams] = useSearchParams();
  const [filteredServices, setFilteredServices] = useState(services);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setFilteredServices(getServicesByCategory(categoryParam));
    } else {
      setActiveCategory(null);
      setFilteredServices(services);
    }
  }, [searchParams]);

  const handleFilterChange = (categoryId: string | null) => {
    if (categoryId) {
      setFilteredServices(getServicesByCategory(categoryId));
    } else {
      setFilteredServices(services);
    }
  };

  return (
    <Layout>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive range of event planning and management services,
              tailored to meet your specific requirements and vision.
            </p>
          </div>

          <ServiceFilters onFilter={handleFilterChange} />

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-gray-600">
                Please try selecting a different category or contact us for custom services.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Services;

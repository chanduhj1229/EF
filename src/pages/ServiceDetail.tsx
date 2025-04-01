
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getServiceById, formatPrice, Service } from "@/data/services";
import Layout from "@/components/Layout";
import BookingForm from "@/components/BookingForm";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const fetchedService = getServiceById(id);
        setService(fetchedService || null);
      }
      setIsLoading(false);
    }, 300);
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/3">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-gray-200 p-8 rounded-lg h-64"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/services">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/services" className="inline-flex items-center text-eventify-purple hover:text-eventify-darkPurple mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{service.shortDescription}</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <img 
              src={`${service.image}?auto=format&fit=crop&w=1080&q=80`}
              alt={service.title}
              className="rounded-lg w-full aspect-video object-cover mb-8"
            />
            
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-eventify-purple mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="bg-white shadow-lg rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{formatPrice(service.price)}</h3>
                <p className="text-gray-500 text-sm">
                  {service.price.unit ? `Price is ${service.price.unit}` : ""}
                </p>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mb-4 bg-eventify-purple hover:bg-eventify-darkPurple">
                    Book This Service
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-6">Book {service.title}</h2>
                    <BookingForm serviceId={service.id} serviceName={service.title} />
                  </div>
                </DialogContent>
              </Dialog>
              
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;

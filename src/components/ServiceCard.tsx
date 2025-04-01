
import { Link } from "react-router-dom";
import { Service, formatPrice } from "@/data/services";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="service-card h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={`${service.image}?auto=format&fit=crop&w=600&q=80`}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <div className="text-lg font-semibold text-eventify-purple mb-2">
          {formatPrice(service.price)}
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Includes:</h4>
          <ul className="text-sm space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-eventify-purple">•</span>
                {feature}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-sm text-gray-500">+ {service.features.length - 3} more features</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-6 flex justify-between">
        <Link to={`/services/${service.id}`} className="w-full">
          <Button variant="outline" className="w-full border-eventify-purple text-eventify-purple hover:bg-eventify-lightPurple hover:text-eventify-purple">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

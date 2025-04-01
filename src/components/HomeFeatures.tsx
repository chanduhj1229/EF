
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ThumbsUp, Award } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-8 w-8 mb-4 text-eventify-purple" />,
    title: "Event Planning",
    description: "Comprehensive planning services to bring your event vision to life with meticulous attention to detail."
  },
  {
    icon: <Clock className="h-8 w-8 mb-4 text-eventify-purple" />,
    title: "On-Time Delivery",
    description: "We pride ourselves on punctuality and ensuring every aspect of your event runs on schedule."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 mb-4 text-eventify-purple" />,
    title: "Client Satisfaction",
    description: "Your satisfaction is our priority with personalized service and ongoing communication."
  },
  {
    icon: <Award className="h-8 w-8 mb-4 text-eventify-purple" />,
    title: "Award-Winning",
    description: "Our team of event professionals has been recognized for excellence in event management."
  }
];

const HomeFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Eventify</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional event experiences through professional planning,
            flawless execution, and creative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                {feature.icon}
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;

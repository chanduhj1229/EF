
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Heart, Mic } from 'lucide-react';
import { Category } from '@/data/services';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="h-8 w-8 mb-4 text-eventify-purple" />;
      case 'users':
        return <Users className="h-8 w-8 mb-4 text-eventify-purple" />;
      case 'heart':
        return <Heart className="h-8 w-8 mb-4 text-eventify-purple" />;
      case 'mic':
        return <Mic className="h-8 w-8 mb-4 text-eventify-purple" />;
      default:
        return <Briefcase className="h-8 w-8 mb-4 text-eventify-purple" />;
    }
  };

  return (
    <Link to={`/services?category=${category.id}`}>
      <Card className="h-full card-hover border-transparent hover:border-eventify-purple hover:bg-gray-50">
        <CardContent className="p-6 text-center">
          {getIcon(category.icon)}
          <h3 className="font-bold text-lg mb-2">{category.name}</h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;

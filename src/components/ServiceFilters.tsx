
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/services";
import { useSearchParams, useNavigate } from "react-router-dom";

interface ServiceFiltersProps {
  onFilter: (categoryId: string | null) => void;
}

const ServiceFilters = ({ onFilter }: ServiceFiltersProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(
    searchParams.get("category") || null
  );

  useEffect(() => {
    // Set the initial category from URL params
    const categoryParam = searchParams.get("category");
    setActiveCategory(categoryParam);
    onFilter(categoryParam);
  }, [searchParams, onFilter]);

  const handleCategoryClick = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    onFilter(categoryId);

    // Update URL with the selected category
    if (categoryId) {
      navigate(`/services?category=${categoryId}`);
    } else {
      navigate("/services");
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
      <div className="flex flex-wrap gap-3">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          className={activeCategory === null ? "bg-eventify-purple" : ""}
          onClick={() => handleCategoryClick(null)}
        >
          All Services
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={activeCategory === category.id ? "bg-eventify-purple" : ""}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ServiceFilters;

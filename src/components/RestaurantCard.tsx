import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    image: string;
    deliveryTime: string;
  }
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{restaurant.name}</CardTitle>
        <CardDescription>{restaurant.cuisine}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 mr-1" />
          <span className="font-bold">{restaurant.rating}</span>
        </div>
        <p>وقت التوصيل المتوقع: {restaurant.deliveryTime}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/restaurant/${restaurant.id}`} className="w-full">
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-2">
            عرض القائمة
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
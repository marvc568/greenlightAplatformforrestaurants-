import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon, Truck, CreditCard } from 'lucide-react';
import BackButton from '@/components/BackButton';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // بيانات المطعم (يمكن استبدالها بطلب API حقيقي لاحقًا)
  const restaurant = {
    name: 'مطعم الشرق الأوسط',
    rating: 4.5,
    reviews: 120,
    address: 'شارع الملك فهد، الرياض',
    phone: '+966 11 234 5678',
    deliveryAvailable: true,
    paymentMethods: ['الدفع عند الاستلام', 'بطاقة ائتمان', 'Apple Pay'],
    menu: [
      { category: 'المقبلات', items: [
        { name: 'حمص', price: 15, description: 'حمص مع زيت زيتون وبقدونس' },
        { name: 'متبل', price: 18, description: 'باذنجان مشوي مع طحينة وثوم' },
      ]},
      { category: 'الأطباق الرئيسية', items: [
        { name: 'شاورما دجاج', price: 25, description: 'شاورما دجاج مع بطاطس وسلطة' },
        { name: 'كباب لحم', price: 35, description: 'كباب لحم مشوي مع أرز وصلصة طماطم' },
      ]},
      { category: 'الحلويات', items: [
        { name: 'كنافة', price: 20, description: 'كنافة بالجبنة مع شربات' },
        { name: 'أم علي', price: 22, description: 'حلوى أم علي الساخنة مع المكسرات' },
      ]},
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-4xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{restaurant.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={`https://picsum.photos/seed/${id}/800/400`} alt={restaurant.name} className="w-full h-64 object-cover mb-4 rounded" />
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-400 mr-1" />
            <span className="font-bold">{restaurant.rating}</span>
            <span className="text-gray-600 ml-2">({restaurant.reviews} تقييم)</span>
          </div>
          <p className="mb-2"><strong>العنوان:</strong> {restaurant.address}</p>
          <p className="mb-2"><strong>الهاتف:</strong> {restaurant.phone}</p>
          <p className="mb-2">
            <strong>التوصيل:</strong> 
            {restaurant.deliveryAvailable ? (
              <span className="text-green-500 ml-2"><Truck className="inline mr-1" /> متوفر</span>
            ) : (
              <span className="text-red-500 ml-2">غير متوفر</span>
            )}
          </p>
          <p className="mb-4"><strong>طرق الدفع:</strong> {restaurant.paymentMethods.join(', ')}</p>
          
          <h3 className="text-2xl font-bold mb-2">القائمة</h3>
          <div className="mb-4">
            <Button 
              onClick={() => setSelectedCategory('الكل')}
              className={`mr-2 mb-2 ${selectedCategory === 'الكل' ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              الكل
            </Button>
            {restaurant.menu.map(category => (
              <Button 
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`mr-2 mb-2 ${selectedCategory === category.category ? 'bg-blue-500' : 'bg-gray-300'}`}
              >
                {category.category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurant.menu.map(category => 
              category.items.map(item => 
                (selectedCategory === 'الكل' || selectedCategory === category.category) && (
                  <Card key={item.name}>
                    <CardContent className="flex items-center p-4">
                      <img src={`https://picsum.photos/seed/${item.name}/100/100`} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="font-bold mt-2">{item.price} ريال</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              )
            )}
          </div>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            <CreditCard className="mr-2 h-4 w-4" />
            طلب الآن
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantDetails;
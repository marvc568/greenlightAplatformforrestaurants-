import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();

  // هنا يمكنك استخدام الـ id لجلب بيانات المطعم من الخادم

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">مطعم {id}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={`https://picsum.photos/seed/${id}/800/400`} alt={`مطعم ${id}`} className="w-full h-64 object-cover mb-4 rounded" />
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-400 mr-1" />
            <span className="font-bold">4.5</span>
            <span className="text-gray-600 ml-2">(120 تقييم)</span>
          </div>
          <p className="mb-4">وصف تفصيلي للمطعم وأنواع الأطعمة التي يقدمها.</p>
          <h3 className="text-2xl font-bold mb-2">القائمة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardContent className="flex items-center p-4">
                  <img src={`https://picsum.photos/seed/${id}${item}/100/100`} alt={`طبق ${item}`} className="w-20 h-20 object-cover rounded mr-4" />
                  <div>
                    <h4 className="font-bold">طبق {item}</h4>
                    <p className="text-gray-600">وصف قصير للطبق</p>
                    <p className="font-bold mt-2">50 ريال</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">طلب الآن</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantDetails;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon, Truck, CreditCard, Plus, Minus, Wallet } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { restaurants } from '@/data/restaurants';
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface MenuItem {
  name: string;
  price: number;
  description: string;
}

interface CartItem {
  [key: string]: number;
}

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [cart, setCart] = useState<CartItem>({});
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const { toast } = useToast();

  const restaurant = restaurants.find(r => r.id === Number(id));

  if (!restaurant) {
    return <div>المطعم غير موجود</div>;
  }

  const menu = [
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
  ];

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => ({
      ...prevCart,
      [item.name]: (prevCart[item.name] || 0) + 1
    }));
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تم إضافة ${item.name} إلى سلة المشتريات`,
    });
  };

  const removeFromCart = (item: MenuItem) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[item.name] > 1) {
        newCart[item.name]--;
      } else {
        delete newCart[item.name];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemName, quantity]) => {
      const item = menu.flatMap(cat => cat.items).find(i => i.name === itemName);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    setShowPaymentForm(true);
  };

  const placeOrder = () => {
    if (Object.keys(cart).length === 0) {
      toast({
        title: "السلة فارغة",
        description: "الرجاء إضافة بعض الأصناف إلى السلة قبل الطلب",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "تم تقديم الطلب بنجاح",
      description: `تم إرسال طلبك إلى ${restaurant.name}. سيتم التواصل معك قريبًا لتأكيد الطلب.`,
    });
    setCart({});
    setShowPaymentForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-4xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{restaurant.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover mb-4 rounded" />
          <div className="flex items-center mb-4">
            <StarIcon className="text-yellow-400 mr-1" />
            <span className="font-bold">{restaurant.rating}</span>
            <span className="text-gray-600 ml-2">({Math.floor(Math.random() * 500) + 100} تقييم)</span>
          </div>
          <p className="mb-2"><strong>نوع المطبخ:</strong> {restaurant.cuisine}</p>
          <p className="mb-2"><strong>وقت التوصيل المتوقع:</strong> {restaurant.deliveryTime}</p>
          <p className="mb-2">
            <strong>التوصيل:</strong> 
            <span className="text-green-500 ml-2"><Truck className="inline mr-1" /> متوفر</span>
          </p>
          <p className="mb-4"><strong>طرق الدفع:</strong> الدفع عند الاستلام، بطاقة ائتمان، محفظة إلكترونية</p>
          
          <h3 className="text-2xl font-bold mb-2">القائمة</h3>
          <div className="mb-4">
            <Button 
              onClick={() => setSelectedCategory('الكل')}
              className={`mr-2 mb-2 ${selectedCategory === 'الكل' ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              الكل
            </Button>
            {menu.map(category => (
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
            {menu.map(category => 
              category.items.map(item => 
                (selectedCategory === 'الكل' || selectedCategory === category.category) && (
                  <Card key={item.name}>
                    <CardContent className="flex items-center p-4">
                      <img src={`https://picsum.photos/seed/${item.name}/100/100`} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                      <div className="flex-grow">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="font-bold mt-2">{item.price} جنيه مصري</p>
                      </div>
                      <div className="flex items-center">
                        <Button onClick={() => removeFromCart(item)} className="p-1 bg-red-500 hover:bg-red-600">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2">{cart[item.name] || 0}</span>
                        <Button onClick={() => addToCart(item)} className="p-1 bg-green-500 hover:bg-green-600">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              )
            )}
          </div>
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h4 className="font-bold text-xl mb-2">سلة المشتريات</h4>
            {Object.entries(cart).map(([itemName, quantity]) => {
              const item = menu.flatMap(cat => cat.items).find(i => i.name === itemName);
              return item ? (
                <div key={itemName} className="flex justify-between items-center mb-2">
                  <span>{itemName} x {quantity}</span>
                  <span>{item.price * quantity} جنيه مصري</span>
                </div>
              ) : null;
            })}
            <div className="border-t pt-2 mt-2">
              <strong>المجموع: {getTotalPrice()} جنيه مصري</strong>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-xl mb-2">اختر طريقة الدفع</h4>
            <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">الدفع عند الاستلام (كاش)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">بطاقة بنكية</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wallet" id="wallet" />
                <Label htmlFor="wallet">محفظة إلكترونية</Label>
              </div>
            </RadioGroup>
          </div>
          {showPaymentForm && (
            <div className="mt-4">
              {paymentMethod === 'card' && (
                <div className="space-y-2">
                  <Input placeholder="رقم البطاقة" />
                  <div className="flex space-x-2">
                    <Input placeholder="تاريخ الانتهاء" />
                    <Input placeholder="CVV" />
                  </div>
                  <Input placeholder="اسم حامل البطاقة" />
                </div>
              )}
              {paymentMethod === 'wallet' && (
                <div className="space-y-2">
                  <Input placeholder="رقم المحفظة الإلكترونية" />
                  <Input placeholder="رمز التحقق" />
                </div>
              )}
            </div>
          )}
          <Button onClick={placeOrder} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white">
            {paymentMethod === 'cash' && <CreditCard className="mr-2 h-4 w-4" />}
            {paymentMethod === 'card' && <CreditCard className="mr-2 h-4 w-4" />}
            {paymentMethod === 'wallet' && <Wallet className="mr-2 h-4 w-4" />}
            طلب الآن
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantDetails;
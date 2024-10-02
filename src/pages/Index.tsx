import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Green Light</h1>
        <nav>
          <Button variant="outline" className="mr-2">تسجيل الدخول</Button>
          <Button variant="outline" className="mr-2">إنشاء حساب</Button>
          <Button variant="outline">كن شريكًا</Button>
        </nav>
      </header>

      <main className="container mx-auto mt-10 p-4">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">مرحبًا بك في Green Light</h2>
          <p className="text-xl">منصتك المثالية لاكتشاف أفضل المطاعم وطلب الطعام المفضل لديك بسهولة.</p>
        </section>

        <section className="mb-10">
          <Card>
            <CardHeader>
              <CardTitle>ابحث عن مطعمك المفضل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input placeholder="اسم المطعم أو نوع الطعام" />
                <Button>بحث</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">المطاعم المميزة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>مطعم {i}</CardTitle>
                  <CardDescription>وصف قصير للمطعم</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={`https://picsum.photos/seed/${i}/300/200`} alt={`مطعم ${i}`} className="w-full h-40 object-cover mb-2" />
                  <p>تقييم: ⭐⭐⭐⭐</p>
                </CardContent>
                <CardFooter>
                  <Button>عرض القائمة</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">العروض والخصومات</h3>
          <Card>
            <CardHeader>
              <CardTitle>كوبونات وخصومات</CardTitle>
            </CardHeader>
            <CardContent>
              <p>وفر ارتفاع القيم الشرائية والكوبونات للحصول على خصم</p>
              <p>لأضعاف قيمته ومراجعة</p>
            </CardContent>
            <CardFooter>
              <Button>عرض جميع العروض</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">خطط الاشتراك</h3>
          <Tabs defaultValue="monthly">
            <TabsList className="mb-4">
              <TabsTrigger value="monthly">شهري</TabsTrigger>
              <TabsTrigger value="yearly">سنوي</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "الأساسية", price: 0, features: ["ميزة 1", "ميزة 2", "ميزة 3"] },
                  { name: "الاحترافية", price: 30, features: ["كل مميزات الخطة الأساسية", "ميزة 4", "ميزة 5", "ميزة 6"] },
                  { name: "المتقدمة", price: 75, features: ["كل مميزات الخطة الاحترافية", "ميزة 7", "ميزة 8", "ميزة 9", "ميزة 10"] }
                ].map((plan) => (
                  <Card key={plan.name}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.price} $ شهريًا</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">اشترك الآن</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              {/* يمكن إضافة محتوى مماثل للاشتراكات السنوية هنا */}
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p>جميع الحقوق محفوظة © Green Light 2024</p>
          </div>
          <div>
            <Button variant="link" className="text-white">عن المنصة</Button>
            <Button variant="link" className="text-white">اتصل بنا</Button>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4">
        <Button size="icon" className="rounded-full bg-yellow-500 hover:bg-yellow-600">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
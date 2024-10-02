import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Settings, Download, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import RestaurantCard from '@/components/RestaurantCard';
import NewsBar from '@/components/NewsBar';
import { restaurants } from '@/data/restaurants';
import SupportButton from '@/components/SupportButton';
import DownloadAppButton from '@/components/DownloadAppButton';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Green Light</h1>
        <nav>
          <Link to="/login"><Button variant="outline" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white">تسجيل الدخول</Button></Link>
          <Link to="/register"><Button variant="outline" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white">إنشاء حساب</Button></Link>
          <Link to="/become-partner"><Button variant="outline" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white">كن شريكًا</Button></Link>
          <Link to="/subscriptions"><Button variant="outline" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white">الاشتراكات</Button></Link>
          <Link to="/admin-login"><Button variant="outline" className="bg-green-500 hover:bg-green-600 text-white"><Settings className="mr-2" />لوحة التحكم</Button></Link>
        </nav>
      </header>

      <NewsBar />

      <main className="container mx-auto mt-10 p-4">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">مرحبًا بك في Green Light</h2>
          <p className="text-xl">منصتك المثالية لاكتشاف أفضل المطاعم و طلب الطعام المفضل لديك بسهولة.</p>
        </section>

        <section className="mb-10">
          <Card>
            <CardHeader>
              <CardTitle>ابحث عن مطعمك المفضل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input 
                  placeholder="اسم المطعم أو نوع الطعام" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">بحث</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">المطاعم المميزة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants.filter(restaurant => 
              restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p>جميع الحقوق محفوظة © Green Light 2024</p>
          </div>
          <div>
            <Link to="/about"><Button variant="link" className="text-white">عن المنصة</Button></Link>
            <Link to="/contact"><Button variant="link" className="text-white">اتصل بنا</Button></Link>
          </div>
        </div>
      </footer>

      <SupportButton />
      <DownloadAppButton />
    </div>
  );
};

export default Index;
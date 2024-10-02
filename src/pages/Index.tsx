import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Settings, Download, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import RestaurantCard from '@/components/RestaurantCard';
import MovingAds from '@/components/MovingAds';
import LargeMovingAd from '@/components/LargeMovingAd';
import { restaurants } from '@/data/restaurants';
import SupportButton from '@/components/SupportButton';
import DownloadAppButton from '@/components/DownloadAppButton';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

  useEffect(() => {
    // Fetch welcome message, privacy policy, and terms of use from your backend
    setWelcomeMessage('مرحبًا بك في Green Light، منصتك المفضلة لطلب الطعام!');
  }, []);

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

      <MovingAds />

      <main className="container mx-auto mt-10 p-4">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">مرحبًا بك في Green Light</h2>
          <p className="text-xl">{welcomeMessage}</p>
        </section>

        <LargeMovingAd />

        <section className="mb-10 mt-10">
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
            <Link to="/about"><Button variant="link" className="text-white">من نحن</Button></Link>
            <Link to="/contact"><Button variant="link" className="text-white">اتصل بنا</Button></Link>
            <Button variant="link" className="text-white" onClick={() => setShowPrivacyPolicy(true)}>سياسة الخصوصية</Button>
            <Button variant="link" className="text-white" onClick={() => setShowTermsOfUse(true)}>شروط الاستخدام</Button>
          </div>
        </div>
      </footer>

      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Card className="w-3/4 max-h-3/4 overflow-auto">
            <CardHeader>
              <CardTitle>سياسة الخصوصية</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add your privacy policy content here */}
              <p>هنا يتم عرض محتوى سياسة الخصوصية...</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setShowPrivacyPolicy(false)}>إغلاق</Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {showTermsOfUse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Card className="w-3/4 max-h-3/4 overflow-auto">
            <CardHeader>
              <CardTitle>شروط الاستخدام</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add your terms of use content here */}
              <p>هنا يتم عرض محتوى شروط الاستخدام...</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setShowTermsOfUse(false)}>إغلاق</Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <SupportButton />
      <DownloadAppButton />
    </div>
  );
};

export default Index;
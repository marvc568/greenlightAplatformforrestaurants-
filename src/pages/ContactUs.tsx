import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from 'lucide-react';
import BackButton from '@/components/BackButton';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-2xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">اتصل بنا</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-2" /> +966 11 234 5678
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> info@greenlight.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" /> شارع الملك فهد، الرياض، المملكة العربية السعودية
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="الاسم" required />
              <Input placeholder="البريد الإلكتروني" type="email" required />
              <Textarea placeholder="رسالتك" required />
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                إرسال
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
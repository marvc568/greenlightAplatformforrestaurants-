import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, ShoppingBag, DollarSign, Mail } from 'lucide-react';
import BackButton from '@/components/BackButton';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: 'محمد أحمد', subject: 'استفسار عن الاشتراك', date: '2024-03-01' },
    { id: 2, from: 'سارة خالد', subject: 'مشكلة في الدفع', date: '2024-03-02' },
    { id: 3, from: 'أحمد علي', subject: 'طلب إضافة مطعم', date: '2024-03-03' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-6xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">لوحة التحكم</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="flex items-center p-4">
                <Users className="w-8 h-8 mr-4 text-blue-500" />
                <div>
                  <p className="text-lg font-bold">1,234</p>
                  <p className="text-gray-600">المستخدمون</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <ShoppingBag className="w-8 h-8 mr-4 text-green-500" />
                <div>
                  <p className="text-lg font-bold">567</p>
                  <p className="text-gray-600">الطلبات</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <BarChart className="w-8 h-8 mr-4 text-yellow-500" />
                <div>
                  <p className="text-lg font-bold">89</p>
                  <p className="text-gray-600">المطاعم</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <DollarSign className="w-8 h-8 mr-4 text-red-500" />
                <div>
                  <p className="text-lg font-bold">12,345 ريال</p>
                  <p className="text-gray-600">الإيرادات</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المطاعم</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-2 bg-blue-500 hover:bg-blue-600 text-white">إضافة مطعم جديد</Button>
                <Button className="w-full mb-2 bg-green-500 hover:bg-green-600 text-white">تعديل مطعم</Button>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">حذف مطعم</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-2 bg-blue-500 hover:bg-blue-600 text-white">عرض المستخدمين</Button>
                <Button className="w-full mb-2 bg-yellow-500 hover:bg-yellow-600 text-white">تعليق حساب</Button>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">حذف حساب</Button>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" />
                صندوق الوارد
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-right">من</th>
                    <th className="text-right">الموضوع</th>
                    <th className="text-right">التاريخ</th>
                    <th className="text-right">الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <tr key={message.id}>
                      <td>{message.from}</td>
                      <td>{message.subject}</td>
                      <td>{message.date}</td>
                      <td>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">عرض</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
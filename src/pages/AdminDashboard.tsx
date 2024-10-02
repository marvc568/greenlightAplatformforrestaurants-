import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, ShoppingBag, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <Card className="max-w-6xl mx-auto">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, ShoppingBag, DollarSign, Mail, PlusCircle, Edit, Trash } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
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
          <div className="flex mb-4 space-x-2">
            <Button onClick={() => setActiveTab('overview')} variant={activeTab === 'overview' ? 'default' : 'outline'}>نظرة عامة</Button>
            <Button onClick={() => setActiveTab('restaurants')} variant={activeTab === 'restaurants' ? 'default' : 'outline'}>إدارة المطاعم</Button>
            <Button onClick={() => setActiveTab('users')} variant={activeTab === 'users' ? 'default' : 'outline'}>إدارة المستخدمين</Button>
            <Button onClick={() => setActiveTab('ads')} variant={activeTab === 'ads' ? 'default' : 'outline'}>إدارة الإعلانات</Button>
            <Button onClick={() => setActiveTab('subscriptions')} variant={activeTab === 'subscriptions' ? 'default' : 'outline'}>إدارة الاشتراكات</Button>
          </div>

          {activeTab === 'overview' && (
            <>
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
              <Card>
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
            </>
          )}

          {activeTab === 'restaurants' && (
            <Card>
              <CardHeader>
                <CardTitle>إدارة المطاعم</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="mb-4 bg-green-500 hover:bg-green-600 text-white">
                  <PlusCircle className="mr-2" /> إضافة مطعم جديد
                </Button>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-right">اسم المطعم</th>
                      <th className="text-right">نوع الطعام</th>
                      <th className="text-right">التقييم</th>
                      <th className="text-right">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {restaurants.map((restaurant) => (
                      <tr key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.cuisine}</td>
                        <td>{restaurant.rating}</td>
                        <td>
                          <Button className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button className="bg-red-500 hover:bg-red-600 text-white">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}

          {activeTab === 'users' && (
            <Card>
              <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
              </CardHeader>
              <CardContent>
                <Input className="mb-4" placeholder="البحث عن مستخدم..." />
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-right">اسم المستخدم</th>
                      <th className="text-right">البريد الإلكتروني</th>
                      <th className="text-right">تاريخ التسجيل</th>
                      <th className="text-right">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>أحمد محمد</td>
                      <td>ahmed@example.com</td>
                      <td>2024-01-15</td>
                      <td>
                        <Button className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white">تعليق</Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white">حذف</Button>
                      </td>
                    </tr>
                    {/* يمكن إضافة المزيد من المستخدمين هنا */}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}

          {activeTab === 'ads' && (
            <Card>
              <CardHeader>
                <CardTitle>إدارة الإعلانات</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="mb-4 bg-green-500 hover:bg-green-600 text-white">
                  <PlusCircle className="mr-2" /> إضافة إعلان جديد
                </Button>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">خصم 20% على جميع الطلبات</h3>
                        <p>صالح حتى: 2024-04-01</p>
                      </div>
                      <div>
                        <Button className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  {/* يمكن إضافة المزيد من الإعلانات هنا */}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'subscriptions' && (
            <Card>
              <CardHeader>
                <CardTitle>إدارة الاشتراكات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card>
                    <CardContent>
                      <h3 className="font-bold">الخطة الأساسية</h3>
                      <p>السعر: 99 ريال/شهريًا</p>
                      <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white">تعديل</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <h3 className="font-bold">الخطة المتقدمة</h3>
                      <p>السعر: 199 ريال/شهريًا</p>
                      <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white">تعديل</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <h3 className="font-bold">الخطة الاحترافية</h3>
                      <p>السعر: 299 ريال/شهريًا</p>
                      <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white">تعديل</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
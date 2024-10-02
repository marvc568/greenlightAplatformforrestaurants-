import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, ShoppingBag, DollarSign, Mail, PlusCircle, Edit, Trash, FileText } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { Input } from "@/components/ui/input"
import { restaurants } from '@/data/restaurants';
import AddRestaurantForm from '@/components/AddRestaurantForm';
import EditAdForm from '@/components/EditAdForm';
import EditSubscriptionForm from '@/components/EditSubscriptionForm';
import ContentManagementForm from '@/components/ContentManagementForm';
import PopupAdForm from '@/components/PopupAdForm';
import { useToast } from "@/hooks/use-toast"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddRestaurantForm, setShowAddRestaurantForm] = useState(false);
  const [showEditAdForm, setShowEditAdForm] = useState(false);
  const [showEditSubscriptionForm, setShowEditSubscriptionForm] = useState(false);
  const [showContentManagementForm, setShowContentManagementForm] = useState(false);
  const [showPopupAdForm, setShowPopupAdForm] = useState(false);
  const { toast } = useToast();

  const handleAddRestaurant = (restaurantData) => {
    console.log('Adding new restaurant:', restaurantData);
    setShowAddRestaurantForm(false);
    toast({
      title: "تمت إضافة المطعم",
      description: "تم إضافة المطعم الجديد بنجاح",
    });
  };

  const handleEditAd = (adData) => {
    console.log('Editing ad:', adData);
    setShowEditAdForm(false);
    toast({
      title: "تم تحديث الإعلان",
      description: "تم تحديث الإعلان بنجاح",
    });
  };

  const handleEditSubscription = (subscriptionData) => {
    console.log('Editing subscription:', subscriptionData);
    setShowEditSubscriptionForm(false);
    toast({
      title: "تم تحديث الاشتراك",
      description: "تم تحديث خطة الاشتراك بنجاح",
    });
  };

  const handleContentManagement = (contentData) => {
    console.log('Updating content:', contentData);
    setShowContentManagementForm(false);
    toast({
      title: "تم تحديث المحتوى",
      description: "تم تحديث محتوى الموقع بنجاح",
    });
  };

  const handlePopupAd = (adData) => {
    console.log('Creating popup ad:', adData);
    setShowPopupAdForm(false);
    toast({
      title: "تم إنشاء الإعلان المنبثق",
      description: "تم إنشاء الإعلان المنبثق بنجاح",
    });
  };

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
            <Button onClick={() => setActiveTab('ads')} variant={activeTab === 'ads' ? 'default' : 'outline'}>إدارة الإعلانات</Button>
            <Button onClick={() => setActiveTab('subscriptions')} variant={activeTab === 'subscriptions' ? 'default' : 'outline'}>إدارة الاشتراكات</Button>
            <Button onClick={() => setActiveTab('content')} variant={activeTab === 'content' ? 'default' : 'outline'}>إدارة المحتوى</Button>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <p className="text-lg font-bold">12,345 جنيه مصري</p>
                    <p className="text-gray-600">الإيرادات</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'restaurants' && (
            <div>
              <Button onClick={() => setShowAddRestaurantForm(true)} className="mb-4 bg-green-500 hover:bg-green-600 text-white">
                <PlusCircle className="mr-2" /> إضافة مطعم جديد
              </Button>
              {showAddRestaurantForm && (
                <AddRestaurantForm onSubmit={handleAddRestaurant} onCancel={() => setShowAddRestaurantForm(false)} />
              )}
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
            </div>
          )}

          {activeTab === 'ads' && (
            <div>
              <Button onClick={() => setShowEditAdForm(true)} className="mb-4 bg-green-500 hover:bg-green-600 text-white">
                <PlusCircle className="mr-2" /> إضافة إعلان جديد
              </Button>
              {showEditAdForm && (
                <EditAdForm onSubmit={handleEditAd} onCancel={() => setShowEditAdForm(false)} />
              )}
              {/* هنا يمكنك إضافة قائمة الإعلانات الحالية */}
            </div>
          )}

          {activeTab === 'subscriptions' && (
            <div>
              <Button onClick={() => setShowEditSubscriptionForm(true)} className="mb-4 bg-green-500 hover:bg-green-600 text-white">
                تعديل خطط الاشتراك
              </Button>
              {showEditSubscriptionForm && (
                <EditSubscriptionForm onSubmit={handleEditSubscription} onCancel={() => setShowEditSubscriptionForm(false)} />
              )}
              {/* هنا يمكنك إضافة قائمة خطط الاشتراك الحالية */}
            </div>
          )}

          {activeTab === 'content' && (
            <div>
              <Button onClick={() => setShowContentManagementForm(true)} className="mb-4 bg-blue-500 hover:bg-blue-600 text-white">
                <FileText className="mr-2" /> تعديل المحتوى
              </Button>
              <Button onClick={() => setShowPopupAdForm(true)} className="mb-4 ml-4 bg-purple-500 hover:bg-purple-600 text-white">
                <PlusCircle className="mr-2" /> إضافة إعلان منبثق
              </Button>
              {showContentManagementForm && (
                <ContentManagementForm onSubmit={handleContentManagement} onCancel={() => setShowContentManagementForm(false)} />
              )}
              {showPopupAdForm && (
                <PopupAdForm onSubmit={handlePopupAd} onCancel={() => setShowPopupAdForm(false)} />
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
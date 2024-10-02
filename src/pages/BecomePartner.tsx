import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import BackButton from '@/components/BackButton';

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone1: '',
    phone2: '',
    idNumber: '',
    commercialRegister: '',
    restaurantName: '',
    foodType: '',
    email: '',
    deliveryService: false,
    acceptTerms: false,
  });

  const [files, setFiles] = useState({
    idCard: null,
    commercialRegister: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إرسال البيانات إلى الخادم
    console.log(formData, files);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-2xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">كن شريكًا معنا</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="fullName" placeholder="الاسم الرباعي" onChange={handleInputChange} required />
            <Input name="phone1" placeholder="رقم الهاتف الأول" type="tel" onChange={handleInputChange} required />
            <Input name="phone2" placeholder="رقم الهاتف الثاني" type="tel" onChange={handleInputChange} />
            <Input name="idNumber" placeholder="رقم البطاقة الشخصية" onChange={handleInputChange} required />
            <Input name="commercialRegister" placeholder="رقم السجل التجاري" onChange={handleInputChange} required />
            <Input name="restaurantName" placeholder="اسم المطعم" onChange={handleInputChange} required />
            <Input name="foodType" placeholder="نوع الطعام المقدم" onChange={handleInputChange} required />
            <Input name="email" placeholder="البريد الإلكتروني" type="email" onChange={handleInputChange} required />
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="deliveryService" 
                checked={formData.deliveryService}
                onCheckedChange={() => handleCheckboxChange('deliveryService')}
              />
              <label htmlFor="deliveryService">خدمة التوصيل متوفرة</label>
            </div>

            <div>
              <label className="block mb-2">صورة البطاقة الشخصية:</label>
              <Input name="idCard" type="file" onChange={handleFileChange} required />
            </div>

            <div>
              <label className="block mb-2">صورة السجل التجاري:</label>
              <Input name="commercialRegister" type="file" onChange={handleFileChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="acceptTerms" 
                checked={formData.acceptTerms}
                onCheckedChange={() => handleCheckboxChange('acceptTerms')}
                required
              />
              <label htmlFor="acceptTerms">أوافق على سياسة المنصة وحقوق الملكية</label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              disabled={!formData.acceptTerms}
            >
              تسجيل الطلب
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BecomePartner;
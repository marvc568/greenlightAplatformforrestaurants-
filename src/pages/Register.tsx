import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">إنشاء حساب</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="الاسم الكامل" />
            <Input placeholder="البريد الإلكتروني" type="email" />
            <Input placeholder="رقم الهاتف" type="tel" />
            <Input placeholder="كلمة المرور" type="password" />
            <Input placeholder="تأكيد كلمة المرور" type="password" />
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">إنشاء الحساب</Button>
          </form>
          <p className="mt-4 text-center">
            لديك حساب بالفعل؟ <Link to="/login" className="text-blue-500 hover:underline">تسجيل الدخول</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
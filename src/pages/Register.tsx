import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const handleGoogleSignUp = () => {
    // Implement Google sign-up logic here
    console.log('Google sign-up clicked');
  };

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
          <div className="mt-4">
            <Button 
              onClick={handleGoogleSignUp}
              className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              <FcGoogle className="mr-2" /> التسجيل باستخدام Google
            </Button>
          </div>
          <p className="mt-4 text-center">
            لديك حساب بالفعل؟ <Link to="/login" className="text-blue-500 hover:underline">تسجيل الدخول</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
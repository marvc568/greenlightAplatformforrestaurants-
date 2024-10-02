import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">تسجيل الدخول</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="البريد الإلكتروني" type="email" />
            <Input placeholder="كلمة المرور" type="password" />
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">تسجيل الدخول</Button>
          </form>
          <p className="mt-4 text-center">
            ليس لديك حساب؟ <Link to="/register" className="text-blue-500 hover:underline">إنشاء حساب</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
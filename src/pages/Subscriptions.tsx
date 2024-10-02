import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import BackButton from '@/components/BackButton';

interface Plan {
  name: string;
  price: number;
  features: string[];
}

const Subscriptions = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const plans: Plan[] = [
    { name: 'الأساسية', price: 99, features: ['إدراج المطعم', 'تحديثات أسبوعية', 'دعم عبر البريد الإلكتروني'] },
    { name: 'المتقدمة', price: 199, features: ['كل مميزات الخطة الأساسية', 'تحليلات متقدمة', 'دعم على مدار الساعة'] },
    { name: 'الاحترافية', price: 299, features: ['كل مميزات الخطة المتقدمة', 'تخصيص كامل', 'مدير حساب مخصص'] },
  ];

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowPaymentForm(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق معالجة الدفع
    alert('تم الدفع بنجاح! شكرًا لاشتراكك.');
    setShowPaymentForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">اختر خطة الاشتراك المناسبة لك</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{plan.price} ريال/شهريًا</p>
                <ul className="list-disc list-inside mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleSelectPlan(plan)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  اختر هذه الخطة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {showPaymentForm && selectedPlan && (
          <Card className="mt-8 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">الدفع الإلكتروني</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-4">
                <Input placeholder="رقم البطاقة" required />
                <div className="flex space-x-4">
                  <Input placeholder="MM/YY" required />
                  <Input placeholder="CVV" required />
                </div>
                <Input placeholder="الاسم على البطاقة" required />
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  ادفع {selectedPlan.price} ريال
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
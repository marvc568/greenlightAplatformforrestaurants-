import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from '@/components/BackButton';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-4xl mx-auto mt-12 rtl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">سياسة الخصوصية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-right">
          <p>
            تلتزم منصة Green Light بحماية خصوصية المستخدمين والمعلومات الشخصية التي يتم جمعها من خلال المنصة. تهدف هذه السياسة إلى توضيح كيفية جمع واستخدام وحماية البيانات الشخصية التي تقدمها لنا.
          </p>

          <h3 className="text-2xl font-bold">1. المعلومات التي نجمعها:</h3>
          <p>نقوم بجمع المعلومات التالية عند استخدامك للمنصة:</p>
          <ul className="list-disc list-inside">
            <li>معلومات التسجيل: مثل الاسم، البريد الإلكتروني، رقم الهاتف عند إنشاء حساب.</li>
            <li>معلومات الدفع: مثل تفاصيل بطاقة الائتمان أو الحساب البنكي عند إتمام عمليات الدفع.</li>
            <li>معلومات التصفح: مثل عنوان IP، ونوع المتصفح، وسجل الطلبات عند تصفحك للمنصة.</li>
          </ul>

          <h3 className="text-2xl font-bold">2. كيفية استخدام المعلومات:</h3>
          <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
          <ul className="list-disc list-inside">
            <li>لتقديم خدماتنا وإدارتها، بما في ذلك إدارة حسابك وتقديم الدعم الفني.</li>
            <li>لتحسين تجربة المستخدم على المنصة وتطوير خدماتنا.</li>
            <li>لإرسال التحديثات والمعلومات المتعلقة بالخدمات والعروض الخاصة.</li>
            <li>لضمان حماية وأمان المنصة.</li>
          </ul>

          <h3 className="text-2xl font-bold">3. مشاركة المعلومات:</h3>
          <p>
            لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أي طرف ثالث إلا في الحالات التالية:
          </p>
          <ul className="list-disc list-inside">
            <li>عند الامتثال للمتطلبات القانونية.</li>
            <li>عند الضرورة لحماية حقوق المنصة أو المستخدمين.</li>
          </ul>

          <h3 className="text-2xl font-bold">4. حماية البيانات:</h3>
          <p>
            نستخدم معايير أمان عالية لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفشاء.
          </p>

          <h3 className="text-2xl font-bold">5. حقوق المستخدمين:</h3>
          <p>
            لديك الحق في طلب الوصول إلى بياناتك الشخصية أو تعديلها أو حذفها في أي وقت من خلال إعدادات حسابك أو بالتواصل معنا.
          </p>

          <h3 className="text-2xl font-bold">6. التغييرات على السياسة:</h3>
          <p>
            نحتفظ بالحق في تعديل سياسة الخصوصية من وقت لآخر. سيتم إشعار المستخدمين بأي تغييرات تطرأ عليها من خلال البريد الإلكتروني أو إشعار داخل المنصة.
          </p>

          <h3 className="text-2xl font-bold">7. الاتصال بنا:</h3>
          <p>
            إذا كان لديك أي استفسار حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني: support@greenlight.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
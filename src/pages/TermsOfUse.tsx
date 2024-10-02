import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from '@/components/BackButton';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-4xl mx-auto mt-12 rtl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">شروط الاستخدام</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-right">
          <h3 className="text-2xl font-bold">1. حساب المستخدم:</h3>
          <p>يوجد نوعان من الحسابات على المنصة:</p>
          <h4 className="text-xl font-semibold">حساب العميل العادي:</h4>
          <ul className="list-disc list-inside">
            <li>هذا الحساب مخصص للعملاء الذين يرغبون في طلب الوجبات والخدمات من المطاعم المدرجة على المنصة.</li>
            <li>يتعين على العميل تقديم معلومات دقيقة عند التسجيل، مثل الاسم، رقم الهاتف، وبيانات الدفع.</li>
            <li>العميل مسؤول عن أي استخدام غير مصرح به لحسابه ويجب عليه الحفاظ على أمان بيانات تسجيل الدخول الخاصة به.</li>
          </ul>
          <h4 className="text-xl font-semibold">حساب الشريك:</h4>
          <ul className="list-disc list-inside">
            <li>هذا الحساب مخصص لأصحاب المطاعم الذين يرغبون في الاشتراك في المنصة لإضافة مطاعمهم.</li>
            <li>تتم إضافة المطاعم وإدارتها من خلال فريق الدعم الفني لـ Green Light، وليس من قبل الشريك مباشرة.</li>
            <li>إذا أراد الشريك تعديل أي تفاصيل مثل الأسعار أو إضافة معلومات جديدة تخص صفحة مطعمه، فيجب أن يتم ذلك عن طريق التواصل مع فريق الدعم الفني.</li>
          </ul>
          <p>
            Green Light لا تتحمل أي مسؤولية عن المنتجات التي تقدمها المطاعم ولا عن خدمات التوصيل (الدليفري) المرتبطة بهذه المطاعم. جميع المسؤوليات المتعلقة بالجودة، التوصيل، والخدمات الأخرى تقع على عاتق المطاعم.
          </p>

          <h3 className="text-2xl font-bold">2. الاستخدام المسموح به:</h3>
          <ul className="list-disc list-inside">
            <li>يُسمح باستخدام المنصة للأغراض الشخصية المتعلقة بطلب الخدمات والمنتجات من المطاعم.</li>
            <li>لا يجوز استخدام المنصة لأي أغراض غير قانونية أو تتعارض مع اللوائح المحلية.</li>
          </ul>

          <h3 className="text-2xl font-bold">3. حقوق الملكية الفكرية:</h3>
          <p>
            جميع المحتويات والعلامات التجارية المتعلقة بالمنصة مملوكة لـ Green Light ولا يجوز استخدامها أو إعادة إنتاجها دون إذن مسبق.
          </p>

          <h3 className="text-2xl font-bold">4. التعديلات على الشروط:</h3>
          <p>
            تحتفظ Green Light بالحق في تعديل هذه الشروط من وقت لآخر. سيتم إخطارك بأي تغييرات عبر البريد الإلكتروني أو من خلال إشعار داخل المنصة.
          </p>

          <h3 className="text-2xl font-bold">5. إخلاء المسؤولية:</h3>
          <p>
            Green Light لا تتحمل المسؤولية عن أي خسائر أو أضرار قد تنشأ عن استخدام المنصة أو الاعتماد على المعلومات المقدمة فيها.
          </p>

          <h3 className="text-2xl font-bold">6. إنهاء الحساب:</h3>
          <p>
            تحتفظ Green Light بالحق في إنهاء أو تعليق حسابك إذا قمت بانتهاك أي من شروط الاستخدام أو استخدمت المنصة بطرق تضر بها أو بالمستخدمين الآخرين.
          </p>

          <h3 className="text-2xl font-bold">7. الاتصال بنا:</h3>
          <p>
            لأي استفسارات أو شكاوى تتعلق بشروط الاستخدام، يرجى التواصل معنا عبر البريد الإلكتروني: support@greenlight.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfUse;
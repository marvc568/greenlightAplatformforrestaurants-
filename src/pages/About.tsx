import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from '@/components/BackButton';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <BackButton />
      <Card className="max-w-4xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">من نحن - Green Light</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            مرحبًا بك في Green Light، الشركة الرائدة في مجال تصميم وتطوير المواقع الإلكترونية وتطبيقات الويب. نحن فريق متخصص من المطورين والمصممين الذين يكرسون جهودهم لتقديم حلول تقنية متطورة وفعالة للأعمال بمختلف أحجامها، مع تركيز خاص على تجربة المستخدم و التصميم الجذاب.
          </p>

          <h3 className="text-2xl font-bold">مهمتنا</h3>
          <p>
            نحن نسعى في Green Light إلى تحويل أفكارك إلى حلول رقمية مبتكرة تسهم في تحسين أداء عملك عبر الإنترنت. نساعدك في تصميم مواقع ويب احترافية و تطوير برمجيات متخصصة تناسب احتياجات عملك، مهما كان حجمه أو نوعه. مهمتنا هي تقديم تجربة مستخدم سلسة وأداء تقني عالي يجعل عملك أكثر كفاءة وإنتاجية.
          </p>

          <h3 className="text-2xl font-bold">خدماتنا</h3>
          <ul className="list-disc list-inside">
            <li>تصميم وتطوير مواقع الويب</li>
            <li>تطوير تطبيقات ويب مخصصة</li>
            <li>تحسين واجهة وتجربة المستخدم (UI/UX)</li>
            <li>إدارة المحتوى والتحديثات</li>
            <li>تحليلات الأداء</li>
          </ul>

          <h3 className="text-2xl font-bold">لماذا Green Light؟</h3>
          <ul className="list-disc list-inside">
            <li>خبرة واسعة في تقديم الحلول الرقمية المتكاملة</li>
            <li>استخدام أحدث التقنيات والأدوات</li>
            <li>دعم مستمر في كل مراحل المشروع</li>
            <li>حلول مخصصة لتلبية احتياجات عملك الخاصة</li>
          </ul>

          <h3 className="text-2xl font-bold">رؤيتنا</h3>
          <p>
            نؤمن بأن التقنيات الحديثة هي مفتاح نجاح أي عمل. هدفنا هو توفير حلول رقمية مبتكرة تسهم في نمو أعمال عملائنا وزيادة حضورهم الرقمي، مع الالتزام بالجودة والكفاءة.
          </p>

          <h3 className="text-2xl font-bold">انضم إلى Green Light</h3>
          <p>
            سواء كنت تبحث عن تصميم موقع جديد أو تطوير تطبيق ويب مخصص، نحن هنا للمساعدة. دعنا نساعدك في بناء حضور رقمي مميز يجعل أعمالك تبرز في عالم الإنترنت.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
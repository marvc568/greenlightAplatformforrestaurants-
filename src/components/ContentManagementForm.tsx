import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContentManagementForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    privacyPolicy: '',
    termsOfUse: '',
    welcomeMessage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="privacyPolicy" className="block mb-2">سياسة الخصوصية</label>
        <Textarea
          id="privacyPolicy"
          name="privacyPolicy"
          value={formData.privacyPolicy}
          onChange={handleInputChange}
          rows={5}
        />
      </div>
      <div>
        <label htmlFor="termsOfUse" className="block mb-2">شروط الاستخدام</label>
        <Textarea
          id="termsOfUse"
          name="termsOfUse"
          value={formData.termsOfUse}
          onChange={handleInputChange}
          rows={5}
        />
      </div>
      <div>
        <label htmlFor="welcomeMessage" className="block mb-2">رسالة الترحيب</label>
        <Input
          id="welcomeMessage"
          name="welcomeMessage"
          value={formData.welcomeMessage}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">حفظ التغييرات</Button>
        <Button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white">إلغاء</Button>
      </div>
    </form>
  );
};

export default ContentManagementForm;
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const PopupAdForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    startDate: '',
    endDate: '',
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
        <label htmlFor="title" className="block mb-2">عنوان الإعلان</label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-2">محتوى الإعلان</label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          rows={3}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate" className="block mb-2">تاريخ البداية</label>
        <Input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate" className="block mb-2">تاريخ النهاية</label>
        <Input
          id="endDate"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">إنشاء الإعلان</Button>
        <Button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white">إلغاء</Button>
      </div>
    </form>
  );
};

export default PopupAdForm;
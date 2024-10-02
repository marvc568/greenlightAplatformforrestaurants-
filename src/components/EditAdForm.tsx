import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const EditAdForm = ({ onSubmit, onCancel, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    validUntil: initialData.validUntil || '',
    image: initialData.image || null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="title" placeholder="عنوان الإعلان" value={formData.title} onChange={handleInputChange} required />
      <Textarea name="description" placeholder="وصف الإعلان" value={formData.description} onChange={handleInputChange} required />
      <Input type="date" name="validUntil" value={formData.validUntil} onChange={handleInputChange} required />
      <Input type="file" onChange={handleImageUpload} accept="image/*" />
      
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">حفظ</Button>
        <Button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white">إلغاء</Button>
      </div>
    </form>
  );
};

export default EditAdForm;
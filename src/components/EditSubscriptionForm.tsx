import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface SubscriptionFormData {
  name: string;
  price: string;
  features: string;
}

interface EditSubscriptionFormProps {
  onSubmit: (data: SubscriptionFormData) => void;
  onCancel: () => void;
  initialData?: Partial<SubscriptionFormData>;
}

const EditSubscriptionForm: React.FC<EditSubscriptionFormProps> = ({ onSubmit, onCancel, initialData = {} }) => {
  const [formData, setFormData] = useState<SubscriptionFormData>({
    name: initialData.name || '',
    price: initialData.price || '',
    features: initialData.features || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="اسم الخطة" value={formData.name} onChange={handleInputChange} required />
      <Input type="number" name="price" placeholder="السعر" value={formData.price} onChange={handleInputChange} required />
      <Textarea name="features" placeholder="ميزات الخطة (كل ميزة في سطر جديد)" value={formData.features} onChange={handleInputChange} required />
      
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">حفظ</Button>
        <Button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white">إلغاء</Button>
      </div>
    </form>
  );
};

export default EditSubscriptionForm;
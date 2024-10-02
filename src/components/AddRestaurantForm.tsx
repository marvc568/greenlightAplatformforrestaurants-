import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: File | null;
}

interface FormData {
  name: string;
  cuisine: string;
  phone: string;
  address: string;
  cashPayment: boolean;
  onlinePayment: boolean;
  image: File | null;
  location: string;
  menu: MenuItem[];
}

const AddRestaurantForm = ({ onSubmit, onCancel }: { onSubmit: (data: FormData) => void, onCancel: () => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    cuisine: '',
    phone: '',
    address: '',
    cashPayment: false,
    onlinePayment: false,
    image: null,
    location: '',
    menu: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleAddMenuItem = () => {
    setFormData(prev => ({
      ...prev,
      menu: [...prev.menu, { name: '', description: '', price: '', image: null }]
    }));
  };

  const handleMenuItemChange = (index: number, field: keyof MenuItem, value: string | File | null) => {
    setFormData(prev => ({
      ...prev,
      menu: prev.menu.map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="اسم المطعم" onChange={handleInputChange} required />
      <Input name="cuisine" placeholder="نوع الطعام المقدم" onChange={handleInputChange} required />
      <Input name="phone" placeholder="أرقام التواصل" onChange={handleInputChange} required />
      <Textarea name="address" placeholder="العنوان الكامل" onChange={handleInputChange} required />
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="cashPayment" 
          checked={formData.cashPayment} 
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, cashPayment: checked as boolean }))}
        />
        <label htmlFor="cashPayment">الدفع عند الاستلام</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="onlinePayment" 
          checked={formData.onlinePayment} 
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, onlinePayment: checked as boolean }))}
        />
        <label htmlFor="onlinePayment">الدفع الإلكتروني</label>
      </div>
      <Input type="file" onChange={handleImageUpload} accept="image/*" />
      <Input name="location" placeholder="الموقع الجغرافي (GPS)" onChange={handleInputChange} />
      
      <h3 className="font-bold mt-4">قائمة الطعام</h3>
      {formData.menu.map((item, index) => (
        <div key={index} className="space-y-2">
          <Input 
            placeholder="اسم الطبق" 
            value={item.name} 
            onChange={(e) => handleMenuItemChange(index, 'name', e.target.value)} 
          />
          <Textarea 
            placeholder="وصف الطبق" 
            value={item.description} 
            onChange={(e) => handleMenuItemChange(index, 'description', e.target.value)} 
          />
          <Input 
            type="number" 
            placeholder="السعر" 
            value={item.price} 
            onChange={(e) => handleMenuItemChange(index, 'price', e.target.value)} 
          />
          <Input 
            type="file" 
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                handleMenuItemChange(index, 'image', e.target.files[0])
              }
            }} 
            accept="image/*" 
          />
        </div>
      ))}
      <Button type="button" onClick={handleAddMenuItem}>إضافة طبق جديد</Button>
      
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">حفظ</Button>
        <Button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white">إلغاء</Button>
      </div>
    </form>
  );
};

export default AddRestaurantForm;
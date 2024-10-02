import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const AddRestaurantForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleAddMenuItem = () => {
    setFormData(prev => ({
      ...prev,
      menu: [...prev.menu, { name: '', description: '', price: '', image: null }]
    }));
  };

  const handleMenuItemChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      menu: prev.menu.map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  };

  const handleSubmit = (e) => {
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
        <Checkbox id="cashPayment" name="cashPayment" checked={formData.cashPayment} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, cashPayment: checked }))} />
        <label htmlFor="cashPayment">الدفع عند الاستلام</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="onlinePayment" name="onlinePayment" checked={formData.onlinePayment} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, onlinePayment: checked }))} />
        <label htmlFor="onlinePayment">الدفع الإلكتروني</label>
      </div>
      <Input type="file" onChange={handleImageUpload} accept="image/*" />
      <Input name="location" placeholder="الموقع الجغرافي (GPS)" onChange={handleInputChange} />
      
      <h3 className="font-bold mt-4">قائمة الطعام</h3>
      {formData.menu.map((item, index) => (
        <div key={index} className="space-y-2">
          <Input placeholder="اسم الطبق" value={item.name} onChange={(e) => handleMenuItemChange(index, 'name', e.target.value)} />
          <Textarea placeholder="وصف الطبق" value={item.description} onChange={(e) => handleMenuItemChange(index, 'description', e.target.value)} />
          <Input type="number" placeholder="السعر" value={item.price} onChange={(e) => handleMenuItemChange(index, 'price', e.target.value)} />
          <Input type="file" onChange={(e) => handleMenuItemChange(index, 'image', e.target.files[0])} accept="image/*" />
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
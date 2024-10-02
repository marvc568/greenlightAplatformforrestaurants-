import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      onClick={() => navigate(-1)} 
      className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white"
    >
      <ArrowLeft className="mr-2 h-4 w-4" /> رجوع
    </Button>
  );
};

export default BackButton;
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Headset, Mail, Phone } from 'lucide-react';

const SupportButton = () => {
  const [showSupportInfo, setShowSupportInfo] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <Button 
        size="icon" 
        className="rounded-full bg-yellow-500 hover:bg-yellow-600"
        onClick={() => setShowSupportInfo(!showSupportInfo)}
      >
        <Headset className="h-6 w-6" />
      </Button>
      
      {showSupportInfo && (
        <Card className="absolute bottom-16 right-0 w-64">
          <CardHeader>
            <CardTitle className="text-lg">الدعم الفني</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+201234567890">+20 123 456 7890</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:support@greenlight.com">support@greenlight.com</a>
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SupportButton;
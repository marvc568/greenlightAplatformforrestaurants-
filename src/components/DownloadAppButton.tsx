import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Apple, Android } from 'lucide-react';

const DownloadAppButton = () => {
  const [showDownloadInfo, setShowDownloadInfo] = useState(false);

  return (
    <div className="fixed bottom-4 left-4">
      <Button 
        size="icon" 
        className="rounded-full bg-blue-500 hover:bg-blue-600"
        onClick={() => setShowDownloadInfo(!showDownloadInfo)}
      >
        <Download className="h-6 w-6" />
      </Button>
      
      {showDownloadInfo && (
        <Card className="absolute bottom-16 left-0 w-64">
          <CardHeader>
            <CardTitle className="text-lg">حمل التطبيق</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full flex items-center justify-center" variant="outline">
                <Apple className="mr-2 h-4 w-4" />
                تحميل لـ iOS
              </Button>
              <Button className="w-full flex items-center justify-center" variant="outline">
                <Android className="mr-2 h-4 w-4" />
                تحميل لـ Android
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DownloadAppButton;
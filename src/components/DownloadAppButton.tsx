import React from 'react';
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-4 left-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4">
        <Download className="mr-2" />
        حمل التطبيق
      </Button>
    </motion.div>
  );
};

export default DownloadAppButton;
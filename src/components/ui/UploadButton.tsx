import React, { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";

interface UploadButtonProps {
  label: string;
  onFileSelected: (file: File | null) => void;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ label, onFileSelected }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelected(file);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 flex items-center">
        <label htmlFor="file-upload" className="mr-3">
          <Button variant="outline">Browse</Button>
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

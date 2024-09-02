import { useState } from "react";
import { useSubjectForm } from "@/actions/useSubjectForm";
import { Subject } from "@/interface/Subjects"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerOverlay, DrawerContent } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";

interface AddSubjectFormProps {
  onClose: () => void;
  isOpen: boolean;
}

const AddSubjectForm = ({ onClose, isOpen }: AddSubjectFormProps) => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectTitle, setSubjectTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const { handleSubmit, loading } = useSubjectForm();

  const handleFormSubmit = async () => {
    const newSubject: Subject = { subjectCode, subjectTitle, category };
    try {
      await handleSubmit(newSubject, file!);
      onClose(); // Close the drawer on success
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        className={`p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <h2 className="text-xl font-bold mb-4">Add New Subject</h2>

        <div className="mb-4">
          <Label htmlFor="banner">Upload Subject Banner</Label>
          <Input
            type="file"
            id="banner"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="subjectCode">Subject Code</Label>
          <Input
            id="subjectCode"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            placeholder="Enter Subject Code"
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="subjectTitle">Subject Title</Label>
          <Input
            id="subjectTitle"
            value={subjectTitle}
            onChange={(e) => setSubjectTitle(e.target.value)}
            placeholder="Enter Subject Title"
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
            className="w-full"
          />
        </div>

        <Button
          onClick={handleFormSubmit}
          className="w-full"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Subject"}
        </Button>

        <Button variant="outline" onClick={onClose} className="mt-4 w-full">
          Cancel
        </Button>
      </DrawerContent>
    </Drawer>
  );
};

export default AddSubjectForm;

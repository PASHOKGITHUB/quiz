import { useState } from "react";
import { handleSubmit } from "@/actions/useSubjectForm";
import { Subject } from "@/interface/Subjects";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface AddSubjectFormProps {
  onClose: () => void;
}

const AddSubjectForm = ({ onClose }: AddSubjectFormProps) => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectTitle, setSubjectTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false); // New state for drag-and-drop

  const handleFormSubmit = async () => {
    const newSubject: Subject = {
      subjectCode,
      subjectTitle,
      category,
    };
    setLoading(true);
    try {
      await handleSubmit(newSubject, file!);
      onClose(); // Close the drawer on success
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className="float-left w-[350px] p-3">
      <div className="mb-4">
        <Label htmlFor="banner" className="mb-2 block font-semibold text-gray-700">
          Upload Subject Banner
        </Label>
        <div
          className={`relative w-full border-2 ${
            dragging ? "border-blue-400" : "border-gray-300"
          } border-dashed rounded-lg p-4 flex justify-center items-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="banner"
            accept="image/*" // Only accept image files
            onChange={handleFileSelect}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M12 4v8H4v32h40V12h-8V4H12zm2 0h20v8H14V4zm20 40H14V16h20v28zM28 22v12h4l-6 8-6-8h4V22h4zm0-2h-4v-2h4v2z"
                fill="currentColor"
              />
            </svg>
            <p className="text-sm text-gray-500 mt-2">
              {file ? `File selected: ${file.name}` : "Drag and drop your file here, or click to browse"}
            </p>
          </div>
        </div>
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
        className="w-full bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition"
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Subject"}
      </Button>

      <Button
        variant="outline"
        onClick={onClose}
        className="mt-4 w-full bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition"
      >
        Cancel
      </Button>
    </div>
  );
};

export default AddSubjectForm;

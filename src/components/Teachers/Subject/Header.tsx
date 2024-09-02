import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai"; 
import { FiPlus, FiFileText } from "react-icons/fi"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/router"; 
import AddSubjectForm from "@/components/Teachers/Subject/AddSubjectForm"; 
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [showAddSubjectForm, setShowAddSubjectForm] = useState(false);

  const navigateToQuestionBankFormat = () => {
    router.push("/question-bank-format");
  };

  const handleAddSubjectClick = () => {
    setShowAddSubjectForm(true);
  };

  const handleCloseDrawer = () => {
    setShowAddSubjectForm(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="flex items-center">
          <Input placeholder="Search employees by id or name" className="mr-4" />
          <AiOutlineSearch className="text-gray-500" />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={navigateToQuestionBankFormat}>
            <FiFileText className="mr-2" /> Question Bank Format
          </Button>
          <Button variant="default" onClick={handleAddSubjectClick}>
            <FiPlus className="mr-2" /> Add Subject
          </Button>
        </div>
      </div>
      <AddSubjectForm isOpen={showAddSubjectForm} onClose={handleCloseDrawer} />
    </>
  );
};

export default Header;
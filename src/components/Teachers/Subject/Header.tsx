import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { FiBell, FiShare2 } from "react-icons/fi";
import Image from "next/image"; // Importing Image component from Next.js

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="Logo" width={50} height={40} /> {/* Corrected path */}
        </div>
        
        {/* Search Bar Section */}
        <div className="flex items-center w-full max-w-md ml-8 relative">
          <Input
            placeholder="Search employees by id or name"
            className="w-full pl-4 pr-10 py-2  bg-gray-100 text-sm text-gray-700 border border-gray-300"
          />
          <AiOutlineSearch className="absolute right-3 text-gray-950" />
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          <FiBell className="text-gray-600 cursor-pointer" size={24} /> {/* Notification icon */}
          <FiShare2 className="text-gray-600 cursor-pointer" size={24} /> {/* Share icon */}
        </div>
      </div>
    </>
  );
};

export default Header;

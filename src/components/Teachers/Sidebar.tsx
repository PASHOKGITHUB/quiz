import { useState } from "react";
import { useRouter } from "next/router";
import { FiHome, FiBook, FiCalendar, FiFileText } from "react-icons/fi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/teacher/dashboard" },
    { name: "Subjects", icon: <FiBook />, path: "/teacher/subjects" },
    { name: "Question", icon: <FiBook />, path: "/question" },
    { name: "Exam Management", icon: <FiCalendar />, path: "/exam-management" },
    { name: "Result and Report", icon: <FiFileText />, path: "/result-report" },
  ];

  const handleNavigation = (path: string, name: string) => {
    setActiveItem(name);
    router.push(path);
  };

  return (
    <div className="h-screen p-6 w-64 bg-gray-100">
      {/* <div className="text-lg font-bold mb-8">Logo</div> */}
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center p-4 rounded-lg cursor-pointer ${
              activeItem === item.name ? "bg-gray-300 font-semibold" : ""
            }`}
            onClick={() => handleNavigation(item.path, item.name)}
          >
            {item.icon}
            <span className="ml-4">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

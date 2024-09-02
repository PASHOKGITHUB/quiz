import { FC, useState } from "react";
import { useRouter } from "next/router";

const Sidebar: FC = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(router.pathname);

  const menuItems = [
    { name: "Dashboard", path: "/teachers/dashboard" },
    { name: "Subjects", path: "/teacher/subjects" },
    { name: "Question", path: "#" },
    { name: "Exam Management", path: "#" },
    { name: "Result and Report", path: "#" },
  ];

  const handleItemClick = (path: string) => {
    setActiveItem(path);
    router.push(path);
  };

  return (
    <div className="h-screen p-6 w-64 bg-gray-100">
      <div className="text-lg font-bold">Logo</div>
      <ul className="mt-8">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center p-4 rounded-lg cursor-pointer ${
              activeItem === item.path ? "bg-gray-300" : ""
            }`}
            onClick={() => handleItemClick(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

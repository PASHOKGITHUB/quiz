import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userRole = sessionStorage.getItem("role");
    if (userRole) {
      setRole(userRole);
    }
  }, [currentUser]);

  if (role !== "teacher") {
    return <div>Access Denied</div>;
  }

  return <div>{children}</div>;
};

export default AdminLayout;

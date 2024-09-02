import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      const userRole = sessionStorage.getItem("role"); // Fetch the role from sessionStorage
      if (role !== userRole) {
        setRole(userRole);

        // Redirect based on role
        if (userRole === "admin") {
          router.push("/admin/dashboard");
        } else if (userRole === "teacher") {
          router.push("/teacher/dashboard");
        } else if (userRole === "student") {
          router.push("/student/dashboard");
        } else {
          router.push("/login"); // In case the role is not found
        }
      }
    } else {
      router.push("/login"); // If not authenticated, redirect to login
    }
  }, [currentUser, role, router]);

  return <div>Redirecting...</div>;
}

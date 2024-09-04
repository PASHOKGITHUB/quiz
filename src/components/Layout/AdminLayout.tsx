// // import { ReactNode } from 'react';
// // import { useRouter } from 'next/router';
// // import { getAuth } from 'firebase/auth';

// // interface AdminLayoutProps {
// //   children: ReactNode;
// // }

// // const AdminLayout = ({ children }: AdminLayoutProps) => {
// //   const router = useRouter();
// //   const auth = getAuth();
// //   const user = auth.currentUser;

// //   // Redirect to login if user is not an admin
// //   if (!user || user.role !== 'admin') {
// //     router.push('/login');
// //     return null;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <header className="bg-blue-800 text-white py-4">
// //         <div className="container mx-auto">
// //           <h1>Admin Dashboard</h1>
// //         </div>
// //       </header>
// //       <main className="container mx-auto p-4">{children}</main>
// //       <footer className="bg-blue-800 text-white py-4">
// //         <div className="container mx-auto">
// //           <p>&copy; 2024 Admin Panel</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default AdminLayout;


// import { useAuth } from "@/context/AuthContext";
// import { useEffect, useState } from "react";

// const AdminLayout = ({ children }: { children: React.ReactNode }) => {
//   const { currentUser } = useAuth();
//   const [role, setRole] = useState<string | null>(null);

//   useEffect(() => {
//     const userRole = sessionStorage.getItem("role");
//     if (userRole) {
//       setRole(userRole);
//     }
//   }, [currentUser]);

//   if (role !== "admin") {
//     return <div>Access Denied</div>;
//   }

//   return <div>{children}</div>;
// };

// export default AdminLayout;

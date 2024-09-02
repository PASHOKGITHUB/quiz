import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, User } from "firebase/auth"; // Import onAuthStateChanged and User from firebase/auth
import { auth } from "@/lib/firebase"; // Ensure you import auth from your Firebase configuration
import { AuthProvider } from "../context/AuthContext"; // Context Provider

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => { // Add User type for the user parameter
      if (user) {
        // If user is logged in, navigate to the respective dashboard based on role
        const userRole = sessionStorage.getItem("role"); // Assuming you store the role in sessionStorage
        if (userRole) {
          if (router.pathname !== `/${userRole}/dashboard`) {
            router.push(`/${userRole}/dashboard`);
          }
        }
      } else {
        // If no user is logged in, redirect to login page
        if (router.pathname !== "/signup") {
          router.push("/login");
        }
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [router]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

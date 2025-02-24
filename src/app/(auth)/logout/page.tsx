'use client';

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation"

const LogoutPage = () => {  
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, [logout]);
  return redirect("/login")
}

export default LogoutPage
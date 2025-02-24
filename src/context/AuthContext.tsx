// "use client"

// import { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// type UserRole = "admin" | "user" | "editor";

// type AuthContextType = {
//     user: { id: string; name: string; role: UserRole } | null;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => void;
//     isAuthenticated: boolean;
//     hasRole: (role: UserRole) => boolean;
// };

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//     const [user, setUser] = useState<AuthContextType["user"] | null>(null);
//     const router = useRouter();

//     useEffect(() => {
//         const token = Cookies.get("token");
//         if (token) {
//             fetchUserData(token);
//         }
//     }, []);

//     const fetchUserData = async (token: string) => {
//         try {
//             const res = await fetch("https://external-api.com/user", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             if (!res.ok) throw new Error("Failed to fetch user data");
//             const userData = await res.json();
//             setUser({ id: userData.id, name: userData.name, role: userData.role });
//         } catch (error) {
//             console.error(error);
//             setUser(null);
//         }
//     };

//     const login = async (email: string, password: string) => {
//         const mockUsers = [
//             { email: "admin1@test.com", password: "password123", user_id: "1", role: "admin" },
//             { email: "admin2@test.com", password: "password123", user_id: "2", role: "admin" },
//             { email: "sekolah1@test.com", password: "password123", user_id: "3", role: "sekolah" },
//             { email: "sekolah2@test.com", password: "password123", user_id: "4", role: "sekolah" },
//             { email: "vendor1@test.com", password: "password123", user_id: "5", role: "vendor" },
//             { email: "vendor2@test.com", password: "password123", user_id: "6", role: "vendor" },
//             { email: "pemerintah1@test.com", password: "password123", user_id: "7", role: "pemerintah" },
//             { email: "pemerintah2@test.com", password: "password123", user_id: "8", role: "pemerintah" },
//         ];

//         try {
//             const res = await fetch("https://external-api.com/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!res.ok) throw new Error("Invalid credentials");

//             const data = await res.json();
//             Cookies.set("token", data.token, { expires: 7, path: "/" });

//             setUser({ id: data.user.id, name: data.user.name, role: data.user.role });

//             router.push("/dashboard");
//         } catch (error) {
//             console.error("Login failed:", error);
//         }
//     };

//     const logout = () => {
//         Cookies.remove("token");
//         setUser(null);
//         router.push("/login");
//     };

//     const hasRole = (role: UserRole) => user?.role === role;

//     return (
//         <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, hasRole }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) throw new Error("useAuth must be used within an AuthProvider");
//     return context;
// };

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type User = {
  user_id: string;
  role: string;
  name: string;
};

const AuthContext = createContext<{ user: User | null; login: (email: string, password: string) => Promise<void>; logout: () => void } | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      try {
        // const decoded = jwt.decode(token) as User;
        // setUser(decoded);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock users
    const mockUsers = [
        { email: "admin1@test.com", password: "password123", user_id: "1", role: "admin", name: "Targhib" },
        { email: "admin2@test.com", password: "password123", user_id: "2", role: "admin", name: "Nabil" },
        { email: "sekolah1@test.com", password: "password123", user_id: "3", role: "sekolah", name: "SMPN 1 Kota Bandung" },
        { email: "sekolah2@test.com", password: "password123", user_id: "4", role: "sekolah", name: "SMPN 5 Kota Bandung" },
        { email: "vendor1@test.com", password: "password123", user_id: "5", role: "vendor", name: "Dapur Kodam III Siliwangi" },
        { email: "vendor2@test.com", password: "password123", user_id: "6", role: "vendor", name: "Dapur Umum Kec. Coblong" },
        { email: "pemerintah1@test.com", password: "password123", user_id: "7", role: "gov", name: "Dinas Pendidikan Kota Bandung" },
        { email: "pemerintah2@test.com", password: "password123", user_id: "8", role: "gov", name: "Dinas Pendidikan Kab. Bandung" },
    ];

    const matchedUser = mockUsers.find((u) => u.email === email && u.password === password);
    if (!matchedUser) throw new Error("Invalid email or password");

    Cookies.set("user_id", matchedUser.user_id, { expires: 1 });
    Cookies.set("role", matchedUser.role, { expires: 1 });
    Cookies.set("name", matchedUser.name, { expires: 1 });

    setUser({ user_id: matchedUser.user_id, role: matchedUser.role, name: matchedUser.name });
  };

  const logout = () => {
    Cookies.remove("access_token");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

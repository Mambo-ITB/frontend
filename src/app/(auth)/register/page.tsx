"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agency, setAgency] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    router.push('/confirmation')
    // try {
    //   await login(email, password);
    //   const role = document.cookie
    //     .split("; ")
    //     .find((row) => row.startsWith("role="))
    //     ?.split("=")[1];
    //   router.push(`/${role}`);
    // } catch (err: any) {
    //   setError(err.message || "Login failed");
    // }
  };

  return (
    // <div className="flex min-h-screen items-center justify-center bg-gray-100">
    //   <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    //     <h2 className="text-2xl font-semibold text-center text-gray-700">Register</h2>
    //     {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}
    //     <form className="mt-4" onSubmit={handleSubmit}>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-600">Email</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           required
    //         />
    //       </div>
    //       <div className="mt-4">
    //         <label className="block text-sm font-medium text-gray-600">Password</label>
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           required
    //         />
    //       </div>
    //     <div className="mt-4">
    //         <label className="block text-sm font-medium text-gray-600">Daftar Sebagai</label>
    //         <select
    //             className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //             required
    //         >
    //             <option value="">-Pilih-</option>
    //             <option value="admin">Vendor</option>
    //             <option value="user">Admin Sekolah</option>
    //         </select>
    //     </div>
    //     <div className="mt-4">
    //         <label className="block text-sm font-medium text-gray-600">Instansi</label>
    //         <input
    //           type="text"
    //           value={agency}
    //           onChange={(e) => setAgency(e.target.value)}
    //           required
    //           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
    //       >
    //         Daftar dan Verifikasi
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="bg-sky-100 flex justify-center items-center h-screen">
        <div className= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 bg-sky-100">
                    <label className="block text-gray-600">Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        id="username" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Daftar Sebagai</label>
                    <select
                        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    >
                        <option value="">-Pilih-</option>
                        <option value="admin">Mitra SPPG</option>
                        <option value="user">Admin Sekolah</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-800">Instansi</label>
                    <input 
                        type="text"
                        value={agency}
                        onChange={(e) => setAgency(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                        required
                    />
                </div>

                <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Daftar dan Verifikasi</button>
            </form>
  
            <div className="mt-6 text-green-500 text-center">
                <a href="/login" className="hover:underline">Masuk disini</a>
            </div>
        </div>
        <div className="w-1/2 h-screen hidden lg:block">
            <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full h-full" />
        </div>
    </div>
  );
};

export default RegisterPage;
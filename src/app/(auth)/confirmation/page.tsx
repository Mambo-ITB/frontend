"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agency, setAgency] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    router.push('')
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
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            <div className= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <div className="text-left flex flex-col gap-3">
                    <h1 className="text-3xl font-semibold">
                        Terima kasih telah melakukan verifikasi
                    </h1>
                </div>
                <main className="mt-8">
                    <h3>
                        Permohonan Anda sedang diproses, 
                    </h3>
                    <br />
                    <h2>
                        Informasi login Anda akan dikirim melalui email yang telah dimasukkan setelah proses verifikasi berhasil. 
                    </h2>
                    <br />
                    <h2>Apabila email Anda belum terdaftar, silakan hubungi admin instansi Anda untuk memproses lebih lanjut.</h2>
                    <br />
                    <h2>
                        Klik tombol di bawah untuk kembali ke halaman login
                    </h2>
                    <a href="/login">
                        <button className="px-6 py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                            Ke halaman login
                        </button>
                    </a>
                </main>
            </div>
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

export default ConfirmationPage;

const FacebookIcon = () => {
    return (
      <svg
        stroke="currentColor"
        fill="gray"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
      </svg>
    );
  };
  const InstagramIcon = () => {
    return (
      <svg
        stroke="currentColor"
        fill="gray"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
      </svg>
    );
  };
  const LinkedinIcon = () => {
    return (
      <svg
        stroke="currentColor"
        fill="gray"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
      </svg>
    );
  };
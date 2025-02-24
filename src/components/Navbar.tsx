'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { role } from "@/lib/data";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
    // const { user } = useAuth();
    //   if (!user) {
    //     return <p>Loading user data...</p>;
    // }
    const [user, setUser] = useState<{ id: string; role: string; name: string } | null>(null);
    
      useEffect(() => {
        const getCookie = (name: string) => {
          return document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${name}=`))
            ?.split("=")[1];
        };
    
        const userId = getCookie("user_id");
        const role = getCookie("role");
        const name = getCookie("name");
    
        if (userId && role) {
          setUser({ id: userId, role, name:name });
        }
      }, []);

    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
      <div className="flex items-center justify-between p-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14}/>
            <input 
                type="text"
                placeholder="Cari..." 
                className="w-[200px] p-2 bg-transparent outline-none"    
            />
        </div>

        {/* Icons and User */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20} />
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                1
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">{decodeURIComponent(user.name)}</span>
                        <span className="text-[10px] text-gray-500 text-right">
                            {user.role}
                        </span>
                {/* {role === "admin" ? (
                    <>
                        <span className="text-xs leading-3 font-medium">{user.name}</span>
                        <span className="text-[10px] text-gray-500 text-right">
                            {user.role}
                        </span>
                    </>
                ) : role === "sekolah" ? (
                    <>
                        <span className="text-xs leading-3 font-medium">SMP Negeri 1 Kota Bandung</span>
                        <span className="text-[10px] text-gray-500 text-right">
                            
                            Sekolah
                        </span>
                    </>
                ) : role === "vendor" ? (
                    <>
                        <span className="text-xs leading-3 font-medium">Dapur Kodam III Siliwangi</span>
                        <span className="text-[10px] text-gray-500 text-right">
                            
                            Vendor
                        </span>
                    </>
                ) : (
                    <>
                        <span className="text-xs leading-3 font-medium">Dinas Pendidikan Kota Bandung</span>
                        <span className="text-[10px] text-gray-500 text-right">
                            
                            Pemerintah
                        </span>
                    </>
                )} */}
                {/* <span className="text-xs leading-3 font-medium">SMP Negeri 1 Kota Bandung</span>
                <span className="text-[10px] text-gray-500 text-right">
                    {user?.publicMetadata?.role as string}
                    Sekolah
                </span> */}
            </div>
            <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
            {/* <UserButton /> */}
        </div>
    </div>
    )
  }
  
  export default Navbar;
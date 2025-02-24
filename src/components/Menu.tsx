'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      // All Home
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin"],
      },
      {
        icon: "/home.png",
        label: "Home",
        href: "/sekolah",
        visible: ["sekolah"],
      },
      {
        icon: "/home.png",
        label: "Home",
        href: "/vendor",
        visible: ["vendor"],
      },
      {
        icon: "/home.png",
        label: "Home",
        href: "/gov",
        visible: ["gov"],
      },
      
      // For: Admin
      {
        icon: "/teacher.png",
        label: "Kelola Akun",
        href: "/admin/kelola-akun",
        visible: ["admin"],
      },
      {
        icon: "/teacher.png",
        label: "Data Vendor",
        href: "/admin/data-vendor",
        visible: ["admin"],
      },
      {
        icon: "/teacher.png",
        label: "Data Sekolah",
        href: "/admin/data-sekolah",
        visible: ["admin"],
      },
      {
        icon: "/teacher.png",
        label: "Data Siswa",
        href: "/admin/data-siswa",
        visible: ["admin"],
      },
      {
        icon: "/teacher.png",
        label: "Data Pengiriman",
        href: "/admin/data-pengiriman",
        visible: ["admin"],
      },
      {
        icon: "/teacher.png",
        label: "Data Transaksi",
        href: "/admin/data-transaksi",
        visible: ["admin"],
      },
      {
        icon: "/teacher.png",
        label: "Data Laporan",
        href: "/admin/data-laporan",
        visible: ["admin"],
      },

      // For: sekolah
      {
        icon: "/student.png",
        label: "Data Siswa",
        href: "/sekolah/data-siswa",
        visible: ["sekolah"],
      },
      {
        icon: "/search.png",
        label: "Lacak Pengiriman",
        href: "/sekolah/lacak-pengiriman",
        visible: ["sekolah"],
      },
      {
        icon: "/lesson.png",
        label: "Laporan MBG",
        href: "/sekolah/data-laporan",
        visible: ["sekolah"],
      },

      // For: Vendor
      {
        icon: "/teacher.png",
        label: "Status Pengiriman",
        href: "/vendor/pengiriman",
        visible: ["vendor"],
      },

      // For: Gov
      {
        icon: "/teacher.png",
        label: "Data Vendor",
        href: "/gov/data-vendor",
        visible: ["gov"],
      },
      {
        icon: "/teacher.png",
        label: "Data Sekolah",
        href: "/gov/data-sekolah",
        visible: ["gov"],
      },
      {
        icon: "/teacher.png",
        label: "Data Siswa",
        href: "/gov/data-siswa",
        visible: ["gov"],
      },
      {
        icon: "/teacher.png",
        label: "Data Pengiriman",
        href: "/gov/data-pengiriman",
        visible: ["gov"],
      },
      {
        icon: "/teacher.png",
        label: "Data Transaksi",
        href: "/gov/data-transaksi",
        visible: ["gov"],
      },
      {
        icon: "/teacher.png",
        label: "Data Laporan",
        href: "/gov/data-laporan",
        visible: ["gov"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "sekolah", "vendor", "gov"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "sekolah", "vendor", "gov"],
      },
    ],
  },
];

const Menu = () => {
  // const { user, logout } = useAuth();
  // if (!user) {
  //   return <p>Loading user data...</p>;
  // }
  const [user, setUser] = useState<{ id: string; role: string } | null>(null);

  useEffect(() => {
    const getCookie = (name: string) => {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
    };

    const userId = getCookie("user_id");
    const role = getCookie("role");

    if (userId && role) {
      setUser({ id: userId, role });
    }
  }, []);

  if (!user) {
        return <p>Loading user data...</p>;
  }

  return (
    <div className="mt-4 text-sm">
      {menuItems.map(i => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(user.role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu;
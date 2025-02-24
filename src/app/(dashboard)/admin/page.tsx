'use client'

import UserCard from "@/components/UserCard";
import Tracking from "@/components/Tracking";
import DailyReport from "@/components/DailyReport";
import Announcements from "@/components/Announcements";
import AccountVerifSum from "@/components/AccountVerifSum";
import { useMemo } from "react";
import dynamic from 'next/dynamic';

const AdminPage = () => {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])
    
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* User Cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="admin" net={2}/>
                    <UserCard type="sekolah" net={5}/>
                    <UserCard type="vendor" net={4}/>
                    <UserCard type="gov" net={2}/>
                </div>
                <div className="w-full bg-white rounded-md p-4 h-[500px]">
                    <Map posix={[-6.914744, 107.609810]} />
                </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <AccountVerifSum />
                </div>
                <div className="bg-white p-4 rounded-md">
                    <Announcements/>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;
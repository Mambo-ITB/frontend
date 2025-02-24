import UserCard from "@/components/UserCard";
import Image from "next/image";
import Link from "next/link";
import { role } from "@/lib/data";
import StudentCountChart from "@/components/StudentCountChart";
import Announcements from "@/components/Announcements";
import DailyReport from "@/components/DailyReport";
import Tracking from "@/components/Tracking";
import GrowthGraph from "@/components/GrowthGraph";
import PresentGraphSingle from "@/components/PresentGraphSingle";
import PresentCount from "@/components/PresentCount";
import HeightGrowth from "@/components/HeightGrowth";
import WeightGrowth from "@/components/WeightGrowth";

const DataSiswaSingle = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-l font-semibold">
                                {/* {teacher.name + " " + teacher.surname} */}
                                Gita Binti Rahman
                                </h1>
                                {/* {role === "admin" && (
                                <FormContainer table="teacher" type="update" data={teacher} />
                                )} */}
                            </div>
                            {/* <p className="text-sm text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p> */}
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/home.png" alt="" width={14} height={14} />
                                    {/* <span>{teacher.bloodType}</span> */}
                                    <span>3750400560</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/assignment.png" alt="" width={14} height={14} />
                                    <span>
                                    perempuan
                                        {/* {new Intl.DateTimeFormat("en-GB").format(teacher.birthday)} */}
                                    </span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    {/* <span>{teacher.phone || "-"}</span> */}
                                    Kota Cimahi, 11 Mei 2010
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/profile.png" alt="" width={14} height={14} />
                                    {/* <span>{teacher.phone || "-"}</span> */}
                                    Kelas 7
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* <StudentCountChart /> */}
                        {/* <CountChartContainer /> */}
                        <PresentCount />
                    </div>
                </div>
                
                {/* MIDDLE CHARTS */}
                <div className="mt-4 bg-white rounded-md p-4 h-[300px]">
                    {/* <PresentGraphSingle /> */}
                    <HeightGrowth />
                </div>

                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[300px]">
                    {/* <GrowthGraph /> */}
                    <WeightGrowth />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    {/* <Tracking /> */}
                    <Announcements/>
                </div>
            </div>
        </div>
    )
}

export default DataSiswaSingle
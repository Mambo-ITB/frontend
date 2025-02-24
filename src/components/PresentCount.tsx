"use client"

import Image from "next/image"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Hadir', value: 4 },
    { name: 'Tidak Hadir', value: 1 },
];

const hadir = 4
const absen = 1

const COLORS = ['#C3EBFA', '#FAE27C'];

const PresentCount = () => {
    return (
        <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
                    {/* Title */}
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg font-semibold">Presensi Siswa Program MBG</h1>
                        <Image src="/moreDark.png" alt="" width={20} height={20} />
                    </div>
                    {/* Chart */}
                    <div className='flex justify-between'>
                        <div className='w-2/3'>
                            <ResponsiveContainer>
                                <PieChart width={800} height={400}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="70%"
                                        outerRadius="100%"
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='flex flex-col gap-2 w-1/3 justify-center'>
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-lamaSky rounded-full" />
                                <span className="font-bold">{hadir}</span>
                                <h2 className="text-xs text-gray-500">
                                    Hadir
                                </h2>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                                <span className="font-bold">{absen}</span>
                                <h2 className="text-xs text-gray-500">
                                    Absen
                                </h2>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-lamaPurple rounded-full" />
                                <span className="font-bold">{hadir+absen}</span>
                                <h2 className="text-xs text-gray-500">
                                    Total
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default PresentCount
"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

  const data = [
    {
      name: 'Desember',
      tinggi: 145,
    },
    {
      name: 'Januari',
      tinggi: 148,
    },
  ];

const HeightGrowth = () => {
    return (
        <div className="flex flex-col bg-white p-4 justify-between rounded-md h-full w-full">
            <div className="flex items-center justify-between h-[15%] mb-5">
                <h1 className="text-xl font-semibold">Perkembangan Tinggi Badan Siswa</h1>
                {/* <a href='/laporan' className="text-xs text-gray-400">Lihat Detail</a>  */}
            </div>
            <div className="h-[100%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis type='number' domain={['auto','auto']}/>
                        <Tooltip />
                        <Legend />
                        <Line name="Tinggi Badan (cm)" type="monotone" dataKey="tinggi" stroke="#8884d8" activeDot={{ r: 8 }} />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default HeightGrowth;
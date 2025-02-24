"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '-3',
      tinggi: 30,
      berat: 20,
    },
    {
      name: '-2',
      tinggi: 35,
      berat: 30,
    },
    {
      name: '-1',
      tinggi: 50,
      berat: 25,
    },
    {
      name: '0',
      tinggi: 70,
      berat: 50,
    },
    {
      name: '+1',
      tinggi: 40,
      berat: 30,
    },
    {
      name: '+2',
      tinggi: 20,
      berat: 20,
    },
    {
      name: '+3',
      tinggi: 10,
      berat: 10,
    },
];

const GrowthGraph = () => {
    return (
        <div className="flex flex-col bg-white p-4 justify-between rounded-md h-full w-full">
            <div className="flex items-center justify-between h-[15%] mb-5">
                <h1 className="text-xl font-semibold">Grafik Perkembangan Siswa</h1>
                <a href="/siswa" className="text-xs text-gray-400">Lihat Detail</a>
            </div>
            <div className="h-[100%]">
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tinggi" fill="#CFCEFF" activeBar={<Rectangle fill="violet" stroke="blue" />} />
          <Bar dataKey="berat" fill="#FAE27C" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GrowthGraph;
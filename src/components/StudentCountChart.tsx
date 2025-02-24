"use client"
import Image from 'next/image';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { dataSiswa } from '@/lib/dataSiswa';

// For perkembangan entries
interface Perkembangan {
    bulan: string;
    tahun: string;
    tinggi_badan: string;
    berat_badan: string;
}

// For presensi entries
interface Presensi {
    tanggal: string;
    presensi: number; // typically 0 or 1
}

interface Student {
    id: number,
    id_sekolah: number,
    nama: string,
    nisn: string,
    gender: string,
    tempat_lahir: string,
    tanggal_lahir: string,
    kelas: string,
    perkembangan: Perkembangan[],
    presensi: Presensi[]
}

const data = [
    { name: 'Boys', value: 6 },
    { name: 'Girls', value: 4 },
];

const boys = 6
const girls = 4


const COLORS = ['#C3EBFA', '#FAE27C'];

// const countGender = (students:Student, schoolId:number):{ boys:number; girls:number } => {
//     const filtered = students.filter((s) => s.id_sekolah === schoolId);

//     // Initialize counters
//     let boys = 0;
//     let girls = 0;

//     // Count each gender
//     filtered.forEach((student) => {
//         if (student.gender === "laki-laki") {
//             boys++;
//         } else if (student.gender === "perempuan") {
//             girls++;
//         }
//     });
//     return { boys, girls}
// }

// const {boys, girls} = countGender(dataSiswa,1)


const StudentCountChart = () => {
    return(
        <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Jumlah Siswa</h1>
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
                        <span className="font-bold">{boys}</span>
                        <h2 className="text-xs text-gray-500">
                            Laki-laki
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                        <span className="font-bold">{girls}</span>
                        <h2 className="text-xs text-gray-500">
                            Perempuan
                        </h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 bg-lamaPurple rounded-full" />
                        <span className="font-bold">{boys+girls}</span>
                        <h2 className="text-xs text-gray-500">
                            Total
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCountChart
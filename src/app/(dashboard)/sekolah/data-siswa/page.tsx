import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/components/TableSearch"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import { role } from "@/lib/data"
import { dataSiswa } from "@/lib/dataSiswa"

type Student = {
    id:number;
    id_sekolah:number;
    nama:string;
    nisn:string;
    gender:string;
    tempat_lahir:string;
    tanggal_lahir:string;
    kelas:string;
    perkembangan:string[];
    presensi:string[];
}

const columns = [
    {
        header: "NISN", 
        accessor: "nisn"
    },
    {
        header: "Nama", 
        accessor: "name", 
    },
    {
        header: "Sekolah", 
        accessor: "sekolah", 
        className: "hidden md:table-cell"
    },
    {
        header: "Jenis Kelamin", 
        accessor: "gender", 
        className: "hidden md:table-cell"
    },
    {
        header: "Tempat, Tanggal Lahir", 
        accessor: "birthday", 
        className: "hidden md:table-cell"
    },
    {
        header: "Kelas", 
        accessor: "class", 
        className: "hidden md:table-cell"
    },
    {
        header: "Actions", 
        accessor: "action", 
    },
]

const DataSiswaPage = () => {

    const renderRow = (item:Student) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="">{item.nisn}</td>
            <td className="capitalize">{item.nama}</td>
            <td className="hidden md:table-cell">{item.id_sekolah}</td>
            <td className="hidden md:table-cell capitalize">{item.gender}</td>
            <td className="hidden md:table-cell capitalize">{item.tempat_lahir}, {item.tanggal_lahir}</td>
            <td className="hidden md:table-cell">{item.kelas}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/siswa/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    { role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                          <Image src="/delete.png" alt="" width={16} height={16} />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Data Siswa</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>

                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={dataSiswa}/>
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default DataSiswaPage
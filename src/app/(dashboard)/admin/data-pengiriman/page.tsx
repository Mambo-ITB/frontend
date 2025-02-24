import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/components/TableSearch"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import { role,accountsData } from "@/lib/data"

type Delivery = {
    id: number,
    vendor: string,
    sekolah: string,
    tanggal: string,
    menu: string,
    jumlahkirim: number,
    waktukirim: string,
    status: string,
}

const columns = [
    {
        header: "Tanggal", 
        accessor: "tanggal"
    },
    {
        header: "Sekolah Tujuan", 
        accessor: "sekolah", 
        className: ""
    },
    {
        header: "Menu", 
        accessor: "menu", 
        className: "hidden md:table-cell"
    },
    {
        header: "Jumlah", 
        accessor: "jumlah", 
        className: "hidden md:table-cell"
    },
    {
        header: "Waktu Kirim", 
        accessor: "waktukirim", 
        className: "hidden md:table-cell"
    },
    {
        header: "Status", 
        accessor: "status", 
        className: "hidden md:table-cell"
    },
    {
        header: "Actions", 
        accessor: "action", 
    },
]


const DataPengirimanPage = () => {

    const renderRow = (item:Delivery) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="">{item.tanggal}</td>
            <td className="">{item.sekolah}</td>
            <td className="hidden md:table-cell py-2">{item.menu}</td>
            <td className="hidden md:table-cell py-2">{item.jumlahkirim}</td>
            <td className="hidden md:table-cell">{item.waktukirim}</td>
            <td className="hidden md:table-cell">{item.status}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
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
                <h1 className="hidden md:block text-lg font-semibold">Data Pengiriman</h1>
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
            <Table columns={columns} renderRow={renderRow} data={accountsData}/>
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default DataPengirimanPage
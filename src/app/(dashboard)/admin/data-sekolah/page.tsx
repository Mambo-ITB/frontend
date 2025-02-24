import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/components/TableSearch"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import { role,accountsData } from "@/lib/data"

type Account = {
    id:number;
    name:string;
    email:string;
    npsn:string;
    alamat:string;
    nohp:string;
    verification:string;
}

const columns = [
    {
        header: "Id", 
        accessor: "id"
    },
    {
        header: "Nama", 
        accessor: "name", 
        className: ""
    },
    {
        header: "Email", 
        accessor: "email", 
        className: "hidden md:table-cell"
    },
    {
        header: "NPSN", 
        accessor: "npsn", 
        className: "hidden md:table-cell"
    },
    {
        header: "Alamat", 
        accessor: "alamat", 
        className: "hidden md:table-cell"
    },
    {
        header: "No. Hp", 
        accessor: "nohp", 
        className: "hidden md:table-cell"
    },
    {
        header: "Status Verifikasi", 
        accessor: "verification", 
        className: "hidden md:table-cell"
    },
    {
        header: "Actions", 
        accessor: "action", 
    },
]


const DataSekolahPage = () => {

    const renderRow = (item:Account) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="">{item.id}</td>
            <td className="">{item.name}</td>
            <td className="hidden md:table-cell">{item.email}</td>
            <td className="hidden md:table-cell">{item.npsn}</td>
            <td className="hidden md:table-cell">{item.alamat}</td>
            <td className="hidden md:table-cell">{item.nohp}</td>
            <td className="hidden md:table-cell">{item.verification}</td>
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
                <h1 className="hidden md:block text-lg font-semibold">Data Sekolah</h1>
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

export default DataSekolahPage
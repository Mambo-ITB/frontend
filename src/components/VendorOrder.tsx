import Image from "next/image"
import Link from "next/link"
import Table from "@/components/Table";
import { ordersData } from "@/lib/data";

type Order = {
    id: number,
    tanggal: string,
    no_order: string,
    paket: string,
    sekolah: string,
    jumlah_kirim: number,
    waktuk_kirim: string,
}

const columnsOrder = [
    {
        header: "Tujuan", 
        accessor: "tujuan"
    },
    {
        header: "Paket", 
        accessor: "paket", 
        className: ""
    },
    {
        header: "Jumlah", 
        accessor: "jumlah", 
        className: ""
    }
]

const VendorOrder = () => {
    const renderRowOrder = (item:Order) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="py-2">{item.sekolah}</td>
            <td className="py-2">{item.paket}</td>
            <td className="py-2">
                {item.jumlah_kirim}
                {/* <div className="flex items-center gap-2">
                    <Link href={`vendor/pengiriman`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src="/plus.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    { role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                          <Image src="/delete.png" alt="" width={16} height={16} />
                        </button>
                    )}
                </div> */}
            </td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Status Pesanan</h1>
                {/* <Link href="/vendor/pengiriman/" className="cursor-pointer">
                    <Image src="/plus.png" alt="" width={14} height={14} />
                </Link> */}
            </div>
            <div className="flex flex-col gap-4 mt-4 grow">
                <h2 className="h-0.5 text-s">Tanggal: {"24/2/2025"}</h2>
                <Table columns={columnsOrder} renderRow={renderRowOrder} data={ordersData}>

                </Table>
                {/* <div className="bg-lamaSkyLight rounded-md p-4">
                    <h2 className="text-xl text-gray-400 mt-1 text-center uppercase">
                        Tidak ada pesanan yang masuk
                    </h2>
                </div> */}
                <Link href="vendor/pengiriman" className="cursor-pointer self-center">
                    <button className="p-1 rounded-md bg-lamaSky hover:bg-lamaPurple">Mulai Pengiriman</button>
                </Link>
            </div>
        </div>
    )
}

export default VendorOrder
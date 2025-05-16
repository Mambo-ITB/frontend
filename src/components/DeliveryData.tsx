import Image from "next/image"
import Table from "./Table"

const data = [
    {
        id: 1,
        name: "Target Waktu",
        marks: ":",
        content: "11.00 WIB"
    },
    {
        id: 2,
        name: "Asal",
        marks: ":",
        content: "Dapur Kodam III Siliwangi"
    },
    {
        id: 3,
        name: "Tujuan",
        marks: ":",
        content: "SMPN 1 Kota Bandung"
    },
    {
        id: 4,
        name: "Menu",
        marks: ":",
        content: "Paket A"
    },
    {
        id: 5,
        name: "Jumlah",
        marks: ":",
        content: "550"
    },
]

type Delivery = {
    id: number,
    name: string,
    marks: string,
    content: string,
}

const columnsDelivery = [
    {
        header: "", 
        accessor: "nama"
    },
    {
        header: "", 
        accessor: "marks"
    },
    {
        header: "", 
        accessor: "keterangan", 
        className: ""
    },
]

const DeliveryData = () => {
    const renderRowDelivery = (item:Delivery) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="text-xs">{item.name}</td>
            <td className="text-xs pr-3">{item.marks}</td>
            <td className="text-xs">{item.content}</td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Data Pengiriman</h1>
                <a href="/pelacakan" className="cursor-pointer">
                    <Image src="/search.png" alt="" width={14} height={14} />
                </a>
            </div>
            <div className="flex flex-col gap-4 mt-4 p-5 grow border-4 border-dashed">
                <div className="bg-lamaSkyLight rounded-md px-4 py-3 flex flex-col">
                    <Table columns={columnsDelivery} renderRow={renderRowDelivery} data={data}/>
                    
                    {/* <h2 className="text-s text-gray-600">Target Sampai: {"11.00 WIB"}</h2>
                    <h2 className="text-s text-gray-600">Asal: {"Dapur Kodam III Siliwangi"}</h2>
                    <h2 className="text-gray-600">Tujuan: {"SMPN 1 Kota Bandung"}</h2>
                    <h2 className="text-gray-600">Paket: {"Paket A"}</h2>
                    <h2 className="text-gray-600">Jumlah: {"500"} paket</h2> */}
                            {/* <h2 className="text-xl text-gray-400 mt-1 text-center uppercase">
                                Tujuan:
                            </h2> */}
                </div>
            </div>
        </div>
    )
}

export default DeliveryData
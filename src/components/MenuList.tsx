import Image from "next/image"
import Table from "./Table"
import { menuData } from "@/lib/dataMenu"

type Content = {
    component: string,
    weight: string,
    calory: string
}

type Menu = {
    id: number,
    name: string,
    content: Content[],
    netcalory: string,
}

const columnsMenu = [
    {
        header: "Nama", 
        accessor: "name"
    },
    {
        header: "Konten", 
        accessor: "content", 
        className: ""
    },
    {
        header: "Total Kalori", 
        accessor: "netcalory", 
        className: "hidden md:table-cell"
    }
]

const MenuList = () => {
    const renderRowMenu = (item:Menu) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="">{item.name}</td>
            <td className="">
            <ul>
                {item.content.map((c, index) => (
                    <li key={index} className="text-xs">
                        {c.component} - {c.weight} ({c.calory})
                    </li>
                ))}
            </ul>
        </td>
            <td className="">{item.netcalory}</td>
        </tr>
    )

    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Daftar Menu</h1>
                <a href="/laporan">
                    <Image src="/plus.png" alt="" width={14} height={14} />
                </a>
            </div>
            <Table columns={columnsMenu} renderRow={renderRowMenu} data={menuData}/>
            {/* <div className="flex gap-4 mt-4">
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <p className="text-xl text-gray-400 mt-1 text-center">
                        20
                    </p>
                    <div className="flex items-center justify-between text-center">
                        <h2 className="font-medium">Laporan Sudah Submit</h2>
                    </div>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <p className="text-xl text-gray-400 mt-1 text-center">
                        1
                    </p>
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-center">Laporan Belum Submit</h2>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MenuList
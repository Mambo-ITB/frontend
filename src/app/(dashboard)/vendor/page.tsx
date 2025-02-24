import Image from "next/image";
import Announcements from "@/components/Announcements";
import VendorStats from "@/components/VendorStats";
import VendorTracking from "@/components/VendorTracking";
import MenuList from "@/components/MenuList";
import { deliveryData } from "@/lib/dataPengiriman";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import { transactionData } from "@/lib/dataTransaksi";

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

type Transaction = {
    id: number,
    tanggal: string,
    vendor: string,
    sekolah: string,
    pks: string,
    bast: string,
    bap: string,
    status: string,
}

const columnsDelivery = [
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
    }
]

const columnsTransaction = [
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
        header: "File PKS", 
        accessor: "pks", 
        className: "hidden md:table-cell"
    },
    {
        header: "File BAST", 
        accessor: "bast", 
        className: "hidden md:table-cell"
    },
    {
        header: "File BAP", 
        accessor: "bap", 
        className: "hidden md:table-cell"
    },
    {
        header: "Status", 
        accessor: "status", 
        className: "hidden md:table-cell"
    }
]

const VendorPage = () => {
    const renderRowDelivery = (item:Delivery) => (
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
        </tr>
    )

    const renderRowTransaction = (item:Transaction) => (
        <tr 
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="">{item.tanggal}</td>
            <td className="">{item.sekolah}</td>
            <td className="hidden md:table-cell py-2"><a href="#">{item.pks}</a></td>
            <td className="hidden md:table-cell py-2"><a href="#">{item.bast}</a></td>
            <td className="hidden md:table-cell"><a href="#">{item.bap}</a></td>
            <td className="hidden md:table-cell">{item.status}</td>
        </tr>
    )

    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-l font-semibold">
                                {/* {teacher.name + " " + teacher.surname} */}
                                Dapur Kodam III Siliwangi
                                </h1>
                                {/* {role === "admin" && (
                                <FormContainer table="teacher" type="update" data={teacher} />
                                )} */}
                            </div>
                            {/* <p className="text-sm text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p> */}
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/home.png" alt="" width={14} height={14} />
                                    {/* <span>{teacher.bloodType}</span> */}
                                    <span>Jl. Aceh No.69, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40113</span>
                                </div>
                                {/* <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/assignment.png" alt="" width={14} height={14} />
                                    <span>
                                    20219337
                                        {new Intl.DateTimeFormat("en-GB").format(teacher.birthday)}
                                    </span>
                                </div> */}
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    {/* <span>{teacher.phone || "-"}</span> */}
                                    (022) 4230798
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/profile.png" alt="" width={14} height={14} />
                                    {/* <span>{teacher.phone || "-"}</span> */}
                                    Praka Satria Mandala
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        <VendorStats />
                    </div>
                </div>
                
                {/* MIDDLE CHARTS */}
                <div className="mt-4 bg-white rounded-md p-4">
                    <h1 className="hidden md:block text-lg font-semibold">Riwayat Pengiriman</h1>
                    {/* List */}
                    <Table columns={columnsDelivery} renderRow={renderRowDelivery} data={deliveryData}/>
                    {/* Pagination */}
                    {/* <Pagination /> */}
                </div>

                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4">
                <h1 className="hidden md:block text-lg font-semibold">Status Pembayaran</h1>
                    {/* List */}
                    <Table columns={columnsTransaction} renderRow={renderRowTransaction} data={transactionData}/>
                    {/* Pagination */}
                    {/* <Pagination /> */}
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <VendorTracking />
                </div>
                <div className="bg-white p-4 rounded-md">
                    <MenuList />
                </div>
                <div className="bg-white p-4 rounded-md">
                    <Announcements/>
                </div>
            </div>
        </div>
    )
}

export default VendorPage;
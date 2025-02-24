import Image from "next/image"

const Tracking = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Status Pengiriman</h1>
                <a href="/pelacakan" className="cursor-pointer">
                    <Image src="/search.png" alt="" width={14} height={14} />
                </a>
            </div>
            <div className="flex flex-col gap-4 mt-4 grow">
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <h2 className="text-xl text-gray-400 mt-1 text-center uppercase">
                        Tidak ada pengiriman yang sedang berlangsung
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Tracking
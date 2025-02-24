import Image from "next/image"

const AccountVerifSum = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Status Verifikasi Akun</h1>
                <a href="/laporan">
                    <Image src="/plus.png" alt="" width={14} height={14} />
                </a>
            </div>
            <div className="flex gap-4 mt-4">
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <p className="text-xl text-gray-400 mt-1 text-center">
                        9
                    </p>
                    <div className="flex items-center justify-between text-center">
                        <h2 className="font-medium">Akun Terverifikasi</h2>
                    </div>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <p className="text-xl text-gray-400 mt-1 text-center">
                        2
                    </p>
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-center">Akun Belum Terverifikasi</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountVerifSum
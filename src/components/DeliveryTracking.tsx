'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const DeliveryTracking = () => {
    const [delivery, setDelivery] = useState("standby")

    return (
        <div className="bg-white p-4 rounded-md flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Status Pengiriman</h1>
            </div>
            <div className="flex flex-col gap-4 mt-4 p-5 grow border-4 border-dashed">
                {delivery === "standby" ? (
                    <>
                        <div className="bg-lamaSkyLight rounded-md p-4 flex flex-col">
                            <h2 className="text-xl text-gray-400 mt-1 text-center uppercase">
                                Tidak ada pengiriman berlangsung
                            </h2>
                        </div>
                        <button 
                            className="p-1 m-4 w-1/2 self-center rounded-md bg-lamaSky hover:bg-lamaPurple"
                            onClick={() => setDelivery("inProgress")}
                        >
                            Mulai Pengiriman
                        </button>
                    </>
                ) : delivery === "inProgress" ? (
                    <>
                        <div className="bg-lamaSkyLight rounded-md p-4 flex flex-col">
                            <h2 className="text-xl text-gray-400 mt-1 text-center uppercase">
                                Sedang Dalam Perjalanan
                            </h2>
                        </div>
                        <button 
                            className="p-1 m-4 w-1/2 self-center rounded-md bg-lamaSky hover:bg-lamaPurple"
                            onClick={() => setDelivery("done")}    
                        >
                            Sampai Tujuan
                        </button>
                    </>
                ) : (
                    <>
                        <div className="bg-lamaSkyLight rounded-md p-4 flex flex-col">
                            <h2 className="text-xl text-gray-400 mt-1 text-center uppercase">
                                Sampai Tujuan Pengiriman
                            </h2>
                        </div>
                        <button 
                            className="p-1 m-4 w-1/2 self-center rounded-md bg-lamaSky hover:bg-lamaPurple"
                            onClick={() => setDelivery("standby")}
                        >
                            Selesai
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default DeliveryTracking
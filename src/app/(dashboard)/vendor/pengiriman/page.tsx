'use client'

import DeliveryTracking from "@/components/DeliveryTracking"
import DeliveryData from "@/components/DeliveryData"
import { useMemo } from "react";
import dynamic from 'next/dynamic';

const PengirimanPage = () => {
    const Map = useMemo(() => dynamic(
            () => import('@/components/Map'),
            { 
              loading: () => <p>A map is loading</p>,
              ssr: false
            }
          ), [])

    return (
        <div className="lex-1 p-4 flex flex-col gap-4 xl:flex-row">
            <div className="w-full xl:w-2/3 bg-white rounded-md p-4 h-[500px]">
                <h2 className="text-xl font-bold">Lacak Posisi Pengiriman</h2>
                <div className="w-full bg-white rounded-md p-4 h-[500px]">
                    <Map posix={[-6.914744, 107.609810]} />
                </div>
            </div>
            <div className="w-full xl:w-1/3 flex flex-col">
                <div className="bg-white p-4 rounded-md">
                    <DeliveryTracking />
                </div>
                <div className="bg-white mt-4 p-4 rounded-md">
                    <DeliveryData />
                </div>
            </div>
        </div>
    )
}

export default PengirimanPage
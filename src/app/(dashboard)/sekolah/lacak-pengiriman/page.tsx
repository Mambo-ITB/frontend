import Tracking from "@/components/Tracking"
import DeliveryData from "@/components/DeliveryData"

const PelacakanPage = () => {
    return (
        <div className="lex-1 p-4 flex flex-col gap-4 xl:flex-row">
            <div className="w-full xl:w-2/3 bg-white rounded-md p-4 h-[500px]">
                    
            </div>
            <div className="w-full xl:w-1/3 flex flex-col">
                <div className="bg-white p-4 rounded-md">
                    <Tracking />
                </div>
                <div className="bg-white mt-4 p-4 rounded-md">
                    <DeliveryData />
                </div>
            </div>
        </div>
    )
}

export default PelacakanPage
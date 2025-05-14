import { useContext } from "react"
import { DataContext } from "./DataContext"
function CityCard({icon,address,currTime,temp}){
    return(
        <>
        <div className="flex justify-between items-center">
            <img className="w-10 h-10" src={`.../../public/${icon}.png`} alt="icon" />
            <div className="flex justify-between">
                <p className="flex flex-col">
                    <span className="font-bold text-white">{address}</span>
                    <span className="text-gray-400 text-[0.7rem]">{currTime}</span>
                </p>
                <p className="text-white font-bold">{temp}°</p>
            </div>
        </div>
        </>
    )
}
function CityCardList(){
    const {data,error,loading}=useContext(DataContext)
    return(
        <>
        
        </>
    )
}
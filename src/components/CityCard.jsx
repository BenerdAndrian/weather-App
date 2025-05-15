import { useContext } from "react"
import { DataContext } from "./DataContext"
function CityCard({icon,address,currTime,temp}){
    return(
        <>
        <div className="flex justify-between bg-[rgb(30,40,55)] p-5 px-8 rounded-3xl mb-5">
            <div className="flex items-center">
            <img className="hidden md:block md:w-20 md:h-20 mr-8 " src={`.../../public/${icon}.png`} alt="icon" />
             <p className="flex flex-col gap-3">
                    <span className="font-bold text-white text-[1.2rem]">{address}</span>
                    <span className="text-gray-400 text-[0.7rem] font-bold">{currTime}</span>
            </p>
            </div>
            <p className="text-white font-bold text-[1.5rem]">{temp}°</p>
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
export{CityCard}
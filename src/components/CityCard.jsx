import { useContext, useState } from "react"
import { DataContext } from "./DataContext"
import locationArrow from '../assets/img/locationArrow.svg'
import closeIcon from '../assets/img/closeIconn.svg'
function CityCard({icon,address,currTime,temp}){
    const [isHover,setIsHover]=useState(false)
    return(
        <div className="flex gap-3 group">
        {/* Primary Element */}
        <div className="flex justify-between bg-[rgb(30,40,55)] p-5 px-8 rounded-3xl mb-5 border hover:border-blue-500 w-full transition-[width] duration-700 ease-in-out group-hover:w-90">
          <div className="flex items-center">
            <img className="hidden md:block md:w-20 md:h-20 mr-8" src={`.../../public/${icon}.png`} alt="icon" />
            <p className="flex flex-col gap-3">
              <span className="font-bold text-white text-[1.2rem] flex items-center">
                <span>{address.toUpperCase()}</span>
                <img className="w-4 h-4 ml-5" src={locationArrow} alt="arrow icon" />
              </span>
              <span className="text-gray-400 text-[0.7rem] font-bold">{currTime}</span>
            </p>
          </div>
          <p className="text-white font-bold text-[1.5rem]">{temp}°</p>
        </div>
      
        {/* Secondary Element */}
        <div className="bg-red-600 flex items-center justify-center rounded-2xl h-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-30 group-hover:h-30 group-hover:opacity-100">
          <img className="w-6 h-6" src={closeIcon} alt="close icon" />
        </div>
      </div>
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
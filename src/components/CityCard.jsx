import { useContext, useState } from "react"
import { DataContext } from "./DataContext"
import locationArrow from '../assets/img/locationArrow.svg'
import closeIcon from '../assets/img/closeIconn.svg'
function CityCard({icon,address,currTime,temp,deleteCity,mode}){
    const [isHover,setIsHover]=useState(false)
    const search=(address)=>{
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(address)}`;
    window.open(searchUrl,'_blank')
    }
    return(
        <div className="flex gap-3 group">
        {/* Primary Element */}
        <div className={`flex justify-between bg-[rgb(30,40,55)] p-5 px-8 rounded-3xl mb-5 border${mode==='trans' && 'hover:border-blue-500 transition-[width] duration-700 ease-in-out'}  w-full`}>
          <div className="flex items-center">
            <img className="hidden md:block md:w-20 md:h-20 mr-8" src={`/${icon}.png`} alt="icon" />
            <p className="flex flex-col gap-3">
              <span className="font-bold text-white text-[1.2rem] flex items-center">
                <span>{address.toUpperCase()}</span>
                <img onClick={()=>search(address)} className="w-4 h-4 ml-5 hover:w-6 hover:h-6 cursor-pointer" src={locationArrow} alt="arrow icon" />
              </span>
              <span className="text-gray-400 text-[0.7rem] font-bold">{currTime}</span>
            </p>
          </div>
          <p className="text-white font-bold text-[1.5rem]">{temp}°</p>
        </div>
      
        {/* Secondary Element */}
       {mode==='trans' && <div onClick={deleteCity} className="bg-orange-600 cursor-pointer flex items-center justify-center rounded-2xl h-0 w-0 opacity-0 transition-[width,opacity] duration-700 ease-in-out group-hover:w-40 group-hover:h-30 group-hover:opacity-75">
          <img className="w-6 h-6 hidden group-hover:block" src={closeIcon} alt="close icon" />
        </div> }
      </div>
    )
}

export{CityCard}
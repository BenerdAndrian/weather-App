import { TodayForecastSection,TodayTempMain,SevendayForecastSection,AirConditionSection } from "./Weather.jsx"
import { DataContext } from "./DataContext"
import { useContext } from "react"
import { NavbarSection } from "./Navbar"
import backIcon from '../assets/img/back.svg'
import { useNavigate } from "react-router-dom"
export default function AirConditionDetailPage(){
    const navigate=useNavigate()
    const {data,error,loading}=useContext(DataContext)
    const targetHours=['06',"09","12"]
    return(
        <>
        <div className="bg-black grid grid-cols-[80px_1.5fr_1fr] grid-rows-[40px_1fr_1fr_1fr] gap-3">
         <NavbarSection/>
         <div className="grid col-start-2 col-end-3 row-start-1 row-end-5">
            <div className="row-start-1 row-end-2 flex">
             <img className="h-5 w-5 cursor-pointer" onClick={()=>navigate("/Weather")} src={backIcon} alt="back icon" />
             <h1 className="font-bold text-gray-400">Air Conditions</h1>
            </div>
             <div className="row-start-2 row-end-3">
             <TodayTempMain data={data}/>
             </div>
             <div className="row-start-3 row-end-5">
                <AirConditionSection data={data} num={8}/>
             </div>
         </div>
         <div className="grid col-start-3 col-end-4 row-start-2 row-end-5">
            <div className="row-start-2 row-end-3">
            <TodayForecastSection targetHours={targetHours} data={data}/>
            </div>
            <div className="row-start-3 row-end-5">
            <SevendayForecastSection data={data} numOfDays={7}/>
            </div>
         </div>
        </div>
        </>
    )
}
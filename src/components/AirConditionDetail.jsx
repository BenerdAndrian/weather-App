import { TodayForecastSection,TodayTempMain,SevendayForecastSection,AirConditionSection } from "./Weather.jsx"
import { DataContext } from "./DataContext"
import { useContext } from "react"
import { NavbarSection } from "./Navbar"
import backIcon from '../assets/img/back.svg'
import { useNavigate } from "react-router-dom"
export default function AirConditionDetailPage(){
    const navigate=useNavigate()
    const {singleCityData,singleCityError,singleCityLoading}=useContext(DataContext)
    const targetHours=['06',"09","12"]
    return(
        <>
        <div className="bg-black md:grid md:grid-cols-[1.5fr_1fr] md:grid-rows-[40px_1fr_1fr_1fr] gap-3 px-5">
         <div className="grid md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-5">
            <div className="md:row-start-1 md:row-end-2 flex text-center mb-3 ml-5">
             <img className="h-5 w-5 cursor-pointer" onClick={()=>navigate("/Weather")} src={backIcon} alt="back icon" />
             <h1 className="font-bold text-gray-400 w-full text-center">Air Conditions</h1>
            </div>
             <div className="md:row-start-2 md:row-end-3 md:ml-[3rem] mt-7">
             <TodayTempMain data={singleCityData}/>
             </div>
             <div className="md:row-start-3 md:row-end-5 mt-2">
                <AirConditionSection data={singleCityData} mode={'card'}/>
             </div>
         </div>
         <div className="grid md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-5 -mt-[2rem]">
            <div className="md:row-start-2 md:row-end-3 mb-3">
            <TodayForecastSection targetHours={targetHours} data={singleCityData}/>
            </div>
            <div className="md:row-start-3 md:row-end-5">
            <SevendayForecastSection data={singleCityData} numOfDays={5}/>
            </div>
         </div>
        </div>
        </>
    )
}
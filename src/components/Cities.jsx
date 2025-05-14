import { useContext } from "react";
import { SearchedCities } from "./SearchedCities";
import { SevendayForecastSection, TodayForecastSection, TodayTempMain } from "./Weather";
import { DataContext } from "./DataContext";
import { NavbarSection } from "./Navbar";
import { InputSection } from "./Input";
 export default function CitiesPage(){
    const {singleCityData,singleCityError,singleCityLoading}=useContext(DataContext)
    return(
        <>
        <div className="md:grid md:grid-cols-[80px_1.5fr_1fr] pb-[5rem] md:grid-rows-[40px_1fr_1fr_1fr] md:pb-[0.8rem] bg-black gap-4 py-3 px-5">
        <NavbarSection/>
        <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-5">
        <InputSection/>
        <SearchedCities/>
        </div>
        <div className="md:row-start-2 row-end-5">
        <TodayTempMain data={singleCityData}/>
        <TodayForecastSection targetHours={['06','09','12']} data={singleCityData}/>
        <SevendayForecastSection numOfDays={3} data={singleCityData}/>
        </div>
        
        </div>
        </>
    )
}
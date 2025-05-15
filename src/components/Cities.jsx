import { useContext } from "react";
import { SearchedCities } from "./SearchedCities";
import { SevendayForecastSection, TodayForecastSection, TodayTempMain } from "./Weather";
import { DataContext } from "./DataContext";
import { NavbarSection } from "./Navbar";
import { InputSection } from "./Input";
import { ErrorPage } from "./ErrorPage";
import { LoadingPage } from "./LoadingPage";
import { useState,useEffect } from "react";
 export default function CitiesPage(){
    const {singleCityData,singleCityError,singleCityLoading,setSingleCityError}=useContext(DataContext)
    const [showError,setShowError]=useState(false);
    const changeErrorStatus=()=>{
        setShowError(false)
        setSingleCityError(false)
    }
    useEffect(()=>{
     if(singleCityError){
        setShowError(true)
     }
    },[singleCityError])
    return(
        <>
        {showError && <ErrorPage handleStatus={changeErrorStatus}/>}
        {singleCityLoading && <LoadingPage/>}
        <div className="md:grid md:grid-cols-[1.5fr_1fr] pb-2 md:grid-rows-[40px_1fr_1fr_1fr] bg-black px-5">
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
        <InputSection/>
        </div>
        <div className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-5 mt-5">
        <SearchedCities/>
        </div>
        <div className="md:col-start-2 md:col-end-3 md:row-start-2 row-end-4 md:ml-[2rem]">
         <TodayTempMain data={singleCityData}/>
         <div className="mb-4">
         <TodayForecastSection targetHours={['06','09','12']} data={singleCityData}/>
         </div>

        </div>
        <div className="-mt-[1.45rem] md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5 md:ml-[2rem]">
        <SevendayForecastSection numOfDays={3} data={singleCityData}/>
        </div>
        </div>
        </>
    )
}
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { CityCard } from "./CityCard";
function SearchedCities(mode){
    const {localData,setCityList,cityList}=useContext(DataContext);
    //take data from locastorage
    console.log('local: ',localData)
    const currentTime=(epochTime)=>{
     const date=new Date(epochTime*1000);
     const localTime=date.toLocaleDateString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
     return localTime;
    }
    const deleteCity=(index)=>{
      console.log('index: ',index)
      const updatedList=[...cityList];
      updatedList.splice(index,1)
      setCityList(updatedList)
    }
    return(
        <>
         <ul className="flex flex-col overflow-scroll md:h-[calc(31rem+8px)]">
        
         {localData.locations && localData.locations.map((location,index)=>(
           <li>
           <CityCard mode={mode} deleteCity={()=>deleteCity(index)} icon={location.days[0].icon} address={location.address} currTime={currentTime(location.days[0].datetimeEpoch)} temp={location.days[0].temp}/>
           </li> 
         ))}
         {!localData.locations && <li> <CityCard mode={mode} icon={localData.days[0].icon} address={localData.address} currTime={currentTime(localData.days[0].datetimeEpoch)} temp={localData.days[0].temp}/> </li>}
         </ul>
        
        </>
    )
}
export {SearchedCities}
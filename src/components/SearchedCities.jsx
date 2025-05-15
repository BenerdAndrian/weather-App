import { useContext } from "react";
import { DataContext } from "./DataContext";
import { CityCard } from "./CityCard";
function SearchedCities(){
    const {data,error,loading,setCityList,cityList}=useContext(DataContext);
    console.log(data)
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
         <ul className="flex flex-col">
         {data.locations && data.locations.map((location,index)=>(
           <li>
           <CityCard deleteCity={()=>deleteCity(index)} icon={location.days[0].icon} address={location.address} currTime={currentTime(location.days[0].datetimeEpoch)} temp={location.days[0].temp}/>
           </li> 
         ))}
         {!data.locations && <li> <CityCard icon={data.days[0].icon} address={data.address} currTime={currentTime(data.days[0].datetimeEpoch)} temp={data.days[0].temp}/> </li>}
         </ul>
        
        </>
    )
}
export {SearchedCities}
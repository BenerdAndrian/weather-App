import { useFetchAPI, useFetchAPIForFixedCity } from "./FetchAPI.jsx";
import { createContext,useEffect,useState } from "react";
export const DataContext=createContext(null);
export const DataProvider=({children})=>{
   const [city,setCity]=useState('Saigon')
   const [cityList,setCityList]=useState([]);
   const {
    data: singleCityData,
    error: singleCityError,
    loading: singleCityLoading
  } = useFetchAPIForFixedCity(city);
   useEffect(()=>{
    setCityList(prev=>{
        if(prev.includes(city)) return prev;
        return [city,...prev]
    })
   },[city])
   const {data,error,loading}=useFetchAPI(cityList);
   return (
    <DataContext.Provider value={{data,error,loading,city,setCity,cityList,singleCityData,singleCityError,singleCityLoading}}>
        {children}
    </DataContext.Provider>
   )
}

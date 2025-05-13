import { useFetchAPI } from "./FetchAPI.jsx";
import { createContext,useState } from "react";
export const DataContext=createContext(null);
export const DataProvider=({children})=>{
   const [city,setCity]=useState('Saigon')
   const {data,error,loading}=useFetchAPI(city);
   return (
    <DataContext.Provider value={{data,error,loading,city,setCity}}>
        {children}
    </DataContext.Provider>
   )
}

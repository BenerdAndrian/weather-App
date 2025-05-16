import { useState,useEffect } from "react";
import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";
import { useContext } from "react";
import { DataContext } from "./DataContext";
//fetch a specific city

//key1: 8X75BGGT4LLBSPXFWXFRKL4KJ
//key2: R9Y3JEJJBA9SFRHKD32F92GMQ

function useFetchAPIForFixedCity(city){
   const [data,setData]=useState(null);
   const [error,setError]=useState(false);
   const [loading,setLoading]=useState(true);
   useEffect(()=>{
   setLoading(true);
   setError(false);
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=8X75BGGT4LLBSPXFWXFRKL4KJ&contentType=json`)
   .then(response=>{
    if(!response.ok){
      throw new Error('server error');
    }
    return response.json();
   })
   .then(data=>{
    setData(data);
   })
   .catch(error=>{
    setError(true)
   })
   .finally(()=>{
    setLoading(false)
   })
   },[city])
   return{data,error,loading,setError}
}
//fetch multiple location
function useFetchAPI(){
  
  const [data,setData]=useState({});
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(true);
  const FetchData=async (cityList)=>{
   if(cityList.length===0 || !cityList) return;
   setLoading(true);
   setError(false);
   try{
    const response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=8X75BGGT4LLBSPXFWXFRKL4KJ&locations=${encodeURIComponent(cityList.join('|'))}&unitGroup=us&contentType=json`)
    if(!response.ok) throw new Error;
    const result=await response.json()
    setData(result)
   } catch(err){
    setError(true)
   }
   finally{
    setLoading(false)
   }
  }
  return {FetchData,data,error,loading,setError};
}
export {useFetchAPI,useFetchAPIForFixedCity}
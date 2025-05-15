import { useState,useEffect } from "react";
import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";
import { useContext } from "react";
import { DataContext } from "./DataContext";
//fetch a specific city
function useFetchAPIForFixedCity(city){
   const [data,setData]=useState();
   const [error,setError]=useState(false);
   const [loading,setLoading]=useState(true);
   useEffect(()=>{
   setLoading(true);
   setError(false);
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=R9Y3JEJJBA9SFRHKD32F92GMQ&contentType=json`)
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
function useFetchAPI(cityList){
  const [data,setData]=useState({});
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(true);
    if (!cityList || cityList.length === 0) return;
    setError(false);
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=R9Y3JEJJBA9SFRHKD32F92GMQ&locations=${encodeURIComponent(cityList.join('|'))}&unitGroup=metric&contentType=json`)
    .then(response=>{
      if(!response.ok) throw new Error('No data')
      else{
        return response.json();
      }
    })
    .then(data=>{
      setData(data)
    })
    .catch(error=>{
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[cityList])
  
  return {data,error,loading,setError};
}
export {useFetchAPI,useFetchAPIForFixedCity}
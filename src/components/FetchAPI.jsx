import { useState,useEffect } from "react";
import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";


function useFetchAPI(city){
  const [data,setData]=useState(null);
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(true);
    setError(false);
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=R9Y3JEJJBA9SFRHKD32F92GMQ&contentType=json`)
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
  },[city])
  
  return {data,error,loading};
}
export {useFetchAPI}
import { useFetchAPI } from "./FetchAPI.jsx";
import { InputSection } from "./Input";
import { useState,useEffect,useContext } from "react";
import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";
import { NavbarSection } from "./Navbar.jsx";
import { AirInfoBoard,AirInfoCard } from "./InfoCard.jsx";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";
//importing images
import tempIcon from '../assets/img/temp.svg'
import sunIcon from '../assets/img/uvIndex.svg'
import windIcon from '../assets/img/wind.svg'
import waterDrop from '../assets/img/waterDrop.svg'
import visibility from '../assets/img/visibility.svg'
import sunset from '../assets/img/sunset.svg'
import shower from '../assets/img/shower.svg'
import pressure from '../assets/img/pressure.svg'
// Weather section component which serve as parent component for the main Weather UI page
export default function WeatherSection(){
 const [showError,setShowError]=useState(false)
 const {localData,data,error,loading,singleCityData,singleCityError,singleCityLoading,setError,setSingleCityError}=useContext(DataContext)
 // prepare the array of target hours for the TodayForecast component to render dynamically
 const targetHours = ['06', '09', '12', '15', '18', '21'];
 console.log(data)
 // receiving props passing from the child by lifting state up.
 const changeErrorStatus=()=>{
     setShowError(false)
     setSingleCityError(false);
 }
  useEffect(()=>{
   if(singleCityError){
    setShowError(true)
   }
  },[singleCityError])
 //render jsx
 return(
    <>
    {showError && <ErrorPage handleStatus={changeErrorStatus}/>}
    {/* if it still fetching the data,we show the LoadingPage component */}
    {singleCityLoading && <LoadingPage/>}
    <div className="md:grid md:grid-cols-[1.5fr_1fr] md:grid-rows-[40px_1fr_1fr_1fr] bg-black gap-4 px-5">
    <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-5">
    <InputSection/>
    <div className="md:ml-[3rem]">
    <TodayTempMain data={localData}/>
    </div>
   
    <TodayForecastSection data={singleCityData} targetHours={targetHours}/>
    <AirConditionSection data={singleCityData} mode={'board'}/>
    </div>
    <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-5">
    <SevendayForecastSection data={singleCityData} numOfDays={7}/>
    </div>
    </div>
    </>
 )
}
// component to render city name and temperature,icon
function TodayTempMain({data}){
  //if there is no data, return null
  if(!data) return null;
   return(
    <div className="grid grid-cols-2 bg-black">
        <div className="grid grid-rows-2">
          <div>
          <p className="font-bold text-white text-[1.5rem]">{data?.address || data?.locations?.[0].address}</p>
          <p className="text-gray-400">Chance Of Rain: {data?.currentConditions?.precipprob || data?.days?.[0].precipprob || data?.locations?.[0].days?.[0].precipprob}%</p>
          </div>
          <p className="font-bold text-white text-[1.6rem] mt-5">{data?.currentConditions?.temp|| data?.days?.[0].temp || data?.locations?.[0].days?.[0].precipprob}°</p>
        </div>
        <img className="w-25 h-25 md:w-30 md:h-30 ml-[2rem] md:ml-[4rem]" src={`../../public/${data?.currentConditions?.icon || data?.days?.[0].icon || data?.locations?.[0].days?.[0].icon}.png`}alt="Weather icon" />
    </div>
   )
}
// component to render timeframe forecast in today which render at fixed hours
function TodayForecastSection({targetHours=[],data}){
   //if there is no data, return null
  if(!data) return null;
  // finding the data of the targetHours,we're using split and take at index 0 because the data datetime has format as 06:00:00...
  const hours = data.days[0].hours.filter((hour) => {
    return targetHours.includes(hour.datetime.split(':')[0]);
  });
  // render jsx
  return(
  <>
  <div className="bg-[rgb(30,40,55)] rounded-2xl pt-3 mt-3 px-3">
  <h2 className="text-[lightgray] font-bold ml-[2rem] text-[0.7rem]">TODAY'S FORECAST</h2>
  <ul className="grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] p-2">
    {hours.map((hour)=>(
       <li className="flex flex-col items-center justify-center border-r-1 border-r-gray-300 last:border-r-0 text-[0.6rem]">
       <p className="text-[lightgray] mb-2 text-[0.8rem]">{hour.datetime.split(':')[0]}:00</p>
       <img className="w-8 h-8" src={`../../public/${hour.icon}.png`} alt="Weather icon" />
       <p className="font-bold text-white mt-2 pb-2 text-[0.95rem]">{hour.temp}°</p>
       </li>
    ))}
  </ul>
  </div>
  </>
 )
}
//componenent to render air condition information at the time
function AirConditionSection({data,mode}){
  const navigate=useNavigate();
   //if there is no data, return null
  if(!data) return null;
  //organize info into an array so that we can loop through it and render desired info,the array stores the title,image and info
  const categories=[
    {
      name:'Real Feel',
      image: tempIcon,
      info:data.currentConditions.feelslike+'°',
    },
    {
      name:'Wind',
      image:windIcon,
      info:data.currentConditions.windspeed,
    },
    {
      name:'Chance Of Rain',
      image:waterDrop,
      info:data.currentConditions.precipprob+'%',
    },
    {
      name:'UV Index',
      image:sunIcon,
      info:data.currentConditions.uvindex
    },
    {
      name:'Humidity',
      image:shower,
      info:data.currentConditions.humidity
    },
    {
      name:'Visibility',
      image:visibility,
      info:data.currentConditions.visibility
    },
    {
      name:'Pressure',
      image:pressure,
      info:data.currentConditions.pressure
    },
    {
      name:"Sunset",
      image:sunset,
      info:data.currentConditions.sunset
    }
  ]
  //render jsx
  return(
    <>
    {mode==='board' && <AirInfoBoard categories={categories} num={4}/>}
    {mode==='card' && <AirInfoCard categories={categories} num={8}/>}
    </>
  )
}
function SevendayForecastSection({data,numOfDays=0}){
  if(!data) return null;
  // take 7 days only
const days=data.days.slice(0,numOfDays);
// change from the dd/mm/yyyy format into weekday format
const extractWeekDay=(datetime)=>{
  const date=new Date(datetime);
  const options = { weekday: 'short' }; // e.g., "Mon"
  const weekday = date.toLocaleDateString('en-US', options);
  return weekday;
}
// for the name longer than one word, the data will include hyphen "-",replacing '-' with space will make it cleaner.
  const discardHyphen = (string) => {
    return string.replace(/-/g, ' ');
  };
  //render jsx
return(
  <>
  <div className="mt-[1rem] h-full md:mt-0 bg-[rgb(30,40,55)] rounded-2xl pt-4 px-[2rem]">
    <h2 className="text-[lightgray] font-bold text-[0.7rem]">7-DAY FORECAST</h2>
    <ul className="flex flex-col justify-between gap-3 mt-2 h-full">
      {days.map((day)=>(
        <li className="flex py-3 justify-between items-center border-b-1 border-b-[rgb(60,60,80)] last:border-b-0 last:pb-8 -mt-[1rem] h-full">
         <p className="text-[lightgray] text-[0.7rem] font-bold">{extractWeekDay(day.datetime)}</p>
         <div className="flex items-center h-[2.5rem]">
          <img className="w-8 h-8 mr-2" src={`../../public/${day.icon}.png`} alt="img" />
          <p className="text-white font-bold text-[0.8rem] w-10">{discardHyphen(day.icon)}</p>
         </div>
         <p className="text-white text-[0.7rem] font-bold">{day.datetime}</p>
        </li>
      ))}
    </ul>
  </div>
  </>
)
}
export {TodayForecastSection,TodayTempMain,AirConditionSection,SevendayForecastSection}
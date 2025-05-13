import { useFetchAPI } from "./FetchAPI.jsx";
import { InputSection } from "./Input";
import { useState,useEffect,useContext } from "react";
import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";
import { NavbarSection } from "./Navbar.jsx";
import { AirInfoCard } from "./InfoCard.jsx";
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
 const {data,error,loading}=useContext(DataContext)
 // prepare the array of target hours for the TodayForecast component to render dynamically
 const targetHours = ['06', '09', '12', '15', '18', '21'];
 // receiving props passing from the child by lifting state up.
 const changeErrorStatus=()=>{
     setShowError(false)
 }
  useEffect(()=>{
   if(error){
    setShowError(true)
   }
  },[error])
 //render jsx
 return(
    <>
    {showError && <ErrorPage handleStatus={changeErrorStatus}/>}
    {/* if it still fetching the data,we show the LoadingPage component */}
    {loading && <LoadingPage/>}
    <div className="md:grid md:grid-cols-[80px_1.5fr_1fr] pb-[5rem] md:grid-rows-[40px_1fr_1fr_1fr] md:pb-[0.8rem] bg-black gap-3 py-3 px-5">
    <NavbarSection/>
    <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-5">
    <InputSection/>
    <TodayTempMain data={data}/>
    <TodayForecastSection data={data} targetHours={targetHours}/>
    <AirConditionSection data={data} num={4}/>
    </div>
    <SevendayForecastSection data={data} numOfDays={7}/>
    </div>
    </>
 )
}
// component to render city name and temperature,icon
function TodayTempMain({data}){
  //if there is no data, return null
  if(!data) return null;
   return(
    <div className="grid grid-cols-2 bg-black ml-[2rem]">
        <div className="grid grid-rows-2">
          <div className="my-5">
          <p className="font-bold text-white text-[1.4rem]">{data.address}</p>
          <p className="text-gray-400">Chance Of Rain: {data.currentConditions.precipprob}%</p>
          </div>
          <p className="font-bold text-white text-[1.4rem] mt-3">{data.currentConditions.temp}°</p>
        </div>
        <img className="w-20 h-20 md:w-25 md:h-25 mt-10 ml-[4rem]" src={`../../public/${data.currentConditions.icon}.png`}alt="Weather icon" />
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
  <div className="bg-[rgb(30,40,55)] rounded-2xl pt-4 -mt-8">
  <h2 className="text-[lightgray] font-bold ml-[2rem] text-[0.6rem]">TODAY'S FORECAST</h2>
  <ul className="grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] p-2 pb-5">
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
function AirConditionSection({data,num}){
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
    <div className="bg-[rgb(30,40,55)] rounded-2xl p-3 pr-[2rem] mt-2">
    <div className="flex justify-between">
    <h2 className="text-[lightgray] font-bold ml-[1rem] text-[0.6rem]">AIR CONDITIONS</h2>
    <button onClick={()=>navigate('/Weather/air-conditions')} className="bg-blue-600 text-white font-bold rounded-full text-[0.8rem] py-1 px-2 cursor-pointer">See More</button>
    </div>
    <ul className="grid grid-cols-2 py-1 pl-[2rem] gap-2">
  {/* looping through the array slice with the desired number limid of cards */}
    {categories.slice(0,num).map((category)=>(
      <li>
        <AirInfoCard image={category.image} data={category.info} title={category.name}/>
      </li>
    ))}
    </ul>
   
    </div>

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
  <div className="mt-[1rem] md:mt-0 bg-[rgb(30,40,55)] rounded-2xl col-start-3 col-end-4 row-start-2 row-end-5 p-3">
    <h2 className="text-[lightgray] font-bold text-[0.6rem]">7-DAY FORECAST</h2>
    <ul className="flex flex-col justify-between gap-5 mt-4">
      {days.map((day)=>(
        <li className="flex justify-between items-center border-b-1 border-b-gray-300 last:border-b-0 pb-1">
         <p className="text-[lightgray] text-[0.7rem]">{extractWeekDay(day.datetime)}</p>
         <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src={`../../public/${day.icon}.png`} alt="img" />
          <p className="text-white font-bold text-[0.6rem] w-10">{discardHyphen(day.icon)}</p>
         </div>
         <p className="text-white text-[0.7rem]">{day.datetime}</p>
        </li>
      ))}
    </ul>
  </div>
  </>
)
}
export {TodayForecastSection,TodayTempMain,AirConditionSection,SevendayForecastSection}
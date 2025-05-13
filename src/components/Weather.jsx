//importing images
import tempIcon from '../assets/img/temp.svg'
import sunIcon from '../assets/img/uvIndex.svg'
import windIcon from '../assets/img/wind.svg'
import waterDrop from '../assets/img/waterDrop.svg'
import visibility from '../assets/img/visibility.svg'
import sunset from '../assets/img/sunset.svg'
import shower from '../assets/img/shower.svg'
import pressure from '../assets/img/pressure.svg'
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
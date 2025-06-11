import UnitSettingBoard from "./unitSetting";
import settingIcon from '../assets/img/settings.svg'
import { NotificationBoard } from "./generalSetting";
import { SignUp,PremiumBoard } from "./premiumBoard";
export default function SettingPage(){
    const unitArr=[
        {
            name: 'Temperature',
            units:['Celcius','Farenheit']
        },
        {
            name:'Wind',
            units:['km/h','m/s','knots']
        },
        {
            name:'Pressure',
            units:['Hpa','Inches','Kpa','Mm']
        },
        {
            name:'Precipitation',
            units:['Milimeters','Inches']
        },
        {
            name:'Distance',
            units:['Kilometers','Meters']
        }
    ]
    return (
        <>
        <div className="md:grid md:grid-cols-[1.5fr_1fr] md:grid-rows-[40px_1fr_1fr] gap-5">
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4">
           <div className="md:row-start-1 md:row-end-2 flex w-full text-white justify-center align-center gap-2">
               <img className="w-6 h-6" src={settingIcon} alt="setting icon" />
               <h1 className="font-bold text-[1.2rem]">Settings</h1>
           </div>
           <div className="md:row-start-2 md:row-end-3 ml-[2rem] mt-[2rem]">
           <p className="bold text-white font-bold">Units</p>
           <div className=" p-3 bg-[rgb(30,40,55)] rounded-3xl">
             <UnitSettingBoard unitArr={unitArr}/>
           </div>
           <div className="p-3 bg-[rgb(30,40,55)] rounded-3xl">
           <NotificationBoard/>
           </div>
           </div>
        </div>
        <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4">
         <div className="md:row-start-2 md:row-end-3 mb-5">
         <PremiumBoard/>
         </div>
         <div className="md:row-start-3 md:row-end-4">
         <SignUp/>
         </div>
        </div>
        </div>
        </>
    )
}
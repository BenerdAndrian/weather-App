import UnitSettingBoard from "./unitSetting";
import settingIcon from '../assets/img/settings.svg'
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
        <div className="md:grid md:grid-cols-[1.5fr_1fr] md:grid-rows-[40px_1fr_1fr]">
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4">
           <div className="md:row-start-1 md:row-end-2 flex w-full">
               <img className="w-5 h-5" src={settingIcon} alt="setting icon" />
               <h1>Settings</h1>
           </div>
           <div className="md:row-start-2 md:row-end-3">
             <UnitSettingBoard unitArr={unitArr}/>
           </div>
        </div>
        </div>
        </>
    )
}
import { useState,useContext } from "react";
import { DataContext } from "./DataContext";
function InputSection(){
    const [inputValue,setInputValue]=useState('');
    const {city,setCity}=useContext(DataContext)
    const handleKeyDown=(e)=>{
     if(e.key==='Enter'){
        setCity(inputValue)
     }
    }
    return(
        <>
         <input className="bg-[rgb(30,40,55)] text-white p-3 rounded-2xl w-full" onKeyDown={handleKeyDown} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="Search For A City" />
        </>

    )
}
export {InputSection}
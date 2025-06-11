import { useState } from "react"

export default function ButtonToggle(){
    const [open,setOpen]=useState(false)
    return(
        <>
        <div onClick={()=>setOpen(!open)} className={` relative rounded-2xl px-6 ${open?'bg-blue-600': 'bg-[rgb(30,40,55)] border-1 border-black'}`}>
        <div className={`bg-white w-4 h-4 rounded-full absolute top-1 ${open?'right-1':'left-1'} transition-all duration-300`}></div>
        </div>
        </>
    )
}
import { useState,useEffect } from "react"
// create loading page component to display while fetching data or anything like so.
function LoadingPage(){
    const [numberDots,setNumberDots]=useState(0);
    //this will set the numberDots each 500ms and render it to the UI
    useEffect(()=>{
     const interval=setInterval(()=>{
        setNumberDots((prev)=>prev<3?prev+1:0)
    },500)
     return ()=>{
        clearInterval(interval)
     }
    },[])
    return(
        <div className="bg-[rgb(30,40,55)] text-white absolute h-screen w-screen top-0 left-0 text-center flex justify-center items-center text-[1.5rem] font-bold z-99">
            <p>Fetching Data {".".repeat(numberDots)} </p>
        </div>
    )
}
export {LoadingPage}
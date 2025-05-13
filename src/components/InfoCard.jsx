import { useNavigate } from "react-router-dom"
function AirInfoBoard({categories=[],num}){
    const navigate=useNavigate()
    return(
        <>
    <div className="bg-[rgb(30,40,55)] rounded-2xl p-3 pr-[2rem] mt-3">
    <div className="flex justify-between">
    <h2 className="text-[lightgray] font-bold ml-[1rem] text-[0.7rem]">AIR CONDITIONS</h2>
    <button onClick={()=>navigate('/Weather/air-conditions')} className="bg-blue-600 text-white font-bold rounded-full text-[0.8rem] py-1 px-2 cursor-pointer">See More</button>
    </div>
    <ul className="grid grid-cols-2 py-1 pl-[2rem] gap-5">
  {/* looping through the array slice with the desired number limid of cards */}
    {categories.slice(0,num).map((category)=>(
      <li>
       <div className="flex text-[0.97rem] font-bold">
          <img className="w-5 h-5 mr-2" src={category.image} alt="image" />
          <p className="flex flex-col">
          <span className="font-bold text-[lightgray]">{category.name}</span>
          <span className="text-white">{category.info}</span>
          </p>
          </div>
        </li>
    ))}
    </ul>
   
    </div>
    </> 
    )
    }
function AirInfoCard({categories=[],num}){
    return(
       <>
       <div>
        <ul className="flex gap-3 flex-wrap">
         {categories.slice(0,num).map((category)=>(
            <li className="bg-[rgb(30,40,55)] basis-[calc(50%-0.5rem)] p-4 rounded-2xl">
                <div className="flex text-[0.97rem] font-bold">
                <img className="w-5 h-5 mr-4" src={category.image} alt="image" />
                <p className="flex flex-col">
                <span className="font-bold text-[lightgray]">{category.name}</span>
                <span className="text-white">{category.info}</span>
                </p>
                </div>
            </li>
         ))}
        </ul>
       </div>
       </>
    )
}
    export{AirInfoBoard,AirInfoCard}
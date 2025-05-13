
function AirInfoCard({image,title,data}){
    return(
        <>
         <div className="flex text-[0.97rem] font-bold">
          <img className="w-5 h-5 mr-2" src={image} alt="image" />
          <p className="flex flex-col">
          <span className="font-bold text-[lightgray]">{title}</span>
          <span className="text-white">{data}</span>
          </p>
          </div>
        </>
    )
    }
    export{AirInfoCard}
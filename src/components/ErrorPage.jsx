function ErrorPage({handleStatus}){
    return(
        <>
        <div className="bg-black fixed w-screen h-screen top-0 left-0 z-100">
        </div>
        <div className="bg-white text-[0.5rem] md:text-[1rem] fixed z-101 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5 rounded-2xl">
                <p className="font-bold text-center">The Weather App</p>
                <p className="text-center">You entered wrong location or the location you've just entered does not valid.</p>
                <button onClick={handleStatus} className=" py-1 px-7 bg-blue-600 text-white rounded-full block mx-auto font-bold cursor-pointer mt-1">Ok</button>
            </div>
        </>
    )
} 
export {ErrorPage}
function PremiumBoard(){
    return (
        <>
        <div className="p-4 rounded-2xl bg-[rgb(30,40,55)]">
        <p className="bold text-white text-[1.7rem] ">
            Advanced
        </p>
        <hr />
        <p className="bold text-white text-[1.2rem]">Get new experience</p>
        <ul className="text-gray-500">
            <li>Ad free</li>
            <li>Health activities overview</li>
            <li>Severe weather notifications</li>
        </ul>
        <div className="p-3 rounded-2xl bg-gray-400">
            <p><span className="text-white text-[1.3rem]">3.99$</span> <span className="text-gray-500 text-[1rem]">/month</span></p>
        </div>
        </div>
        
        </>
    )
}
function SignUp(){
    return (
        <>
        <div className="p-4 rounded-2xl bg-[rgb(30,40,55)]">
        <p className="font-bold text-white text-[1.22rem]">Never forget your umbrella</p>
        <hr className="border-gray-500 my-3" />
        <p className="text-gray-500">
        Sign up for our daily weather newsletter personalized just for you 
        </p>
        <button className="bold text-white text-center bg-blue-500 p-2 rounded-2xl w-full mt-3">Sign up</button>
        </div>
        </>
    )
}
export {SignUp,PremiumBoard}
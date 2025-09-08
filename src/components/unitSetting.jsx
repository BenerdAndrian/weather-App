

export default function UnitSettingBoard({unitArr,modifySettings,settings}){
    return (
        <>
        <div> 
            <ul className="flex flex-col gap-5">
                {unitArr.map(unit=>(
                    <li>
                        <p className="font-bold text-gray-500 text-[0.9rem]">{unit.name}</p>
                        <ul className="flex w-full">
                            {unit.units.map(theUnit=>(
                                <li className='border-r-1 border-r-gray-500 px-2 last:border-r-0 w-full'>
                                    <div onClick={()=>modifySettings(unit.name,theUnit)} className={`text-center ${settings[unit.name] === theUnit ? 'bg-white text-black':'text-gray-500'} w-full rounded-lg cursor-pointer`}>
                                    {theUnit}
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </li>
                 ))}
            </ul>
        </div>
        </>
    )
}

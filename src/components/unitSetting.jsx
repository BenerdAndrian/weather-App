export default function UnitSettingBoard({unitArr}){
    return (
        <>
        <div> 
            <ul className="flex flex-col gap-5">
                {unitArr.map(unit=>(
                    <li>
                        <p className="font-bold text-gray-500 text-[0.9rem]">{unit.name}</p>
                        <ul className="flex w-full">
                            {unit.units.map(theUnit=>(
                                <li className="text-center text-white w-full border-r-1 last:border-r-0 border-r-gray-500">
                                    {theUnit}
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

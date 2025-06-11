export default function UnitSettingBoard({unitArr}){
    return (
        <>
        <p className="bold text-white">Units</p>
        <div>
            <ul>
                {unitArr.map(unit=>(
                    <li>
                        <p className="bold text-gray-500">{unit.name}</p>
                        <ul className="flex w-full">
                            {unit.units.map(theUnit=>(
                                <li className="text-center text-white">
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

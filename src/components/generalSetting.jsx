import ButtonToggle from "./ButtonToggle"
function NotificationBoard({modifySettings,settings}){
    console.log('Zara: ',settings)
    return(
        <>
        <div>
            <div className="flex justify-between">
             <p className="text-white font-bold">Notifications</p>
             <ButtonToggle category={'notification'} modifySettings={modifySettings} settings={settings}/>
            </div>
            <p className="text-gray-500">Be aware of weather</p>
        </div>
        </>
    )
}
function GeneralSettingBoard({modifySettings,settings}){
    return(
        <>
        <div>
            <div className="flex justify-between">
                <p className="text-white font-bold">12-hour time</p>
                <ButtonToggle category={'12FormatTimer'} modifySettings={modifySettings} settings={settings}/>
            </div>
            <hr className="border-1 border-gray-700 my-5" />
            <div>
                <div className="flex justify-between">
                    <p className="text-white font-bold">Location</p>
                    <ButtonToggle category={'getByGPS'} modifySettings={modifySettings} settings={settings}/>
                </div>
                <p className="text-gray-500">Get weather by location</p>
            </div>
        </div>
        </>
    )
}
export {NotificationBoard,GeneralSettingBoard}
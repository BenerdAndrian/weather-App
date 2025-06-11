import ButtonToggle from "./ButtonToggle"
function NotificationBoard(){
    return(
        <>
        <div>
            <div className="flex justify-between">
             <p className="text-white font-bold">Notifications</p>
             <ButtonToggle/>
            </div>
            <p className="text-gray-500">Be aware of weather</p>
        </div>
        </>
    )
}
function GeneralSettingBoard(){
    return(
        <>
        <div>
            <div className="flex justify-between">
                <p className="text-white font-bold">12-hour time</p>
                <ButtonToggle/>
            </div>
            <hr className="border-1 border-gray-700 my-5" />
            <div>
                <div className="flex justify-between">
                    <p className="text-white font-bold">Location</p>
                    <ButtonToggle/>
                </div>
                <p className="text-gray-500">Get weather by location</p>
            </div>
        </div>
        </>
    )
}
export {NotificationBoard,GeneralSettingBoard}
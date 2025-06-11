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
export {NotificationBoard}
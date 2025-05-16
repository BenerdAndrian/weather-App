import { InputSection } from "./Input"
import MapComponent from "./MapComponent"
import { NavbarSection } from "./Navbar"
import { SearchedCities } from "./SearchedCities"
export default function MapPage(){
    return(
    <>
    <div className="bg-black grid gap-5 grid-cols-[1.5fr_1fr] grid-rows-[40px_1fr]">
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 ml-3">
    <InputSection/>
    <MapComponent/>
    </div>
    <div className="col-start-2 col-end-3 row-start-2 row-end-3">
    <SearchedCities mode='no-trans'/>
    </div>
    </div>
    </>
    )
}
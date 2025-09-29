import { InputSection } from "./Input"
import MapComponent from "./MapComponent"
import { NavbarSection } from "./Navbar"
import { SearchedCities } from "./SearchedCities"
export default function MapPage(){
    return(
    <>
    <div className="bg-black grid gap-5 md:grid-cols-[1.5fr_1fr] md:grid-rows-[40px_1fr]">
    <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 ml-3 mb-[2rem] pr-3 md:mb-0">
    <InputSection/>
    <MapComponent/>
    </div>
    <div className="md:block md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
    <SearchedCities mode='no-trans'/>
    </div>
    </div>
    </>
    )
}
import App from "./App";
import { LandingPage } from "./components/LandingPage";
import WeatherSection from "./components/Weather";
import AirConditionDetailPage from "./components/AirConditionDetail";
import CitiesPage from "./components/Cities";
import MapPage from "./components/MapPage";
import SettingPage from "./components/settings";
const routes=[
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true,element:<LandingPage/>},
            {path:"/Weather",element:<WeatherSection/>},
            {path:"/Weather/air-conditions",element:<AirConditionDetailPage/>},
            {path:"/cities",element:<CitiesPage/>},
            {path:"/map",element:<MapPage/>},
            {path:"/settings",element:<SettingPage/>}
        ]
    }
]
export{routes}
import App from "./App";
import { LandingPage } from "./components/LandingPage";
import WeatherSection from "./components/Weather";
import AirConditionDetailPage from "./components/AirConditionDetail";
import CitiesPage from "./components/Cities";
import MapPage from "./components/MapPage";
const routes=[
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true,element:<LandingPage/>},
            {path:"/Weather",element:<WeatherSection/>},
            {path:"/Weather/air-conditions",element:<AirConditionDetailPage/>},
            {path:"/cities",element:<CitiesPage/>},
            {path:"/map",element:<MapPage/>}
        ]
    }
]
export{routes}
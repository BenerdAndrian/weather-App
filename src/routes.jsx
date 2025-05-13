import App from "./App";
import { LandingPage } from "./components/LandingPage";
import WeatherSection from "./components/Weather";
import AirConditionDetailPage from "./components/AirConditionDetail";
const routes=[
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true,element:<LandingPage/>},
            {path:"/Weather",element:<WeatherSection/>},
            {path:"/Weather/air-conditions",element:<AirConditionDetailPage/>}
        ]
    }
]
export{routes}
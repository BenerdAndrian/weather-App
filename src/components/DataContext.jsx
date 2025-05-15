import { useFetchAPI, useFetchAPIForFixedCity } from "./FetchAPI.jsx";
import { createContext,useEffect,useState } from "react";
export const DataContext=createContext(null);
 export const DataProvider = ({ children }) => {
        const [city, setCity] = useState('hanoi');
        const [cityList, setCityList] = useState([]);
        const {
          data: singleCityData,
          error: singleCityError,
          loading: singleCityLoading,
          setError: setSingleCityError,
        } = useFetchAPIForFixedCity(city);
        // Reset error right after new city is set
        console.log('singleCityError1: ',singleCityError)
        // Add to cityList only if no error and city is not already added
        useEffect(()=>{
          if(cityList.includes(city.toLowerCase())){
            const index = cityList.findIndex(
              name => name.toLowerCase() === city.toLowerCase()
            );
            const updatedList = [...cityList]; // Create a shallow copy to avoid mutating the original array
            const [item] = updatedList.splice(index, 1); // Remove the matched item
            updatedList.unshift(item); // Add it to the front
            setCityList(updatedList); // Update the state with the new array
          }
        },[city])
        if(!singleCityError && !cityList.includes(city.toLowerCase())){
            setCityList(prev => [city, ...prev]);
            console.log('singleCityError2: ',singleCityError)
          
        }
        console.log(cityList)
        const {
          data,
          error,
          loading,
          setError,
        } = useFetchAPI(cityList);
        console.log(data)

        return (
          <DataContext.Provider
            value={{
              data,
              error,
              loading,
              city,
              setCity,
              cityList,
              singleCityData,
              singleCityError,
              singleCityLoading,
              setError,
              setSingleCityError,
              setCityList,
            }}
          >
            {children}
          </DataContext.Provider>
        );
      };
      
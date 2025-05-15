import { useFetchAPI, useFetchAPIForFixedCity } from "./FetchAPI.jsx";
import { createContext,useEffect,useState } from "react";
export const DataContext=createContext(null);
 export const DataProvider = ({ children }) => {
        const [city, setCity] = useState('Saigon');
        const [cityList, setCityList] = useState([]);
        const {
          data: singleCityData,
          error: singleCityError,
          loading: singleCityLoading,
          setError: setSingleCityError,
        } = useFetchAPIForFixedCity(city);
       console.log('day la loi: ',singleCityError)
        // Reset error right after new city is set
      
        // Add to cityList only if no error and city is not already added
        useEffect(() => {
          if (!singleCityError && !cityList.includes(city)) {
            setCityList(prev => [city, ...prev]);
          } else{
            console.log('qua day')
          }
        }, [city, singleCityError, cityList]);
      
        const {
          data,
          error,
          loading,
          setError,
        } = useFetchAPI(cityList);
      
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
            }}
          >
            {children}
          </DataContext.Provider>
        );
      };
      
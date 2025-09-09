import { converter } from "../utils/unitConverter.js";
import { useFetchAPI, useFetchAPIForFixedCity } from "./FetchAPI.jsx";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const userSettings = JSON.parse(localStorage.getItem("userSettings"));
  const [city, setCity] = useState("hanoi");
  const [cityList, setCityList] = useState(["hanoi"]);
  const [localData, setLocalData] = useState();
  const [cityValidated, setCityValidated] = useState(false);
  const [settings, createSettings] = useState(
    userSettings || {
      Temperature: "Fahrenheit",
      Wind: "Mph",
      Pressure: "Hpa",
      Distance: "Kilometers",
      "12FormatTimer": false,
      getByGPS: false,
      notification: false,
    }
  );

  const { FetchData, data, error, loading, setError } = useFetchAPI();
  const {
    data: singleCityData,
    error: singleCityError,
    loading: singleCityLoading,
    setError: setSingleCityError,
  } = useFetchAPIForFixedCity(city);
  // Reset error right after new city is set
  console.log("singleCityError1: ", singleCityData);

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    if(singleCityData){
        const specs = converter(settings, singleCityData);
        console.log("lak: ",specs);
    }
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(data));
    setLocalData(JSON.parse(localStorage.getItem("cities")));
  }, [data]);
  // Step 1: Đợi fetch xong và quyết định hợp lệ
  useEffect(() => {
    if (city) setCityValidated(true);
  }, [city]);
  // Add to cityList only if no error and city is not already added
  useEffect(() => {
    console.log(singleCityLoading);
    if (singleCityLoading) return;
    if (!cityValidated) return;
    if (!singleCityError && cityList.length < 5) {
      setCityList((prevList) => {
        const lowerCity = city.toLowerCase();
        const index = prevList.findIndex(
          (name) => name.toLowerCase() === lowerCity
        );

        if (index === -1) {
          return [lowerCity, ...prevList];
        } else if (index > 0) {
          const updated = [...prevList];
          const [item] = updated.splice(index, 1);
          updated.unshift(item);
          return updated;
        }
        return prevList;
      });
    }
    setCityValidated(false);
  }, [city, singleCityError, singleCityLoading]);
  // ✅ Reset error when city changes
  useEffect(() => {
    setSingleCityError(null);
  }, [city]);

  console.log(cityList);
  useEffect(() => {
    FetchData(cityList);
  }, [cityList]);

  console.log(data);

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
        localData,
        createSettings,
        settings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

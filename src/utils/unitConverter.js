function fahrenheitToCelcius(degree){
    return (((degree-32))*5/9).toFixed(1)
}
function mphToMs(mph){
   return (mph*0.44704).toFixed(1);
}
function mphToKmh(mph){
    return (mph*1.60934).toFixed(1);
}
function hpaToInches(hpa){
    return (hpa*0.02953).toFixed(1);
}
function hpaToKpa(hpa){
    return (hpa/10).toFixed(1);
}
function hpaToMmhg(hpa){
    return (hpa*0.75006).toFixed(1);
}
function kmToMs(km){
    return (km*1000).toFixed(1);
}
function windConverter(value, unit) {
    switch (unit) {
        case 'Mph':
            return value;
        case 'Kmh':
            return mphToKmh(value);
        case 'Ms':
            return mphToMs(value);
        default:
            return 0;
    }
}
function pressureConverter(value,unit){
    switch(unit){
        case 'Hpa':
            return value;
        case 'Mmhg':
            return hpaToMmhg(value);
        case 'Kpa':
            return hpaToKpa(value);
        case 'Inches':
            return hpaToInches(value)
    }
}
function tempConverter(value,unit){
    switch(unit){
        case 'Fahrenheit':
            return value;
        case 'Celcius':
            return fahrenheitToCelcius(value)
    }
}
function distanceConverter(value,unit){
    switch(unit){
        case 'Kilometers':
            return value;
        case 'Meters':
            return kmToMs(value)
    }
}
function converter(userSettings,data){
    console.log('nai: ',data.currentConditions)
   if(data.locations) return;
   const windData= windConverter(data.currentConditions.windspeed,userSettings.Wind);
   const tempData= tempConverter(data.currentConditions.temp,userSettings.Temperature);
   const pressureData=pressureConverter(data.currentConditions.pressure,userSettings.Pressure);
   return {windData,tempData,pressureData}
}
export {fahrenheitToCelcius,mphToMs,mphToKmh,hpaToInches,hpaToKpa,hpaToMmhg,kmToMs,tempConverter,distanceConverter,pressureConverter,windConverter,converter}
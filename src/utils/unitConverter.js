function fahrenheitToCelcius(degree){
    return ((degree-32))*5/9
}
function mphToMs(mph){
   return mph*0.44704;
}
function mphToKmh(mph){
    return mph*1.60934;
}
function hpaToInches(hpa){
    return hpa*0.02953;
}
function hpaToKpa(hpa){
    return hpa/10;
}
function hpaToMmhg(hpa){
    return hpa*0.75006;
}
function kmToMs(km){
    return km*1000
}
function windConverter(value, unit) {
    switch (unit) {
        case 'mph':
            return value;
        case 'kmh':
            return mphToKmh(value);
        case 'ms':
            return mphToMs(value);
        default:
            return 0;
    }
}
function pressureConverter(value,unit){
    switch(unit){
        case 'hpa':
            return value;
        case 'Mmhg':
            return hpaToMmhg(value);
        case 'kpa':
            return hpaToKpa(value);
        case 'inches':
            return hpaToInches(value)
    }
}
function tempConverter(value,unit){
    switch(unit){
        case 'fahrenheit':
            return value;
        case 'celcius':
            return fahrenheitToCelcius(value)
    }
}
function distanceConverter(value,unit){
    switch(unit){
        case 'km':
            return value;
        case 'm':
            return kmToMs(value)
    }
}
export {fahrenheitToCelcius,mphToMs,mphToKmh,hpaToInches,hpaToKpa,hpaToMmhg,kmToMs,tempConverter,distanceConverter,pressureConverter,windConverter}
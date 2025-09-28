import { MapContainer,Marker,Popup,TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import placeholder from '../assets/img/placeholder.png'
import { DataContext } from "./DataContext";
import { useContext,useEffect,useState } from "react";
// map component to show map based on the longtitude and latitude
function ChangeMapView({lat,long}){
  const map = useMap();
  map.setView([lat, long], map.getZoom());
  return null;
}
export default function MapComponent(){
 const {localData}=useContext(DataContext)
 console.log('day laf data cua map: ',localData)
 const [lat,setLat]=useState(100);
 const [long,setLong]=useState(100);
 useEffect(()=>{
  console.log("co chay code nay ko?")
 let latitude=localData.latitude||localData.locations[0].latitude;
 let longitude=localData.longitude||localData.locations[0].longitude;
 console.log(`latitude:${latitude}`)
 console.log(`longitude:${longitude}`)
 setLat(latitude);
 setLong(longitude);
 },[localData])
 
 console.log('lat outside: ',lat)
 console.log('long outside: ',long)
 let defaultIcon=L.icon({
 iconUrl:placeholder,
 iconSize:[38,38]
 })
 L.Marker.prototype.options.icon=defaultIcon;
 return(
    <>
    <MapContainer center={[lat,long]} zoom={13} style={{height:'77vh',borderRadius:'1rem'}}>
    <ChangeMapView lat={lat} long={long}/>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Marker position={[lat,long]}>
        <Popup>
          A simple popup <br /> Easy peasy!
        </Popup>
      </Marker>
    </MapContainer>
    </>
 )
}
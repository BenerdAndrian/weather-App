import { MapContainer,Marker,Popup,TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import placeholder from '../assets/img/placeholder.png'
import { useContext, useEffect } from "react";
import { DataContext } from "./DataContext";
// map component to show map based on the longtitude and latitude
export default function MapComponent(){
 const {localData}=useContext(DataContext)
 let latitude,longtitude;
 useEffect(()=>{
  latitude=localData.locations?localData.locations[0].latitude:localData.latitude;
  longtitude=localData.locations?localData.locations[0].longtitude:localData.longtitude;
 },[localData])
 let defaultIcon=L.icon({
 iconUrl:placeholder,
 iconSize:[38,38]
 })
 L.Marker.prototype.options.icon=defaultIcon;
 return(
    <>
    <MapContainer center={[latitude,longtitude]} zoom={13} style={{height:'84.5vh',borderRadius:'1rem'}}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Marker position={[21.0289, 105.855]}>
        <Popup>
          A simple popup <br /> Easy peasy!
        </Popup>
      </Marker>
    </MapContainer>
    </>
 )
}
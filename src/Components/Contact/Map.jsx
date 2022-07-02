import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Marker } from '@react-google-maps/api';

function MapContainer(prop) {

const containerStyle = {
  width: '100%',
  height: prop.height,

};
const position = {
  lat: 12.98807381311353,
  lng: 77.57973740550517
}
const center = {
  lat: 12.98807381311353,
  lng: 77.57973740550517
}
const onLoad = marker => {
  console.log('marker: ', marker)
}
  return (
    <>
    
    <LoadScript
        googleMapsApiKey="AIzaSyB14oZ3M9HW-pYKIsIwCfyYhFKsg3FX6v0"
      >
      
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>

        <Marker
      icon={{
        path:
          "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
        fillColor: "yellow",
        fillOpacity: 0.9,
        scale: 8,
        strokeColor: "gold",
        strokeWeight: 2,
      }}
      position={center}
    />
      </LoadScript>
    </>
  )
}
export default MapContainer
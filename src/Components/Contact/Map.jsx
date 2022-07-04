import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Marker } from '@react-google-maps/api';
import {useJsApiLoader} from '@react-google-maps/api'
import { Skeleton } from '@mui/material';
function MapContainer(prop) {

const isLoaded= useJsApiLoader({
  googleMapsApiKey:process.env.REACT_APP_MAP_API_KEY
})
if(!isLoaded){
  return <Skeleton variant="rectangular" width={210} height={118} />
}

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
        googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}
      >
      
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        <Marker
          position={position}
        />
        
        </GoogleMap>

      </LoadScript>
    </>
  )
}
export default MapContainer
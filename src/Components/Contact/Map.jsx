import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lati, lng: props.long }}
  >
    <Marker
      position={{ lat: props.lati, lng: props.long}}
    />
  </GoogleMap>
));
export default MapWithAMarker
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}
const center = {
    lat: 4.824167,
    lng: 7.033611,
}

export default function ContactMap() {
    const center = useMemo(() => ({ lat: 4.770784, lng: 7.014776 }), []);
    const { isLoaded, loadError } = useLoadScript({
        // Uncomment the line below and add your API keys
        googleMapsApiKey: "AIzaSyBKIxPK1moAOrY2NlRZKkEdZEMT1lhAbtY",
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";



    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}>
            <Marker position={center} />
        </GoogleMap>
    )
}
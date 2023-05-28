import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



export default function ContactMap() {
    const mapContainerStyle = {
        width: '100vw',
        height: '100vh',
    }
    const center = {
        lat: 4.770784,
        lng: 7.014776,
    }
    const centerMap = useMemo(() => (center), []);
    const { isLoaded, loadError } = useLoadScript({
        // Uncomment the line below and add your API keys
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";



    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}>
            <Marker position={centerMap} />
        </GoogleMap>
    )
}
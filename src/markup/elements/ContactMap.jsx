import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}
const center = {
    lat: 4.824167,
    lng: 7.033611,
}

export default function ContactMap() {
    const { isLoaded, loadError } = useLoadScript({
        // Uncomment the line below and add your API key
        googleMapsApiKey: 'AIzaSyAm__IQCMjaXe5ezV8m1vKkVCIEZs0EwNA',
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={11}
            center={center}
        />
    )
}
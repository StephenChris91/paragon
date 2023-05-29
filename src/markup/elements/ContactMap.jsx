import { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

export default function ContactMap() {
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 4.770784,
    lng: 7.014776,
  };

  const [currentAddress, setCurrentAddress] = useState("");
  const [directions, setDirections] = useState(null);

  const centerMap = useMemo(() => center, [center]);

  const { isLoaded, loadError } = useLoadScript({
    // Uncomment the line below and add your API keys
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const handleAddressChange = (event) => {
    setCurrentAddress(event.target.value);
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirections(response);
      } else {
        console.log("Directions request failed:", response.status);
      }
    }
  };

  const handleDirectionsRequest = () => {
    if (currentAddress.trim() !== "") {
      setDirections(null); // Clear previous directions
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: currentAddress }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          const origin = results[0].geometry.location;
          setDirections({
            request: {
              origin: origin,
              destination: center,
              travelMode: "DRIVING",
            },
          });
        } else {
          console.log("Geocode request failed:", status);
        }
      });
    }
  };

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className>
      <div className="ml-20">
        <input
          type="text"
          value={currentAddress}
          onChange={handleAddressChange}
          placeholder="Enter your current address"
          className="map-input"
        />
        <button className="btn btn-primary ml-10" onClick={handleDirectionsRequest}>Get Directions</button>
      </div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
        <Marker position={centerMap} />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
}

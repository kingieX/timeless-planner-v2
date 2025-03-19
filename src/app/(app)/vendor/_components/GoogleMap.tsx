import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 6.5244, // default center (Lagos)
  lng: 3.3792,
};

interface VendorLocation {
  name: string;
  lat: number;
  lng: number;
}

interface GoogleMapViewProps {
  vendors: VendorLocation[];
}

const GoogleMapView: React.FC<GoogleMapViewProps> = ({ vendors }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {vendors.map((vendor, idx) => (
        <Marker
          key={idx}
          position={{ lat: vendor.lat, lng: vendor.lng }}
          title={vendor.name}
        />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapView;

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 41.890210,
    lng: 12.492231,
};

const MapComponent = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

    return (
        <>
        <div className="text-center">
            <div className="rounded"> 
                <LoadScript googleMapsApiKey={apiKey}>
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
        </>
    );
};

export default MapComponent;
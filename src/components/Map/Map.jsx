import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Map = () => {
  const { geoPointLat, geoPointLon } = useParams();
  const latlng = [geoPointLat, geoPointLon];

  const navigate = useNavigate();

  function LocationMarker() {
    const [position, setPosition] = useState(latlng);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        onClick={goBack}
        className="z-[10000] absolute mt-4 mr-4 top-0 right-0 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-5 dark:focus:ring-offset-gray-800"
      >
        Voltar
      </button>
      <div className="flex justify-center items-center content-center h-[100vh]">
        <MapContainer
          center={latlng}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: "100vh", width: "100vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { locations } from "../../utils/Constants";
import { useEffect, useState } from "react";

import styles from "./Map.module.css";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  height: 100%;
  position: relative;
`;

const StyledButton = styled.button`
  font-weight: 700;
  position: absolute;
  z-index: 1000;
  font-size: 1.4rem;
  bottom: 4rem;
  left: 50%;
  border-radius: 8px;
  padding: 1rem 2rem;
  transform: translateX(-50%);
  background-color: #71717a;
  color: #fff;
  border: none;
  box-shadow: 0 0.4rem 1.2rem rgba(36, 42, 46, 0.16);

  &:focus {
    outline: none;
  }
`;

function Map() {
  const [mapPosition, setMapPosition] = useState([46.7675, 23.5725]);
  const {
    isLoading: isLoadingGeolocation,
    position: geoLocationPosition,
    getPosition,
  } = useGeoLocation();

  useEffect(
    function () {
      if (geoLocationPosition !== null) {
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      }
    },
    [geoLocationPosition]
  );

  return (
    <StyledDiv>
      {!geoLocationPosition && (
        <StyledButton onClick={() => getPosition()}>
          {isLoadingGeolocation ? "Loading..." : "Get your position"}
        </StyledButton>
      )}
      <MapContainer
        center={mapPosition}
        zoom={14}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {locations.map((venue) => (
          <Marker
            position={[venue.latitude, venue.longitude]}
            key={venue.venueId}
          >
            <Popup>
              <span>{venue.type}</span>
              <span>{venue.location}</span>
            </Popup>
          </Marker>
        ))}
        <CenterPosition position={mapPosition} />
      </MapContainer>
    </StyledDiv>
  );
}

function CenterPosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

CenterPosition.propTypes = {
  position: PropTypes.array,
};

export default Map;

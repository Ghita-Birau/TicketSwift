import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";

import styles from "./Map.module.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import useMapLocations from "./useMapLocations";
// import "leaflet/dist/leaflet.css";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../contexts/filterSlice";

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

const StyledPopup = styled(Popup)`
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;

  opacity: 1;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  width: 100%;

  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  overflow: hidden;
  border-radius: 8px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const Div = styled.div`
  padding: 0rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Map() {
  const [mapPosition, setMapPosition] = useState([46.7675, 23.5725]);
  const {
    isLoading: isLoadingGeolocation,
    position: geoLocationPosition,
    getPosition,
  } = useGeoLocation();
  const { locations = [], isLoading } = useMapLocations();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(name) {
    navigate("/events");
    dispatch(setSearchTerm(name));
  }

  useEffect(
    function () {
      if (geoLocationPosition !== null) {
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      }
    },
    [geoLocationPosition]
  );

  if (isLoading) return <Loader />;

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
        {locations.map((event) => (
          <Marker
            position={[event.venue.latitude, event.venue.longitude]}
            key={event.eventId}
          >
            <StyledPopup>
              <PopupContainer>
                <ImageContainer>
                  <img src={event.urlImage} alt={`${event.name} event`} />
                </ImageContainer>
                <div>
                  <P>{event.description}</P>
                  <Div>
                    <span>{event.venue.type}</span>
                    <span>{event.venue.location}</span>
                  </Div>
                </div>
                <Button
                  variation="details"
                  onClick={() => handleClick(event.name)}
                >
                  See Details
                </Button>
              </PopupContainer>
            </StyledPopup>
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

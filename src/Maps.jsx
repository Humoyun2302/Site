import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

const position = [46.572709, 1.950498];

const Box = styled(MapContainer)`
  margin: 0 100px;
  width: 700px;
  height: 400px;
`;

const Maps = () => {
  return (
    <Box center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Find a BUGATTI Partner</Popup>
      </Marker>
    </Box>
  );
};

export default Maps;

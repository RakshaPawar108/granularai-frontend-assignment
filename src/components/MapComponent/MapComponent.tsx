import { InformationContainer } from "../InformationContainer/InformationContainer";
import "./MapComponent.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type Props = {
  center: [number, number];
};

export const MapComponent: React.FC<Props> = ({ center }) => {
  return (
    <MapContainer
      className="map"
      center={center}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <InformationContainer />
    </MapContainer>
  );
};

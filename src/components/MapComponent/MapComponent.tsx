import { InformationContainer } from "../InformationContainer/InformationContainer";
import "./MapComponent.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

type Props = {
  center: [number, number];
};

type LocationProps = {
  center: [number, number];
  zoom: number;
};

export const MapComponent = ({ center }: Props) => {
  function ChangeLocation({ center, zoom }: LocationProps) {
    const map = useMap();
    map.flyTo(center);
    return null;
  }
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
      <ChangeLocation center={center} zoom={12} />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <InformationContainer />
    </MapContainer>
  );
};

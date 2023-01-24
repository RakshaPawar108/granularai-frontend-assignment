import "./MapComponent.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polygon,
} from "react-leaflet";
import { SearchData } from "../../data/searchdata";

type Props = {
  center: [number, number];
  newData: SearchData | null;
};

type LocationProps = {
  center: [number, number];
  zoom: number;
};

export const MapComponent = ({ center, newData }: Props) => {
  function ChangeLocation({ center, zoom }: LocationProps) {
    const map = useMap();
    map.flyTo(center);
    return null;
  }
  return (
    <MapContainer
      className="map"
      center={center}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeLocation center={center} zoom={11} />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      {newData && (
        <Polygon
          positions={[
            [newData.boundingbox[0], newData.boundingbox[2]],
            [newData.boundingbox[0], newData.boundingbox[3]],
            [newData.boundingbox[1], newData.boundingbox[3]],
            [newData.boundingbox[1], newData.boundingbox[2]],
          ]}
        />
      )}
    </MapContainer>
  );
};

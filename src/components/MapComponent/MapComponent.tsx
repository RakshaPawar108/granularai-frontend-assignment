import "./MapComponent.css";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { SearchData } from "../../data/searchdata";

type Props = {
  center: [number, number];
  newData: SearchData | null;
  ChangeLocation: React.ReactNode;
  changeLocation: boolean;
};

export const MapComponent = ({
  center,
  newData,
  ChangeLocation,
  changeLocation,
}: Props) => {
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
      {changeLocation && ChangeLocation}
      <Marker position={center}>
        <Popup>
          {newData?.namedetails.name}
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

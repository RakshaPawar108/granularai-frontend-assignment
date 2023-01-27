import { SearchData } from "../../data/searchdata";
import "./InformationContainer.css";

type Props = {
  newData: SearchData | null;
};

export const InformationContainer = ({ newData }: Props) => {
  return (
    <>
      {newData && (
        <div className="information-container">
          <span className="container-heading">
            <strong>Information</strong>
          </span>
          <span>
            <strong>Location:</strong> {newData.display_name}
          </span>
          <span>
            <strong>Population:</strong> {newData.extratags.population ?? 'Unknown'}
          </span>
        </div>
      )}
    </>
  );
};

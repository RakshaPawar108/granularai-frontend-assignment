import { SearchData } from "../../data/searchdata";
import "./OptionList.css";

type SearchResults = SearchData[];

type Props = {
  options: SearchResults;
  setNewData: any;
  loading:boolean;
};

export const OptionList = ({ options, setNewData, loading }: Props) => {
  return (
    <>
      {options.length > 0 && (
        <div className="option-list">
          {loading && <div>Loading...</div>}
          {options.map((option) => (
            <div
              key={option.place_id}
              className="option-item"
              onClick={() => setNewData(option)}
            >
              {option.display_name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

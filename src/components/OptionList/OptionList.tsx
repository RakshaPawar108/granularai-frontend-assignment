import { SearchData } from "../../data/searchdata";
import "./OptionList.css";

type SearchResults = SearchData[];

type Props = {
  options: SearchResults;
};

export const OptionList = ({ options }: Props) => {
  return (
    <>
      {options.length > 0 && (
        <div className="option-list">
          {options.map((option) => (
            <div key={option.place_id} className="option-item">{option.display_name}</div>
          ))}
        </div>
      )}
    </>
  );
};

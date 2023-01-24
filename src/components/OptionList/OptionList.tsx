import { SearchData } from "../../data/searchdata";
import "./OptionList.css";

type SearchResults = SearchData[];

type Props = {
  options: SearchResults;
  setNewData: any;
  loading: boolean;
  setSearchQuery: any;
  setOptionList: any;
};

export const OptionList = ({
  options,
  setNewData,
  loading,
  setSearchQuery,
  setOptionList,
}: Props) => {
  return (
    <>
      {options.length > 0 && (
        <div className="option-list">
          {loading && <div>Loading...</div>}
          {options.map((option) => (
            <div
              key={option.place_id}
              className="option-item"
              onClick={() => {
                setNewData(option);
                setSearchQuery(option.display_name);
                setOptionList([]);
              }}
            >
              {option.display_name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

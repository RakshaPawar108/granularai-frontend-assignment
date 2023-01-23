import { fetchData } from "../service";
import { SearchData } from "../data/searchdata";

type SearchResults = SearchData[];

export const getData = async (
  queryString: string,
  setOptionList: any,
  setLoading: any,
  setNewData: any
) => {
  let options: SearchResults;
  try {
    setLoading(true);
    const response = await fetchData(queryString);
    if (response.status === 200) {
      options = response.data;
      if (options.length > 0) {
        setOptionList(
          options.filter((option) => option.type === "administrative")
        );
        if(localStorage.getItem('selected') === 'true' && options.length > 0) {
          setNewData(options[0])
        }
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
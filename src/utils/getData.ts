import { fetchData } from "../service";
import { SearchData } from "../data/searchdata";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


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
        if (localStorage.getItem("selected") === "true" && options.length > 0) {
          setNewData(options[0]);
        }
      }
    }
  } catch (err) {
    toast.error("There was some error! Please try again later.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } finally {
    setLoading(false);
  }
};

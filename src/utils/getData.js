import { fetchData } from "../service";

export const getData = async (queryString, setOptionList, setLoading) => {
  try {
    setLoading(true);
    const response = await fetchData(queryString);
    console.log(response);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

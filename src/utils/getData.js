import { fetchData } from "../service";

export const getData = async (queryString, setOptionList, setLoading) => {
  try {
    setLoading(true);
    const response = await fetchData(queryString);
    if (response.status === 200) {
      setOptionList(response.data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

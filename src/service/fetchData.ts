import axios from "axios";

export const fetchData = (queryString: string) => axios.get(encodeURI(`https://nominatim.openstreetmap.org/search?format=json&limit=10&extratags=1&namedetails=1&q=${queryString}`));
import axios from "axios";

export const getProducts = async (limit = 10, skip = 0, query = "") => {
  const url = query
    ? `${
        import.meta.env.VITE_API_URL
      }/search?q=${query}&limit=${limit}&skip=${skip}`
    : `${import.meta.env.VITE_API_URL}?limit=${limit}&skip=${skip}`;

  const { data } = await axios.get(url);
  return data;
};

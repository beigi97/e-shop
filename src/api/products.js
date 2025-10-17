import axios from "axios";

export const getProducts = async (limit = 10, skip = 0, query = "") => {
  const url = query
    ? `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  const { data } = await axios.get(url);
  return data;
};

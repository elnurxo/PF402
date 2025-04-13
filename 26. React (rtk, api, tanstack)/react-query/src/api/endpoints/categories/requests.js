import axiosInstance from "../../axiosInstance.js";
import { endpoints } from "../../constants.js";

export const getAllCategories = async () => {
  const { data } = await axiosInstance.get(endpoints.categories);
  return data;
};

export const getCategoryById = async (id) => {
  const { data } = await axiosInstance.get(`${endpoints.categories}/${id}`);
  return data;
};

export const postCategory = async (category) => {
  const { data } = await axiosInstance.post(endpoints.categories, category);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await axiosInstance.delete(`${endpoints.categories}/${id}`);
  return data;
};

export const updateCategory = async (id, category) => {
  const { data } = await axiosInstance.put(
    `${endpoints.categories}/${id}`,
    category
  );
  return data;
};

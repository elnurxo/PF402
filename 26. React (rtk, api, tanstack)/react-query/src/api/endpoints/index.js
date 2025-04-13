//import of categories
import {
  getAllCategories,
  getCategoryById,
  deleteCategory,
  postCategory,
  updateCategory,
} from "./categories/requests.js";

const controller = {
  category: {
    getAll: getAllCategories,
    getOne: getCategoryById,
    post: postCategory,
    delete: deleteCategory,
    update: updateCategory,
  },
};

export default controller;

import instance from "./axiosConfig.js";
import { endpoints } from "./constants.js";

// create car
async function createCar(carData) {
  try {
    const response = await instance.post(endpoints.cars, carData);
    return response.data;
  } catch (error) {
    console.error("Error creating car:", error);
    throw error;
  }
}

// delete car
async function deleteCar(carId) {
  try {
    const response = await instance.delete(`${endpoints.cars}/${carId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
}

// get all cars
async function getAllCars() {
  try {
    const response = await instance.get(endpoints.cars);
    return response.data;
  } catch (error) {
    console.error("Error fetching all cars:", error);
    throw error;
  }
}

// get one car by id
async function getCarById(carId) {
  try {
    const response = await instance.get(`${endpoints.cars}/${carId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car:", error);
    throw error;
  }
}

// update car
async function updateCar(carId, updatedData) {
  try {
    const response = await instance.put(
      `${endpoints.cars}/${carId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
}

const carController = {
  createCar: createCar,
  deleteCar: deleteCar,
  getAllCars: getAllCars,
  getCarById: getCarById,
  updateCar: updateCar,
};

export default carController;

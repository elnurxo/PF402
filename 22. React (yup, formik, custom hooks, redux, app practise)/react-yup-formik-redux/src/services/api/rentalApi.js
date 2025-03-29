import instance from "./axiosConfig.js";
import { endpoints } from "./constants.js";

// create rental
async function createRental(rentalData) {
  try {
    const response = await instance.post(endpoints.rentals, rentalData);
    return response.data;
  } catch (error) {
    console.error("Error creating rental:", error);
    throw error;
  }
}

// delete rental
async function deleteRental(rentalId) {
  try {
    const response = await instance.delete(`${endpoints.rentals}/${rentalId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting rental:", error);
    throw error;
  }
}

// get all rentals
async function getAllRentals() {
  try {
    const response = await instance.get(endpoints.rentals);
    return response.data;
  } catch (error) {
    console.error("Error fetching all rentals:", error);
    throw error;
  }
}

// get rental by id
async function getRentalById(rentalId) {
  try {
    const response = await instance.get(`${endpoints.rentals}/${rentalId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rental:", error);
    throw error;
  }
}

// get rentals by car id
async function getRentalsByCarId(carId) {
  try {
    const response = await instance.get(`${endpoints.rentals}?car_id=${carId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rentals by car ID:", error);
    throw error;
  }
}

// get rentals by user id
async function getRentalsByUserId(userId) {
  try {
    const response = await instance.get(
      `${endpoints.rentals}?user_id=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching rentals by user ID:", error);
    throw error;
  }
}

// update rental
async function updateRentalStatus(rentalId, status) {
  try {
    const response = await instance.patch(`${endpoints.rentals}/${rentalId}`, {
      status: status,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating rental:", error);
    throw error;
  }
}

const rentalController = {
  createRental: createRental,
  deleteRental: deleteRental,
  getAllRentals: getAllRentals,
  getRentalById: getRentalById,
  getRentalsByCarId: getRentalsByCarId,
  getRentalsByUserId: getRentalsByUserId,
  updateRentalStatus: updateRentalStatus,
};

export default rentalController;

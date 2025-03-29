import instance from "./axiosConfig.js";
import { endpoints } from "./constants.js";

// register - create
async function register(userData) {
  try {
    const duplicateEmail = await getByEmail(userData.email);
    if (duplicateEmail.length > 0) {
      return {
        message: "duplicate email",
        data: null,
      };
    }
    const response = await instance.post(endpoints.users, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

// login
async function login(credentials) {
  try {
    const user = await getByEmail(credentials.email);
    if (user.length === 0) {
      return {
        message: "user not found",
        isLogged: false,
        data: null,
      };
    }
    const validUser = user[0].password == credentials.password;
    if (validUser) {
      return {
        message: "successfully logged in",
        isLogged: true,
        data: user,
      };
    } else {
      return {
        message: "invalid email or password",
        isLogged: false,
        data: null,
      };
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

// get all users
async function getAll() {
  try {
    const response = await instance.get(endpoints.users);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

// get one user
async function getOne(userId) {
  try {
    const response = await instance.get(`${endpoints.users}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// get user by email
async function getByEmail(email) {
  try {
    const response = await instance.get(`${endpoints.users}?email=${email}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// ban user
async function banUser(userId) {
  try {
    const response = await instance.patch(`${endpoints.users}/${userId}`, {
      isBanned: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error banning user:", error);
    throw error;
  }
}

// unban user
async function unbanUser(userId) {
  try {
    const response = await instance.patch(`${endpoints.users}/${userId}`, {
      isBanned: false,
    });
    return response.data;
  } catch (error) {
    console.error("Error unbanning user:", error);
    throw error;
  }
}

// update user
async function updateUser(userId, updatedData) {
  try {
    const response = await instance.put(
      `${endpoints.users}/${userId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

// delete user
async function deleteUser(userId) {
  try {
    const response = await instance.delete(`${endpoints.users}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

const authController = {
  register: register,
  login: login,
  getAll: getAll,
  getOne: getOne,
  banUser: banUser,
  unbanUser: unbanUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};

export default authController;

import instance from "@/api/axiosInstance";
import { endpoints } from "@/api/constants";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: null | {
    username: string;
    email: string;
    id: string;
    basketItems: [];
  };
}
const storedUserId = localStorage.getItem("user");
const parsedUserId = storedUserId ? JSON.parse(storedUserId) : null;

const getUserById = async (id?: string) => {
  try {
    const { data: user } = await instance.get(endpoints.users + `/${id}`);
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.log("err: ", err);
    return null;
  }
};

// eslint-disable-next-line prefer-const
let storedUser = await getUserById(parsedUserId);

const initialState: UserState = {
  user: storedUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.id));
      state.user = { ...action.payload };
    },
    update: (state,action)=>{
      state.user = {...action.payload};
    },
    logout: (state) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(null));
    },
  },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;

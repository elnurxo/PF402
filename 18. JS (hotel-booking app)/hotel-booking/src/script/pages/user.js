import { endpoints } from "../services/api";
import controller from "../services/request";

window.addEventListener("load", async function () {
  const userID = JSON.parse(this.localStorage.getItem("userID"));
  console.log(userID);
  const apiResponse = await controller.getAll(endpoints.users);
  if (userID) {
    const checkUser = apiResponse.data.find((x) => x.id == userID);
    if (!checkUser) {
      this.window.location.replace("http://localhost:5173/login.html");
    }
  } else {
    this.window.location.replace("http://localhost:5173/login.html");
  }
});

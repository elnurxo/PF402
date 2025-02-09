const loginForm = document.querySelector("#login-form");
const loginInputs = {
  username: document.querySelector("#username"),
  password: document.querySelector("#password"),
};
import controller from "../services/request.js";
import { endpoints } from "../services/api.js";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const apiResponse = await controller.getAll(endpoints.users);
  const checkValidUser = apiResponse.data.find((x) => {
    return (
      x.username == loginInputs.username.value &&
      x.password == loginInputs.password.value
    );
  });

  if (checkValidUser) {
    //ok - login
    Toastify({
      text: `welcome back ${checkValidUser.fullName}`,
      duration: 1500,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
    localStorage.setItem("userID", JSON.stringify(checkValidUser.id));
    setTimeout(() => {
      window.location.replace("http://localhost:5173/index.html");
    }, 1500);
  } else {
    Toastify({
      text: "username or email is incorrect!",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      backgroundColor: "linear-gradient(to right, #ff4d4d, #f44336)",
    }).showToast();
  }
});

window.addEventListener("load", async function () {
    const userID = JSON.parse(this.localStorage.getItem("userID"));
    const apiResponse = await controller.getAll(endpoints.users);
    if (userID) {
      const checkUser = apiResponse.data.find((x) => x.id == userID);
      if (checkUser) {
        this.window.location.replace("http://localhost:5173/user.html");
      }
    }
  });

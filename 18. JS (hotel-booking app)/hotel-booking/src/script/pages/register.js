const registerForm = document.querySelector("#register");
import controller from "../services/request.js";
import { endpoints } from "../services/api.js";
import User from "../classes/User.js";
const registerInputs = {
  fullName: document.querySelector("#fullName"),
  username: document.querySelector("#username"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  confirmPassword: document.querySelector("#confirmPassword"),
};
// const registerButton = document.querySelector("#register-btn");

registerForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const apiResponse = await controller.getAll(endpoints.users);
  const duplicateUser = apiResponse.data.find(
    (x) =>
      x.username == registerInputs.username.value ||
      x.email == registerInputs.email.value
  );

  if (duplicateUser) {
    Toastify({
      text: "username or email already in use!",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      backgroundColor: "linear-gradient(to right, #ff4d4d, #f44336)",
    }).showToast();
    return;
  } else {
    const newUser = new User(
      registerInputs.fullName.value.trim(),
      registerInputs.username.value.trim(),
      registerInputs.email.value.trim(),
      registerInputs.password.value.trim()
    );
    const postResponse = await controller.post(endpoints.users, newUser);
    if (postResponse.data) {
      Toastify({
        text: "user registered successfully!",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
      setTimeout(() => {
        window.location.replace("http://localhost:5173/login.html");
      }, 1500);
    }
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

import { endpoints } from "../services/api";
import controller from "../services/request";
import Swal from 'sweetalert2'
const loginRegisterWrapper = document.querySelector(".login-register");

window.addEventListener("DOMContentLoaded", async function (e) {
  const userID = JSON.parse(this.localStorage.getItem("userID"));
  const apiUsers = await controller.getAll(endpoints.users);
  const checkValidLogin = apiUsers.data.find((x) => x.id == userID);
  if (checkValidLogin) {
    loginRegisterWrapper.innerHTML = "";
    loginRegisterWrapper.innerHTML += `
         <a class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            href="user.html">${checkValidLogin.fullName}</a>
         <button id="log-out" class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >Log Out</button>
        `;
    const logOutBtn = this.document.querySelector("#log-out");
    logOutBtn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure to logout?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logged out!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("userID");
          loginRegisterWrapper.innerHTML = "";
          loginRegisterWrapper.innerHTML += `
          <a class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            href="register.html">Sign up</a>
          <a class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="login.html">Login</a>
        `;
          Swal.fire({
            title: "Logged Out!",
            text: "user has been logged out.",
            icon: "success",
          });
        }
      });
    });
  }
});

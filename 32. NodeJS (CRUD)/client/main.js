const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  fetch("http://localhost:3030/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": "code_academy",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((courses) => {
      console.log("courses:", courses);
    });
});

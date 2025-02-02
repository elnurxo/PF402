const API_URL = "https://jsonplaceholder.typicode.com/users";
const CATEGORIES_API_URL = "https://northwind.vercel.app/api/categories";

//http Methods - GET, POST, DELETE, PUT/PATCH (UPDATE)
// const obj = {id: 1, fullName: 'John Doe',age: 36}; // {age: 36} - PATCH
//http status code
//promises
//async await

//async - Promise
// fetch(API_URL, {
//     method: 'GET'
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("response not ok!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get-one");
const postBtn = document.querySelector("#post");
const deleteBtn = document.querySelector("#delete");
const updateBtn = document.querySelector("#update");

getAllBtn.addEventListener("click", function () {
  fetch(CATEGORIES_API_URL, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("response not ok!");
      }
    })
    .then((categories) => {
      console.log("all categories: ", categories);
    })
    .catch((err) => {
      console.log(err);
    });
});

getOneBtn.addEventListener("click", function () {
  const id = 6;
  fetch(CATEGORIES_API_URL + `/${id}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("response not ok!");
      }
    })
    .then((category) => {
      console.log("one category:", category);
    })
    .catch((err) => {
      console.log(err);
    });
});

postBtn.addEventListener("click", function () {
  fetch(CATEGORIES_API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: "Code Academy",
      description: "fetch tutorial in JS",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((newCategory) => {
      console.log(newCategory);
    })
    .catch((err) => {
      console.log(err);
    });
});

deleteBtn.addEventListener("click", function () {
  const id = 1;
  fetch(CATEGORIES_API_URL + `/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

updateBtn.addEventListener("click", function () {
  const id = 5;
  fetch(CATEGORIES_API_URL + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: "UPDATED BLA BLA PUT!",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

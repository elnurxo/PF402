const API_URL = "https://northwind.vercel.app/api/categories";
const id = new URLSearchParams(window.location.search).get("id");
const nameHeading = document.querySelector('#name');
const descHeading = document.querySelector('#description');

document.addEventListener('DOMContentLoaded',function(){
    fetch(API_URL + `/${id}`)
    .then((res)=>res.json())
    .then((category)=>{
        if(category){
            nameHeading.textContent = category.name;
            descHeading.textContent = category.description;
        }
    })
});

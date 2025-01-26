const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const urlInput = document.querySelector("#url");
const fileInput = document.querySelector("#file");
const cards = document.querySelector(".cards");

const dataFile = {};
fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];
  //file type validation
  if (!file.type.includes("image/")) {
    window.alert("invalid file type, only images are allowed!");
    fileInput.value = "";
    return;
  }
  //size validation - not bigger than 2MB => 2000
  const kilobytes = (file.size / 1024).toFixed(2);
  if (kilobytes > 2000) {
    window.alert("file size exceeded! max: 2MB!");
    fileInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    dataFile.base64Code = e.target.result;
    dataFile.fileName = file.name;
    dataFile.size = file.size;
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newCard = {
    id: new Date().getTime(),
    title: titleInput.value,
    url: urlInput.value,
    file: dataFile,
  };

  cards.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card" data-id="${newCard.id}">
                    <img title="${newCard.title}" src="${newCard.file.base64Code}"
                        class="card-img-top" alt="${newCard.title}">
                    <div class="card-body">
                        <a href="${newCard.url}" target="_blank" class="btn btn-primary">url for ${newCard.title}</a>
                    </div>
                </div>
            </div>
  `;

  titleInput.value = "";
  urlInput.value = "";
  fileInput.value = "";
});

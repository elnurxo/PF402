const sliders = [
  {
    id: "1",
    file: "https://i.pinimg.com/736x/58/03/7a/58037aeed4d8dd7ee53bee0d50dfe970.jpg",
    title: "batman",
  },
  {
    id: "2",
    file: "https://wallpapercat.com/w/full/6/9/f/319983-3840x2160-desktop-4k-iron-man-background.jpg",
    title: "iron-man",
  },
  {
    id: "3",
    file: "https://wallpapercat.com/w/full/c/c/7/2162824-1920x1080-desktop-full-hd-incredible-hulk-wallpaper-image.jpg",
    title: "hulk",
  },
];
const sliderWrapper = document.querySelector(".slider");

const dropZone = document.querySelector(".drop-zone");
const addBtn = document.querySelector(".add-btn");
let droppedFile = null;

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragging");
});
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragging");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragging");

  const file = e.dataTransfer.files[0];

  if (file) {
    // Validate file type and size
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB
      alert("File size must not exceed 5MB.");
      return;
    }

    // Create object URL and set as background
    const fileURL = URL.createObjectURL(file);
    dropZone.style.backgroundImage = `url(${fileURL})`;
    dropZone.style.backgroundSize = "cover";
    dropZone.style.backgroundPosition = "center";
    dropZone.querySelector("i").style.display = "none"; // Hide icon
    droppedFile = { fileURL, fileName: file.name }; // Save the dropped file
  }
});

addBtn.addEventListener("click", () => {
  if (!droppedFile) {
    alert("Please drop an image file first.");
    return;
  }

  // Add the new slider to the array
  sliders.push({
    id: (sliders.length + 1).toString(),
    file: droppedFile.fileURL,
    title: droppedFile.fileName.split(".")[0], // Use the file name without extension as the title
  });

  renderSlider(sliders);

  alert("Slider added successfully!");

  // Reset drop zone
  dropZone.style.backgroundImage = "";
  dropZone.querySelector("i").style.display = "block";
  droppedFile = null;
});

window.addEventListener("load", function () {
  renderSlider(sliders);
});

function renderSlider(arr) {
  sliderWrapper.innerHTML = "";
  arr.forEach((slider) => {
    sliderWrapper.innerHTML += `
              <div class="slide" data-id="${slider.id}">
                    <img src="${slider.file}" alt="${slider.title}" title="${slider.title}">
                </div>
            `;
  });

  //next button
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 1;
  nextBtn.addEventListener("click", function () {
    const slides = Array.from(document.querySelectorAll(".slide"));
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    if (currentSlide === sliders.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
  });

  //prev button
  const prevBtn = document.querySelector(".prev-btn");
  prevBtn.addEventListener("click", function () {
    const slides = Array.from(document.querySelectorAll(".slide"));

    if (currentSlide === 0) {
      currentSlide = sliders.length - 1; // Wrap around to the last slide
    } else {
      currentSlide -= 1; // Move to the previous slide
    }

    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  });
}

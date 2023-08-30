// DOM Elements Select
const sliderImages = document.querySelectorAll(".slider");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const dotsContainer = document.querySelector(".dots");

// slideLength
const slideLength = sliderImages.length;
// slideIndex
let slideIndex = 0;

// prevBtn
prevBtn.addEventListener("click", () => {
  prevImage();
});

// nextBtn
nextBtn.addEventListener("click", () => {
  nextImage();
});

// updateIndex
function updateIndex() {
  for (let index = 0; index < sliderImages.length; index++) {
    const sliderImage = sliderImages[index];
    sliderImage.classList.remove("active");
    sliderImage.classList.add("hide");
  }

  sliderImages[slideIndex].classList.add("active");

  // dots Added
  for (let index = 0; index < dotContent.length; index++) {
    const dot = dotContent[index];
    dot.classList.remove("dot-active");
  }

  dotContent[slideIndex].classList.add("dot-active");
}

// prevImage
function prevImage() {
  if (slideIndex === 0) {
    slideIndex = slideLength - 1;
  } else {
    slideIndex--;
  }
  updateIndex();
  console.log(slideIndex);
}

// nextImage
function nextImage() {
  if (slideIndex === slideLength - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  console.log(slideIndex);
  updateIndex();
}

for (let index = 0; index < sliderImages.length; index++) {
  const sliderDots = sliderImages[index];
  // dots Create
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

const dotContent = document.querySelectorAll(".dot");
dotContent[slideIndex].classList.add("dot-active");

dotContent.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    updateIndex();
  });
});

// Auto Slides After 4s
setInterval(() => {
  if (slideIndex === sliderImages.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  updateIndex();
}, 4000);

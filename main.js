// document.addEventListener("DOMContentLoaded", function () {
//   const projectCarousel = document.getElementById("project-carousel");
//   const slider = document.getElementById("project-tile");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   let currentIndex = 0;
//   const totalItems = document.querySelectorAll("#project-tile section").length;

//   nextBtn.addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % totalItems;
//     updateSlider();
//   });

//   prevBtn.addEventListener("click", function () {
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     updateSlider();
//   });

//   function updateSlider() {
//     const translateValue = -currentIndex * 100 + "%";
//     slider.style.transform = "translateX(" + translateValue + ")";
//   }

//   function autoPlay() {
//     setInterval(function () {
//       nextBtn.click();
//     }, 5000);
//   }

//   autoPlay();
// });

var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

// new script

// const imgs = document.getElementById("img");
// const img = document.querySelectorAll("li");

// let idx = 0;

// function carrossel() {
//   idx++;
//   if (idx > img.length - 1) {
//     idx = 0;
//   }
//   imgs.style.transform = `translateX(${-idx * 1000}%)`;
// }
// setInterval(carrossel, 1800);

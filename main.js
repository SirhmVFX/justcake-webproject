const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("is-active");
});

const carousel = document.querySelector(".review-container");
const arrowBtn = document.querySelectorAll(".review button");
const firstCardWidth = carousel.querySelector(".review-cards").offsetWidth;

arrowBtn.forEach(function (btn) {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id === "left" ? -firstCardWidth : +firstCardWidth;
  });
});

const products = document.querySelectorAll(".products");

products.forEach(function (btn) {
  btn.addEventListener("click", function () {
    window.open("http://127.0.0.1:5500/singleproduct.html", "_blank");
  });
});

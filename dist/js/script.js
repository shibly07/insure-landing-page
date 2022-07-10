const btnHumburger = document.querySelector(".header__toggle");

const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".header__overlay");
const fade = document.querySelectorAll(".has-fade");

btnHumburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");

    fade.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");

    fade.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

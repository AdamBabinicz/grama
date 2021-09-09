const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "rgba(236, 18, 102, 0.965)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
menu_item.forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
// popup
const selectElement = function(element) {
  return document.querySelector(element);
};

let closeBox = selectElement(".clo");
let x = selectElement(".popup_box");

closeBox.addEventListener("click", () => {
  x.classList.add("close");
});

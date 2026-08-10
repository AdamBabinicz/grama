const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger",
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul a");
const header = document.querySelector(".header.container");

// Obsługa hamburgera
if (hamburger && mobile_menu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
}

// Zmiana tła nagłówka podczas skrolowania
if (header) {
  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "rgba(236, 18, 102, 0.965)";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
}

// Zamykanie menu po kliknięciu w link
if (menu_item && hamburger && mobile_menu) {
  menu_item.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });
  });
}

// Popup helper
const selectElement = function (element) {
  return document.querySelector(element);
};

let closeBox = selectElement(".clo");
let x = selectElement(".popup_box");

// Zabezpieczenie przed błędem, gdy na stronie nie ma elementów .clo oraz .popup_box
if (closeBox && x) {
  closeBox.addEventListener("click", () => {
    x.classList.add("close");
  });
}

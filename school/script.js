document.querySelector(".card-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// const arrows = []; // document.querySelectorAll Pobierasz wszystkie checki
// const boxes = []; // document.querySelectorAll Pobierasz wszystkie boxy

// arrows.forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         const indexOfArrow = arrows.indexOf(arrow);
//         boxes[indexOfArrow].classList.toggle("open");
//     })
// })

for (let i = 1; i <= 100; i++) {
  document.querySelector(`.check${i}`).addEventListener("click", () => {
    document.querySelector(`.box${i}`).classList.toggle("open");
  });
}

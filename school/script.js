// Zabezpieczenie dla przycisku karty
const cardBtn = document.querySelector(".card-btn");
if (cardBtn) {
  cardBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    if (container) {
      container.classList.toggle("change");
    }
  });
}

// Bezpieczna pętla - sprawdza czy dany element istnieje przed dodaniem zdarzenia
for (let i = 1; i <= 100; i++) {
  const checkEl = document.querySelector(`.check${i}`);
  const boxEl = document.querySelector(`.box${i}`);

  if (checkEl && boxEl) {
    checkEl.addEventListener("click", () => {
      boxEl.classList.toggle("open");
    });
  }
}

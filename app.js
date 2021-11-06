// 1.
const slides = document.querySelectorAll(".slide");

// 2. Пройти цыклом по каждому из слайдов и добавить к нему определенного слушателя
// Два способа прохода по массиву 1. for ( of ). 2. forEach
// 2.1 Первый способ
// for (const slide of slides) {
//   slide.addEventListener("click", () => {
//     clearActiveClasses();
//     // добавляем активный класс
//     slide.classList.add("active");
//   });
// }

// 2.2.1 Второй способ метод forEach
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
});

// 3. Убираем класс у неактивной картинки

function clearActiveClasses() {
  // 2.2.2 Второй способ метод forEach
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

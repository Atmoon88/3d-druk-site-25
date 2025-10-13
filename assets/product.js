document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slides.length) return; // якщо фото нема – нічого не робимо

  let index = 0;
  slides[index].classList.add("active");

  function showSlide(newIndex) {
    slides[index].classList.remove("active");
    index = (newIndex + slides.length) % slides.length; // обертання по колу
    slides[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
});

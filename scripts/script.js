const ratingContainer = document.querySelector(".container-rating");
const thanksContainer = document.querySelector(".container-thanks");
const btnRating = document.querySelectorAll(".btn");

const btnSubmit = document.querySelector("#btn-submit");
const ratesResult = document.querySelector("#rating");

btnSubmit.addEventListener("click", () => {
  thanksContainer.style.display = "flex";
  ratingContainer.classList.add("hidden");
});

for (let i = 0; i < btnRating.length; i++) {
  const e = btnRating[i];
  e.addEventListener("click", () => {
    btnRating.forEach((element) => {
      element.classList.remove("selected");
    });

    e.classList.add("selected");
    ratesResult.innerHTML = e.innerHTML;
    if (e.classList.contains("selected")) {
      btnSubmit.disabled = false;
    }
  });
}

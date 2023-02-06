let findButton = document.querySelectorAll(".numbers button");
let countSpan = document.querySelectorAll(".numbers button");
let textresult = document.querySelector(".back--insertResult");
let btnSubmit = document.querySelector(".btnSubmit");
let MainContain = document.querySelectorAll(".contain");

for (let i = 0; i < findButton.length && countSpan.length; i++) {
  const buttonsClicked = findButton[i];
  const spansActive = countSpan[i];

  buttonsClicked.addEventListener("click", () => {
    var resultClick = buttonsClicked.value;
    textresult.innerHTML = resultClick;
    countSpan.forEach((span) => {
      span.classList.remove("active");
      btnSubmit.disabled = false;
    });
    spansActive.classList.add("active");
  });
}

btnSubmit.addEventListener("click", () => {
  for (let i = 0; i < MainContain.length; i++) {
    const element = MainContain[i];
    MainContain.forEach((contain) => {
      if (contain.style.display == "none") {
        contain.style.display = "flex";
      } else {
        contain.style.display = "none";
      }
    });
    element.style.display = "flex";
  }
});

const card = document.querySelectorAll('[data-js="qcard"]');

card.forEach((card) => {
  const bookmarkButton = card.querySelector('[data-js="bookmarkbutton"]');
  const filledBookmark = card.querySelector('[data-js="bookmarkjs"]');
  bookmarkButton.addEventListener("click", () => {
    filledBookmark.classList.toggle("bookmark__button--active");
  });

  const showAnswerButton = card.querySelector('[data-js="showAnswerButton"]');
  const answerShow = card.querySelector('[data-js="answer"]');
  showAnswerButton.addEventListener("click", () => {
    answerShow.classList.toggle("qcard__answer__show");

    const test = showAnswerButton.innerText;
    if (test === "Show answer") {
      showAnswerButton.textContent = "Hide answer";
    } else {
      showAnswerButton.textContent = "Show answer";
    }
  });
});

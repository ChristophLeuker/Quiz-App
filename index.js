const bookmarkButton = document.querySelector('[data-js="bookmarkbutton"]');
const filledBookmark = document.querySelector('[data-js="bookmarkjs"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const answerShow = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", () => {
  filledBookmark.classList.toggle("bookmark__button--active");
});

showAnswerButton.addEventListener("click", () => {
  answerShow.classList.toggle("qcard__answer__show");
  /* showAnswerButton.textContent = "Hide answer"; */
  const test = showAnswerButton.textContent;
  if (test === "Show answer") {
    showAnswerButton.textContent = "Hide answer";
  } else {
    showAnswerButton.textContent = "Show answer";
  }
});

/* function bm() {
  const addBookmark = document.getElementById("testbm");
  addBookmark.classList.toggle("bookmark__button--active");
}
 */

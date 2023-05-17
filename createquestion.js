const form = document.querySelector('[data-js="createform"]');

const questionInput = document.querySelector('[data-js="yourQuestion"]');
const questionLeftLetters = document.querySelector(
  '[data-js="questionleftletters"]'
);
const answerInput = document.querySelector('[data-js="yourAnswer"]');
const answerLeftLetters = document.querySelector(
  '[data-js="answerleftletters"]'
);

questionInput.addEventListener("input", () => {
  const questionLength = questionInput.value.length;
  questionLeftLetters.textContent =
    "Noch " + (250 - questionLength) + " Wörter";
});
answerInput.addEventListener("input", () => {
  const answerLength = answerInput.value.length;
  answerLeftLetters.textContent = "Noch " + (250 - answerLength) + " Wörter";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  form.reset();

  const newQuestion = document.createElement("section");
  const newQuestionText = document.createElement("p");
  const showAnswerButton = document.createElement("button");
  const newAnswerText = document.createElement("p");
  const newBookmarkbutton = document.createElement("button");

  const tagsListUl = document.createElement("ul");
  const tagsListLi = document.createElement("li");

  newQuestion.classList.add("qcard");
  newQuestionText.classList.add("qcard__question");
  showAnswerButton.classList.add("qcard__answerbutton");
  newAnswerText.classList.add("qcard__answer");
  newBookmarkbutton.classList.add("buttontest");

  tagsListUl.classList.add("qcard__tags");
  tagsListLi.classList.add("qcard__tags--list");

  newQuestionText.textContent = data.yourQuestion;
  showAnswerButton.textContent = "Show answer";
  showAnswerButton.setAttribute("type", "button");
  newAnswerText.textContent = data.yourAnswer;
  newBookmarkbutton.setAttribute("type", "button");
  tagsListLi.textContent = data.yourtags;

  newBookmarkbutton.innerHTML = `
  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-bookmark bookmark__button-svg"
              data-js="bookmarkjs"
              viewBox="0 0 16 16"
              
              
            >
              <path
                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
              />
            </svg>`;

  document.body.append(newQuestion);
  newQuestion.append(newQuestionText);
  newQuestion.append(showAnswerButton);
  newQuestion.append(newAnswerText);
  newQuestion.append(newBookmarkbutton);
  newQuestion.append(tagsListUl);
  tagsListUl.append(tagsListLi);
});

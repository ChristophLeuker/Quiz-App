const bookmarkButton = document.querySelector('[data-js="bookmarkbutton"]');
const filledBookmark = document.querySelector('[data-js="bookmarkjs]');

/* bookmarkButton.addEventListener("click", () => {
  filledBookmark.classList.add("bookmark__button--active");
}); */

function bm() {
  const addBookmark = document.getElementById("testbm");
  addBookmark.classList.toggle("bookmark__button--active");
}

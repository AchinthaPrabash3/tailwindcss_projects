// Add JavaScript code here
const show = document.getElementById("men-btn"),
  menue = document.getElementById("men-el"),
  hide = document.getElementById("hide"),
  containerEl = document.getElementById("container"),
  cardEl = document.getElementById("card"),
  leftBtn = document.getElementById("left"),
  rightBtn = document.getElementById("right");

const menuBar = () => {
  show.addEventListener("click", () => {
    menue.classList.toggle("-translate-x-full");
  });
  hide.addEventListener("click", () => {
    menue.classList.toggle("-translate-x-full");
  });
};
menuBar();

const carosell = () => {
  rightBtn.addEventListener("click", () => {
    let cardWitdth = cardEl.clientWidth;
    let m = (containerEl.scrollLeft += cardWitdth);

    console.log(cardWitdth);
  });
  leftBtn.addEventListener("click", () => {
    let cardWitdth = cardEl.clientWidth;
    containerEl.scrollLeft -= cardWitdth;
    console.log(cardWitdth);
  });
};
carosell();
const resrt = () => {
  containerEl.scrollLeft = 0;
};

const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const count = document.getElementById("count");

let counter = 0;

clickButton.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  count.innerHTML = counter;
});
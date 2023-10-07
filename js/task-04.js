const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});
function updateCounter() {
  valueSpan.textContent = counterValue;
}

const validationInput = document.querySelector("#validation-input");
const dataLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();

  if (inputValue.length === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

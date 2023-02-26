const inputText = document.querySelector('#validation-input')

inputText.addEventListener('blur', (Event) => {
    if (Event.currentTarget.value.length == inputText.getAttribute('data-length')) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});


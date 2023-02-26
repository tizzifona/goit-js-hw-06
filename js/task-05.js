const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output')

inputValue.addEventListener('input', (Event) => {
    if (Event.currentTarget.value === '') {
        outputValue.textContent = "Anonymous";
    }
    else {
        outputValue.textContent = Event.currentTarget.value;
    }
}) 
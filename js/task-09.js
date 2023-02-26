const body = document.querySelector('body');
const colorBtn = document.querySelector('button.change-color');
const newColor = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorBtn.addEventListener('click', (Event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  newColor.textContent = color;
})
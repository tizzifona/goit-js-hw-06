const numberEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const collectionEl = [];
  for (let i = 0; i < amount; i++) {
    const newEl = document.createElement('div');
    newEl.style.height = `${30 + i * 10}px`;
    newEl.style.width = `${30 + i * 10}px`;
    newEl.style.background = getRandomHexColor();
    collectionEl.push(newEl);
	}
  return collectionEl;
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

createBtn.addEventListener('click', () => {
  let newBoxes = createBoxes(numberEl.value);
  boxes.append(...newBoxes);
})

console.log(numberEl.value);

destroyBtn.addEventListener('click', () => {
  destroyBoxes.call();
})
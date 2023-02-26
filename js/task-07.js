const changeSize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

changeSize.addEventListener('input', (Event) => {
    changeText.style.fontSize = Event.target.value + 'px';
})
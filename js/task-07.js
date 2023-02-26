const changeSize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

changeSize.addEventListener('input', (event) => {
    changeText.style.fontSize = event.target.value + 'px';
})
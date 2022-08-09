const paintboard = document.querySelector('.paintboard');

for (let i = 1; i < 257; i++) {
    paintboard.innerHTML += `<div class="gridfield ${i}"></div>`;
};

const gridfields = document.querySelectorAll('.gridfield');

let mouseDown = false
window.onmousedown = () => (mouseDown = true);
window.onmouseup = () => (mouseDown = false);

gridfields.forEach(gridfield => gridfield.addEventListener('mouseover', colorFillHover));
gridfields.forEach(gridfield => gridfield.addEventListener('click', colorFillClick));


function colorFillHover() {
    git
    if (mouseDown) {
        console.log('hover');
    };
};

function colorFillClick() {
    console.log('click');
};
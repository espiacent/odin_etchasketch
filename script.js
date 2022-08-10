const canvas = document.querySelector('.canvas');

for (let i = 1; i < 257; i++) {
    canvas.innerHTML += `<div class="gridfield" id="${i}"</div>`;
};

const gridfields = canvas.querySelectorAll('.gridfield');

let mouseDown = false
window.onmousedown = () => (mouseDown = true);
window.onmouseup = () => (mouseDown = false);

canvas.addEventListener('mouseover', e => {
    if (mouseDown) {
        const position = (document.elementFromPoint(e.clientX, e.clientY));
        const gridId = position.id;
        document.getElementById(`${gridId}`).style.backgroundColor = "black";
    }
}, { passive: true })

canvas.addEventListener('click', e => {
    const position = (document.elementFromPoint(e.clientX, e.clientY));
    const gridId = position.id;
    document.getElementById(`${gridId}`).style.backgroundColor = "black";
}, { passive: true })

// const btn1 = document.querySelector('.size');
// const btn2 = document.querySelector('.canvascolor');
// const btn3 = document.querySelector('.pencolor');
const btn4 = document.querySelector('.clear');

// btn1.addEventListener('click', rock);
// btn2.addEventListener('click', paper);
// btn3.addEventListener('click', scissors);
btn4.addEventListener('click', clearCanvas);

function clearCanvas() {
    const canvas = document.querySelectorAll('.gridfield')
    canvas.forEach(field => {
        field.style.backgroundColor = "rgb(223, 223, 223)";
    });
}
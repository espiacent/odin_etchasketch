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

const dropdown1 = document.querySelector('.size');
const dropdown2 = document.querySelector('.canvascolour');
const dropdown3 = document.querySelector('.pencolour');
const button1 = document.querySelector('.clear');

dropdown1.addEventListener('change', (event) => {
    console.log(`${event.target.value}`);
});

dropdown2.addEventListener('change', (event) => {
    console.log(`${event.target.value}`);
});

dropdown3.addEventListener('change', (event) => {
    console.log(`${event.target.value}`);
});

button1.addEventListener('click', (event) => {
    const canvas = document.querySelectorAll('.gridfield')
    canvas.forEach(field => {
        field.style.backgroundColor = "rgb(223, 223, 223)";
    });
});


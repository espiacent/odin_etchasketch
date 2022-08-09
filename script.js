const paintboard = document.querySelector('.paintboard');

for (let i = 1; i < 257; i++) {
    paintboard.innerHTML += `<div class="gridfield" id="${i}"</div>`;
};

const gridfields = paintboard.querySelectorAll('.gridfield');

let mouseDown = false
window.onmousedown = () => (mouseDown = true);
window.onmouseup = () => (mouseDown = false);

paintboard.addEventListener('mouseover', e => {
    if (mouseDown) {
        const position = (document.elementFromPoint(e.clientX, e.clientY));
        const gridId = position.id;
        document.getElementById(`${gridId}`).style.backgroundColor = "black";
        console.log(gridId);
    }
}, { passive: true })
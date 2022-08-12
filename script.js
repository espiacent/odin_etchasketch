// generate grid as canvas
const canvas = document.querySelector('.canvas');
for (let i = 1; i < 257; i++) {
    canvas.innerHTML += `<div class="gridfield" id="${i}"</div>`;
};

// global penCoulour value
window.penColour = 'black';

// paint by mouse click and hold
let mouseDown = false
window.onmousedown = () => (mouseDown = true);
window.onmouseup = () => (mouseDown = false);

canvas.addEventListener('mouseover', e => {
    if (mouseDown) {
        const randomise = Math.floor(Math.random() * 16777215).toString(16);
        randomColour = "#" + randomise;
        const position = (document.elementFromPoint(e.clientX, e.clientY));
        const gridId = position.id;
        if (window.rainbow) {
            document.getElementById(`${gridId}`).style.backgroundColor = `${randomColour}`;
        } else {
            document.getElementById(`${gridId}`).style.backgroundColor = `${window.penColour}`;
        }
    }
}, { passive: true })

// paint by clicking
canvas.addEventListener('click', e => {
    const randomise = Math.floor(Math.random() * 16777215).toString(16);
    randomColour = "#" + randomise;
    const position = (document.elementFromPoint(e.clientX, e.clientY));
    const gridId = position.id;
    if (window.rainbow) {
        document.getElementById(`${gridId}`).style.backgroundColor = `${randomColour}`;
    } else {
        document.getElementById(`${gridId}`).style.backgroundColor = `${window.penColour}`;
    }
}, { passive: true })

// dropdowns for choices and clear button
const dropdown1 = document.querySelector('.size');
const dropdown2 = document.querySelector('.canvascolour');
const dropdown3 = document.querySelector('.pencolour');
const button1 = document.querySelector('.clear');

// change grid size (and reset other dropdowns)
dropdown1.addEventListener('change', (event) => {
    const resetdropdown2 = document.querySelector('.canvascolour');
    resetdropdown2.selectedIndex = 0;
    const canvas = document.querySelector('.canvas');
    const mult = event.target.value * event.target.value;
    canvas.style.gridTemplateColumns = `repeat(${event.target.value}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${event.target.value}, 1fr)`;
    canvas.innerHTML = "";
    for (let i = 1; i < (mult + 1); i++) {
        canvas.innerHTML += `<div class="gridfield" id="${i}"</div>`;
    };
});

// change grid colour
dropdown2.addEventListener('change', (event) => {
    const canvas = document.querySelectorAll('.gridfield');
    canvas.forEach(field => {
        if (event.target.value == 'black') {
            field.style.backgroundColor = `${event.target.value}`;
            field.style.borderColor = 'grey';
        } else {
            field.style.backgroundColor = `${event.target.value}`;
            field.style.borderColor = 'black';
        }
    });
});

// change pen colour
dropdown3.addEventListener('change', (event) => {
    if (dropdown3.selectedIndex == 8) {
        window.rainbow = true;
    } else {
        window.rainbow = false;
        window.penColour = `${event.target.value}`;
        const headline = document.querySelector('h1');
        headline.style.color = `${event.target.value}`;
    }
});

// clear grid and reset dropdowns and choices (not grid size)
button1.addEventListener('click', (event) => {
    window.rainbow = false;
    window.penColour = 'black';
    const resetdropdown2 = document.querySelector('.canvascolour');
    resetdropdown2.selectedIndex = 0;
    const resetdropdown3 = document.querySelector('.pencolour');
    resetdropdown3.selectedIndex = 0;
    const canvasAll = document.querySelectorAll('.gridfield');
    canvasAll.forEach(field => {
        field.style.backgroundColor = "rgb(223, 223, 223)";
    });
});

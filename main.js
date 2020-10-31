const input = document.querySelector('input');
const span = document.querySelector('span');
const drawBtn = document.querySelector('.draw');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.reset');
const mathSpan = document.querySelector('.math');
let number = '';

// function drawing random number from 0 to 100
const draw = () => {
    if(span.textContent === `Yes, drawn number is ${number}`) return alert('Please press clear button');
    number = Math.floor(Math.random() * 101);
    drawBtn.classList.add('used');
    mathSpan.textContent = `x = ${(number / 2) + 16} + ${(number / 2) - 16}`;
}

// function checking if number was drawing and if in input is a number
const check = (e) => {
    if (number === '') {
        e.target.value = '';
        alert('Please draw number');
    } else if (isNaN(e.target.value)) {
        alert('Please use only numbers');
        e.target.value = '';
    } 
    userNumber = e.target.value;
    
}
// Button check  
const checking = () => {
    if (number === '') {
        alert('Please draw number');
    } 
    else if (input.value == number) {
        span.textContent = `Yes, drawn number is ${number}`;
        resetBtn.classList.remove('active');
        
    } else if (input.value < number) {
        span.textContent = "It's a bigger number";
        resetBtn.classList.add('active');
    } else {
        span.textContent = "It's a smaller number";
        resetBtn.classList.add('active');
    }
}


// Reset button
const reset = () => {
drawBtn.classList.remove('used');
number = '';
span.textContent = '';
input.value = '';
resetBtn.classList.add('active');
mathSpan.textContent = '';
}




drawBtn.addEventListener('click', draw);
input.addEventListener('input', check);
checkBtn.addEventListener('click', checking);
resetBtn.addEventListener('click', reset);
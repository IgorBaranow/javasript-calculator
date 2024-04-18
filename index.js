const screen = document.querySelector('.calculator-screen__results');
let expression = [];

const button1 = document.querySelector('.button-1').addEventListener('click', function() {
    expression = expression + [1];
    screen.innerHTML = expression;
});
const button2 = document.querySelector('.button-2').addEventListener('click', function() {
    expression = expression + [2];
});
const button3 = document.querySelector('.button-3').addEventListener('click', function() {
    expression = expression + [3];
});
const button4 = document.querySelector('.button-4').addEventListener('click', function() {
    expression = expression + [4];
});
const button5 = document.querySelector('.button-5').addEventListener('click', function() {
    expression = expression + [5];
});
const button6 = document.querySelector('.button-6').addEventListener('click', function() {
    expression = expression + [6];
});
const button7 = document.querySelector('.button-7').addEventListener('click', function() {
    expression = expression + [7];
});
const button8 = document.querySelector('.button-8').addEventListener('click', function() {
    expression = expression + [8];
});
const button9 = document.querySelector('.button-9').addEventListener('click', function() {
    expression = expression + [9];
});
const button0 = document.querySelector('.button-0').addEventListener('click', function() {
    expression = expression + [0];
});
const buttonAc = document.querySelector('.button-AC').addEventListener('click', function() {
    expression = [];
});

const buttonDivide = document.querySelector('.button-divide').addEventListener('click', function() {
    expression = expression + ["/"];
});
const buttonMultiply = document.querySelector('.button-multiply').addEventListener('click', function() {
    expression = expression + ["*"];
});
const buttonMinus = document.querySelector('.button-minus').addEventListener('click', function() {
    expression = expression + ["-"];
});
const buttonPlus = document.querySelector('.button-plus').addEventListener('click', function() {
    expression = expression + ["+"];
});

const allButtons = document.querySelectorAll('button');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        screen.innerHTML = expression.slice(0,15);
    });
}

const buttonEqual = document.querySelector('.button-equal').addEventListener('click', function() {
    let result = eval(expression).toString();
    if (result.length > 15) {
        screen.innerHTML = result.slice(0 , 15) + "...";
    } else {
        screen.innerHTML = result;
    }
});



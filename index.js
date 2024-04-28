const screen = document.querySelector('.calculator-screen__results');
let expression = [];

for(let i=0; i < 10; i++) {
    document.querySelector('.button-' + i).addEventListener('click', function() {
        expression += [i];
    });
}

const buttonAc = document.querySelector('.button-AC').addEventListener('click', function() {
    expression = [];
});

const buttonDivide = document.querySelector('.button-divide').addEventListener('click', function() {
    expression += ["/"];
});
const buttonMultiply = document.querySelector('.button-multiply').addEventListener('click', function() {
    expression += ["*"];
});
const buttonMinus = document.querySelector('.button-minus').addEventListener('click', function() {
    expression += ["-"];
});
const buttonPlus = document.querySelector('.button-plus').addEventListener('click', function() {
    expression += ["+"];
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



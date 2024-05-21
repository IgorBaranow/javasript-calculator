const screen = document.querySelector('.calculator-screen__results');
let valueArray = [];
const operators = ['+', '-', '*', '/'];

// return true value (button on calculator) is operator
function isOperator(value) {
    return operators.includes(value);
}

function display(value) {
// check if the last element is an operator and the new value is also an operator
    if (isOperator(valueArray[valueArray.length - 1]) && isOperator(value)) {
// replacing the last operator with the new operator. even when old and new are the same
        valueArray[valueArray.length - 1] = value;
    } else {
// if not, just push new number 
        valueArray.push(value);
    }
// updating the display: joining array to string to get rig of commas  
    screen.innerText = valueArray.join('');
    console.log(valueArray);
}

function calculateResult() {
    // joining again because eval works just with strings
        let result = eval(valueArray.join(''));
        screen.innerText = result;
        // Save result for further calculations
        valueArray = [result];
}

function reset() {
    screen.innerText = '';
    valueArray = [];
}


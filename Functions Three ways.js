//Function declaration
function declaration(num1, num2) {
    let sumUp = num1 * num1 * num2 * num2;
    let answer = sumUp * sumUp;
    return answer;
};

let result = declaration(2, 3);
console.log(result);

//Function expression
let expression = function (num1, num2) {
    let sumUp = num1 * num1 * num2 * num2;
    let answer = sumUp * sumUp;
    return answer;
};

let result = expression(2, 3);
console.log(result);

//Arrow functtion
const arrow = (num1, num2) => {
    let sumUp = num1 * num1 * num2 * num2;
    let answer = sumUp * sumUp;
    return answer;
};
let result = arrow(2, 3);
console.log(result);
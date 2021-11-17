//Checking if a number is big
let biggerThan = function (num) {
    //Check number
    if (num > 100) {
        return true;
    }
    return false;
};
z
let result = biggerThan(120);
console.log(result);
//What kind of function is this?
//- Return function.

//Bouncer at a club
let clubValue = function (max, age) {
    //Check number
    if (max > 100) {
        return 'Its too busy now, come back later';
    }

    if (age < 18) {
        return 'This is a club for adults';
    }
    return 'Come in';
};

let result = clubValue(99, 18);
console.log(result);
//What kind of function is this?
//- MultipleReturn function.


//Calculating the average
let averageNumber = function (num1, num2, num3, num4, num5) {
    //Check number
    let count = (num1 + num2 + num3 + num4 + num5);
    return count / 5;

};

let result = averageNumber(1, 2, 3, 4, 5);
console.log(result);
//What kind of function is this?
//Parseint?
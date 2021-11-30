//Hey Kiddo
let ageCheck = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};
//////////////////////////////////////
let ageCheckSecond = function () {
    if (ageCheck(15)) {
        return 'Hello there';
    }
    return 'Hey Kiddo';
};
console.log(ageCheckSecond());

//VAT calculations
//VAT price
let vat = function (price) {
    price * 0.21;
};

//VAT price included
let vatSecond = function () {
    vat(100) * 1.21;
}
console.log(vatSecond());
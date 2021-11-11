let paint = function (color1, color2) {
    console.log('The wall has been painted ' + color1 + ' The south-east wall has been painted ' + color2);
}



paint('Red');
//Call function second time with another color
paint('Blue');
/*What happens if we call the function without an argument?
- Doesn't execute correctly*/

//Multiple arguments
paint("Red", "Blue");
paint("Grey", "Yellow");

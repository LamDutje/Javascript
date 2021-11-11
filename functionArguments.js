let paint = function (color1, color2) {
    console.log('The wall has been painted ' + color1);

    console.log('The south-east wall has been painted ' + color2);
}

let colorChoiceA = 'Green'
let colorChoiceB = 'Orange'


paint(colorChoiceA);
//Call function second time with another color
paint(colorChoiceB);
/*What happens if we call the function without an argument?
- Doesn't execute correctly*/

//Multiple arguments???
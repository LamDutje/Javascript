let colors = [
    'Yellow',
    'Blue',
    'Red',
    'Orange'
];

let i = 0;
let text = "";

// While loop
while (colors[i]) {
    text += colors[i] + "<br>";
    i++;
}

//For loop
for (; colors[i];) {
    text += colors[i] + "<br>";
    i++;
}

//How many lines does my for loop and my while loop take? - 7 lines.
//How many lines does my forEach method take? - 1 line.
//What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why? - for Each. Shorter & easier to immediatly understand.


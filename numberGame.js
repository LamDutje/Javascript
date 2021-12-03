let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 25)];

function myFunction() {
    var person = prompt("Welcome! What is your name?", "Justin Bieber");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

btn.addEventListener('click', function () {
    let input = document.getElementById('userInput').value;
    if (input == number) {
        output.innerHTML = `You gussed right, your number was ${number}`
    } else if (input < number) {
        output.innerHTML = 'You guessed too low!'
    };
    if (input > number) {
        output.innerHTML = 'You guessed too high!'
    }
})


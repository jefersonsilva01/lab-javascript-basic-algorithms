// Iteration 1: Names and Input
const hacker1 = "Jef";
console.log("The driver's name is " + hacker1);
const hacker2 = "Fab";
console.log("The driver's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, if has ' + hacker1.length + ' characters.')
} else if (hacker1.length < hacker2.length) {
  console.log('It seems tha te navigator has the longest name, it has ' + hacker2.length + ' characters.')
} else {
  console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!')
}

// Iteration 3: Loops
let newName = ""
for (let i = 0; i < hacker1.length; i++) {
  newName += (hacker1[i] + " ");
}
console.log(newName.toUpperCase());
console.log(hacker2.split('').reverse().join(''));

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in condimentum ipsum. Aenean in dignissim mi. Integer vehicula a nibh nec molestie. Nullam sed lobortis magna. Donec id sollicitudin ipsum, non sagittis urna. Vivamus quis arcu sodales, vestibulum nisi eget, feugiat dui. Donec eget feugiat risus, quis lobortis mi. Phasellus posuere vulputate lacus efficitur gravida. Pellentesque felis felis, consectetur vel pharetra in, consectetur ac ligula.

Nullam in leo vel arcu rhoncus maximus. Nam rhoncus ex malesuada dolor elementum cursus. Pellentesque a laoreet augue, vel interdum libero. Cras a ullamcorper velit. Proin ultrices eros ut sodales elementum. Duis sit amet est vulputate, euismod ligula vitae, accumsan nulla. Aenean semper, tortor id posuere tincidunt, ligula lacus rhoncus quam, non auctor lorem nisl faucibus lacus.

Nullam ultricies, magna egestas facilisis venenatis, lacus orci sodales neque, vel consequat erat tortor sed mauris. Morbi rutrum mollis dapibus. Cras maximus, ipsum eget commodo consectetur, purus quam sodales ipsum, eu laoreet urna nisl ac eros. Fusce ut neque eget risus ultrices feugiat ut eu risus. Ut a urna fermentum, scelerisque turpis eget, vestibulum lorem. Aliquam id arcu dui. Vestibulum vehicula rhoncus auctor. Donec tempus est ac blandit rutrum. Maecenas finibus finibus mauris ac feugiat. Mauris nunc tellus, porttitor id imperdiet id, rhoncus eu nisi. Pellentesque sit amet massa ac magna sodales pretium at et magna. Aenean nec quam at justo feugiat consequat. Aenean dignissim fringilla pretium. Quisque sagittis tortor vel arcu pulvinar consequat.`

console.log(longText.split(' ').length);

let count = 0;
for (let i = 0; i <= longText.split(' ').length; i++) {
  if (longText.split(' ')[i] === 'et') {
    count++
  }
}
console.log(count);

// Bonus 2
let phraseToCheck = "stack cats";

let newPharse = ""
for (let i = 0; i < phraseToCheck.length; i++) {
  switch (phraseToCheck[i]) {
    case " ":
    case "?":
    case ",":
    case "'":
    case "!":
      break;
    default:
      newPharse += phraseToCheck[i].toLowerCase();
  }
}

let result = " "

let position = 1
for (let i = 0; i < newPharse.length; i++) {
  if (newPharse[i] === newPharse[newPharse.length - position]) {
    result = true
  }
  position++
}
console.log('result: ', phraseToCheck, newPharse, result)
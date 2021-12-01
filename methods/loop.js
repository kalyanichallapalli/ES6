//The For/Of Loop
let n = 0;

while (n < 3) {
  n++;
}
console.log(n);

//DO WHILE
let i = 0;
let result = '';
do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

console.log(text)
//Looping over a String
let language = "JavaScript";
let text1 = "";

for (let x of language) {
    text1 += x + " ";
}
console.log(text1)


let arr1 = [2,3,4,5,6];
let arr2 =[];

for(let i=0; i<arr1.length; i++){
    arr2.push(arr1[i] * i);
}

console.log(arr2)

//for of loop iirator 

let s = [80, 90, 70];

for (let i of s) {
    i = i * 5;
    console.log(i);
}
let colors = ['Red', 'Green', 'Blue'];
for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

//
let scores = [1,2,3];
scores.message = 'Hi';

console.log("for...in:");
for (let score in scores) {
  console.log(score); 
}

console.log('for...of:');
for (let score of scores) {
  console.log(score);
}
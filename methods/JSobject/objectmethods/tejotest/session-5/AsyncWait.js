//Async call/wait
//The keyword async before a function makes the function return a promise:
async function hello() { return "Hello" };
console.log(hello());
//You can also create an async function expression, like so:
let hallo = async function hello() { return "Hello" };
console.log(hello);
//using Arrow function 
let hello1 = async () => "javascript";
console.log(hello1)
//To actually consume the value returned when the promise fulfills, 
//since it is returning a promise, we could use a .then() block:
hello1().then((value) => console.log(value))
//or even just shorthand such as
hello1().then(console.log)
//The await keyword
//The advantage of the Async function becomes apparent(clear or visible) when we use a AWAIT keyword
// infront of async promise-based function

async function hello() {
    return await Promise.resolve("Hello");
  };
  
  hello().then(console.log);
//
async function first() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
    console.log(result); 
    }
first();
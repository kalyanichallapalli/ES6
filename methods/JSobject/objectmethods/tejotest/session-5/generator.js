//The Generator object is returned by a generator function and 
//it conforms to both the iterable protocol and the iterator protocol.
//ES6 introduces a new kind of function that is different from a regular function: 
//function generator or generator 
// //A generator can pause midway and then continues from where it paused. For example:
// function* generate() {
//     console.log('invoked 1st time');
//     yield 1;
//     console.log('invoked 2nd time');
//     yield 2;
// }
// let gen = generate();
// console.log(gen)
// let result = gen.next();
// console.log(result);
// result = gen.next();
// console.log(result);

//regular function 
// function foo() {
//     console.log('I');
//     console.log('cannot');
//     console.log('pause');
// }
// foo();

function* generate() {
    console.log('first time ');
    yield 1;
    console.log('second time ');
    yield 2;
    console.log('third time ');
    yield 3;
    console.log('4th time ');
   
}
let gen = generate();
console.log(gen)//So, a generator returns a Generator object without executing its body when it is invoked.
//The following calls the next() method on the Generator object:
//The yield statement returns 1 and pauses the generator at line 2.
// let result = gen.next();
// console.log("invoke next() first time ::",result);
// result = gen.next();
// console.log("invoke next() second time ::",result); 
// result = gen.next();
// console.log("invoke next() third time ::",result);
// result = gen.next();
// console.log("invoke next() 4th time ::",result);
//Since a generator is iterable, you can use the for...of loop:
for (const g of gen) {
    console.log(g);
}


//Rest operator

function myData(name,...args){
    console.log(name) 
    console.log(args); // ["Marina",24,"Front-End Developer"]
    }
    myData("Marina",24,"Front-End Developer") ;
//Spread operator 

let obj ={
   firstname:'kalyani',
   lastname: 'challapalli',
   Dob: '06-03-1985'
}

let newobj = {...obj}
console.log(newobj)
let num = [1,2,3,4,5,6,7]
console.log(...num,8,9)
//forEach
const fruits = ["apple", "orange", "cherry","banana"];
fruits.forEach(myFunction);
function myFunction(item, index) {
    let text = '';
        text += index + ": " + item
    
     console.log (text)
  }
  //Map: 

  let newarr = num.map((item)=>{ return item * 2})
  console.log(newarr)

  //slice
  console.log(fruits.slice(0,3))
  //splice
  const fruit = ["apple", "orange", "cherry","banana"];
  fruit.splice(2, 0, "Lemon", "Kiwi");
  console.log(fruit)
  fruit.splice(0,3)
  console.log(fruit)

//Array destructuring 
let fullname = ["kalyani", 'reddy' ,"challapalli"]
const[firstname, middlename,lastname ]  = fullname;
console.log(firstname, lastname)
//object destructuring
let car = {brand:'Ford', model:'Mustang', color:'yellow', year:'2000'}
 function mycar({brand, model, color, year}){
    
  const message = 'my '+brand+' '+model+' is ' +color+ ' color'
    console.log (message)
 }
 mycar(car)
// promise all
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

//Promise allsettle()
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promise3 = 42;
// const promises = [promise1, promise2,promise3];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));
//Promise.any()
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));
//Asyne/wait











































 
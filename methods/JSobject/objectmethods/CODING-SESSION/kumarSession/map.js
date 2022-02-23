//      0 1 2 3
arr1 = [1,2,3,4];
// arr2 = arr1.map((e) => { return e * 2})
// console.log(arr2)
// arr1.forEach(element => { console.log(element)
//     });
let arr3 = arr1.filter((value ,index) => {

   return   arr1[index]>3
})
console.log(arr3);
/*
index = 1     arr1[1]= 2     1>2 = false
index= 2       arr1[2]= 3      2>3 false
index = 3      arr[3]= 4       3>4  true 


*/

let str = "hello world";
//"olleh dlrow";//split() , reverse  join 
let arr = str.split(' ').map((text)=>text.split('').reverse().join('')).join(' ')

console.log(arr); //ollew dlrow

let Astr ="Kalyani" 

let newstr = Astr.split('').reverse().join('')
console.log(newstr) //dlrow olleh

let rstr = Astr.split('')
let mymap = new Map();
for(let i=0; i<rstr.length; i++){

   mymap.set(rstr[i], mymap.has(rstr[i])? mymap.get(rstr[i]) +1: 1)

}
console.log(mymap);  
//intiger rewpitation
let arr4 = [1,1,1,2,2,3,3,4]
let Mymap = new Map();
for(let i=0; i<arr4.length; i++){

   Mymap.set(arr4[i], Mymap.has(arr4[i])? Mymap.get(arr4[i]) +1: 1)

}
console.log(Mymap);  

//even
let num = [2,3,4,5,6,7,8]
let evennum = num.filter((v,i)=>{
   return i%2 == 0
})
console.log(evennum)

// let even1 = num.map((e) =>{return e%2== 0})
// console.log(even1)

//I want to get a map with each count of even numbers. 
//For example [1,2,2,4,8,8,8,7,10,10,6,8,2]
function Arraynum(arr){
   let mymap = new Map();
   for(let i=0; i<arr.length; i++){
      if (arr[i]%2 == 0){

         mymap.set(arr[i], mymap.has(arr[i])? mymap.get(arr[i])+ 1: 1)
      }
}

 return mymap
}
console.log(Arraynum[1,2,2,4,8,8,8,7,10,10,6,8,2])

//promise.all -> return result  if all promises reslved or reject 
//promise.allSettled - will return result for all promises ,


//how to make copy  of Object  or an array .

//shallow copy and deep copy 

//shallow comparison

//promise.race return result of first promise that is  resolved/rejected



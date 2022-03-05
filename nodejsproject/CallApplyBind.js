//clouse

function sum(a,b){
   let c ='Kalyani';
   let result = a +b;
   function displayname(){
      console.log(c)
      console.log(result)
   }
 displayname()
}
sum(2,3)

//call  pass arguments one by one 
const person ={
   firstname: 'kalyani',
   lastname: 'challapalli',
   fullname: function(){
      return this.firstname + " " + this.lastname ;
   }
}

 console.log(person.fullname())

//apply pass arguments in an array
let arr = [1,2,3,4,5,6,7];
const max = Math.max.apply(null,arr)
console.log(max)
//bind will return a new function which will accept the arguments this . array or from one object to another object
const person1 ={
   firstname: 'kalyani',
   lastname: 'challapalli',
   fullname: function(){
      return this.firstname + " " + this.lastname ;
   }
}

const member = {
   firstname:'Sudeep',
   lastname: 'chenchu'
}

let newperson = person1.fullname.bind(member)

console.log(newperson())
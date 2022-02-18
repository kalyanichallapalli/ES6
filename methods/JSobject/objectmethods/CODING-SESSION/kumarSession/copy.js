let arr1 = [1,2,3,4,5]

let newarr = JSON.parse(JSON.stringify(arr1)) //jason
console.log('JSon', newarr);
let newarr2 = [...arr1] //rest parameter
console.log('using rest', newarr2);
let newarr3 = arr1.concat()
console.log('using concat', newarr3); //conncat
let arrnew = arr1.slice()  
console.log('usingslice', arrnew) //slice

let person ={
    firstname: 'Kalyani',
    lastname: 'challapalli',
    age: 35
}
let person1 = Object.assign(person)
let newobj = JSON.parse(JSON.stringify(person)) //Json stringfy nad json parse
console.log('object copy using Json',newobj, )
let newperson = {...person}
console.log('object copy using rest',newperson, ) //rest
console.log('using object.assign', person1) //object.assign



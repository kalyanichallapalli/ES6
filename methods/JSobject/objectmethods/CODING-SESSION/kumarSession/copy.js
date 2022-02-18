let arr1 = [1,2,3,4,5]
let person ={
    firstname: 'Kalyani',
    lastname: 'challapalli',
    age: 35
}
let newarr = JSON.parse(JSON.stringify(arr1)) //jason
let newobj = JSON.parse(JSON.stringify(person))
console.log('JSon', newarr);
console.log('object copy using Json',newobj, )
let newarr2 = [...arr1] //rest parameter
let newperson = {...person}
console.log('using rest', newarr2);
console.log('object copy using rest',newperson, )
let newarr3 = arr1.concat()
console.log('using concat', newarr3); //conncat
// lnewpret  = {};
// newpr= person.concat();
// console.log('object copy using concat',newperson, )

let arrnew = arr1.slice()
console.log('usingslice', arrnew)


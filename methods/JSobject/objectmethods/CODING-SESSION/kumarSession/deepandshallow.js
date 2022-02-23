//deep copy
let orgvab = {
    name: 'kalyani',
    age : 37

}
let newvab = orgvab;
newvab.name = 'Kalyani Challapalli'
console.log(newvab)
//shallow copy

let shvariable = {
    firstname: 'Kalyani',
    lastname: 'Challapalli',
    age: 37,
    address: {
        house:1118,
        city: 'Mountain house',
        state: 'California',
        pin: 95391
    }
}
let newsh = Object.assign({}, shvariable);
newsh.age = 38
newsh.address.city = 'SFO';
newsh.address.house = 1234;

console.log(newsh)

//Shallow comparision

let obj1 = {
    num1: 30,
    num2: 70
}
let obj2 = {
    num1: 30,
    num2: 100000
}
 obj1 = obj2;
 console.log( 'shallow comparision is...................... ', Object.is(obj1,obj2))
 console.log('Are equal?....... -->', JSON.stringify(obj1) === JSON.stringify(obj2));
 if(obj1 === obj2){
    console.log ('true');
    } else {
        console.log( 'false');
    }
    


let obj3 = {
    num1: 30, 
    num2: 70
}
let obj4 = {
    num2: 30,
    num1: 70
}
 console.log( 'shallow comparision is ', Object.is(obj3,obj4))
 console.log('Are equal? -->', JSON.stringify(obj3) === JSON.stringify(obj4));
 if(obj3 === obj4){
    console.log ('true');
    } else {
        console.log( 'false');
    }
    










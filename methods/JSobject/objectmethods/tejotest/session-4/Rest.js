//Rest perameter or operator 

function add(...input) {

    let sum = 0;

    for(i of input ){
        sum+= i;
    }
     return sum;
}

console.log(add(2,3));
console.log(add(1,2,3,4,5))
console.log(add(100,200,300,400,500,600,10))

//

function display(firstname,lastname,...names) {

    console.log(firstname+ " "+lastname)
    console.log(names)
    console.log(names[0])
    console.log(names[1])
    
}

display("kalyani","challapalli","software","california")
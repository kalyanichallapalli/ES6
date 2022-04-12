const a = [1,1,0,1,1,0,2,3]; 

let obj = a.reduce((acc, item)=>{
    if(acc[item]){
        acc[item]++

    }
    else{
        acc[item]=1
    }
    return acc
}, {}) 
console.log(obj);

obj1 = { a: 404} ,
obj2 = obj1.a ,
obj2.a = 103, 
console.log(obj1) ,
console.log(obj2)
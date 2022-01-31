let users = [{ name: "syed", id: 9,
      address: {
        city: "Hyd",
        country: "India",},},
    {name: "Renu",id: 13,
      address: {
        city: "noida",
        country: "India",},},
    {name: "Niharika",id: 12,
      address: {
        city: "Hyd",
        country: "India",},},];
//   {
//     hyd:["syed","Niharika"],
//     Noida:[Renu]
//     }

let output = {};

users.forEach (a =>{            // a is the object value 
    if(output[a.address.city] === undefined){ // we are checking the output is undefined or not 
        output[a.address.city] = []      // if its undefined creating empty output array
      }
      output[a.address.city].push(a.name)   // then we are pushing the city and name in to the oiutput                    
      });  
    console.log(output);
// {
//     name: "syed",
//     id: 9,
//     city: "Hyd",
//     country: "India",
// }

users.forEach((a) => {
    a.city = a.address.city;
    a.country = a.address.country;
    delete a.address.city;
    delete a.address.country;
    delete a.address;},{})

//console.log(users)

let arr = [[2,3,4,[5,7,6,[8,9],[10]]]];
//arrayName.flat(Infinity)
//flat array using recursive function and  reducel
let newarray = arr.flat(Infinity)
//console.log(newarray)
//using Recursive Function
function recarr (arr){ 
    let newarr1 = [];
    for(let i = 0; i< arr.length; i++){
        Array.isArray(arr[i])?
           newarr1.push(...recarr(arr[i])):
            newarr1.push(arr[i]);
    }
    return newarr1;
}        
//console.log(recarr([[[2,3,4,[5,7,6,[8,9],[10]]]]]))
//






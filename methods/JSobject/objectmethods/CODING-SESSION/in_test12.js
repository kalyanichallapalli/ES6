//program to split array into smaller chunks
// O/P:
// [1, 2]
// [3, 4]
// [5, 6]
// [7, 8]
// I/P -[1,2,3,4,5,6,7,8]


function chunks(arr1, chunk){
    //let result =[];
   for(i=0; i<arr1.length; i += chunk){
    let tempArray;
    tempArray = arr1.slice(i, i + chunk);
    console.log(tempArray);
    //result.push(tempArray)
    }  
    //return result;
}
//console.log(chunks([1,2,3,4,5,6,7,8],2))

// replace hellow wercome  r with l 
let string = 'hellow wercome';
let newstr = '';
let index = 9;
let replacement = 'l';
let replaced = string.substring(0,index)+replacement+string.substring(index+1);
 console.log(replaced)
function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
  console.log(replaceAll('hellow wercome','r','l'))
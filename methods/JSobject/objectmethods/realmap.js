//given a string find all unique characters and its count
// Ex: BABBCA will print B - 3, A - 2, C - 1 
// let text = "ABABBC";

function characterCount(myString) {
    var arr1 = myString.split('');
    var map = new Map();
    for (let i=0;i<arr1.length;i++){
        var count = 0;
        if (map.has(arr1[i])) {   
            count = map.get(arr1[i]); // get gives value of key
            count = count +1;
        } else {
            count = 1;
        }
        map.set(arr1[i], count); // B -> 2, A -> 1,  
    }
    return map;
}
//console.log(characterCount('ABCDABC'))
console.log(characterCount('BABBCA'))

//given a string find all unique characters and print them. 
// ex : BABBCA will output B A C

function string1(char1) {
    var arr1 = char1.split('');
    var visitedarr1 = new Set();
    for (let i=0;i<arr1.length;i++){
        visitedarr1.add(arr1[i]);
    }
    return visitedarr1;
}
console.log(string1("ABABBC"))
console.log(string1("BABBCA"))

//given a string find all unique characters and its count
// Ex: BABBCA will print B - 3, A - 2, C - 1 
// let text = "ABABBC";

function characterCount(myString) {
    var arr1 = myString.split('');
    var map = new Map();
    for (let i=0;i<arr1.length;i++){
        var count = 0;
        if (map.has(arr1[i])) {
            count = map.get(arr1[i]);
            count = count +1;
        } else {
            count = 1;
        }
        map.set(arr1[i], count);
    }
    return map;
}
console.log(characterCount('ABCDABC'))

// c.degree to f.degree
function temperature(temp) {
    console.log("temperature")
   var fahrenheitTemps = new Map();
   var ftemp = 0;
   for (let i = 0; i < temp.length; i ++) {
      ftemp = temp[i] * (9/5) + 32;
      
      fahrenheitTemps.set(temp[i],ftemp);
   }
   return fahrenheitTemps; 
}
console.log(temperature([22, 36, 71, 54]))

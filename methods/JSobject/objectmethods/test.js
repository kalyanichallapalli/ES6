function string1(char1) {
    var arr1 = char1.split('');
    console.log(arr1)
    var visitedarr1 = new Set();
    console.log(visitedarr1)
    for (let i=0;i<arr1.length;i++){
        visitedarr1.add(arr1[i]);
    }

    return visitedarr1;
}
console.log(string1("ABABBC"))
console.log(string1("BABBCA"))


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
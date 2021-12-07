function string1(char1) {
    var arr1 = char1.split('');
    console.log(arr1)
    var visitedarr1 = new Set();
    for (let i=0;i<arr1.length;i++){
        var first = arr1[i];
        var next = arr1[i+1];
        if (visitedarr1.has(next)) {
           
        } else {
            visitedarr1.add(first); //A
        }
    }
    return visitedarr1;
}
console.log(string1("ABABBC"))
console.log(string1("BABBCA"))

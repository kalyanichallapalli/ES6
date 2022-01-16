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
console.log(string1("BABBCAK"))
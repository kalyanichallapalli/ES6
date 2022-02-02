function maxoccer(str){
  let mymap = new Map();
    for (let i =0;i<str.length; i++){
        let char = str[i];
        if (mymap.has(char)) {
            let count = mymap.get(char);
            let newCount = count + 1;
            mymap.set(char, newCount);
        } else {
            mymap.set(char, 1);
        }
    }
    return mymap;

}
console.log(maxoccer('KALYANI'))

function stringMap(str){
    let newstr = str.split(' ')
    console.log(newstr)
    let mymap = new Map();
      for (let i =0;i<newstr.length; i++){
          mymap.set(newstr[i], mymap.has(newstr[i]) ? mymap.get(newstr[i]) + 1 : 1);
      }
   return mymap;
  }


console.log(stringMap('I am learning java script '))


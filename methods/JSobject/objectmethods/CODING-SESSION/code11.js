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

}

function maxoccer1(str){
    let mymap = new Map();
      for (let i =0;i<str.length; i++){
          mymap.set(str[i], mymap.has(str[i]) ? mymap.get(str[i]) + 1 : 1);
      }
  
  }

console.log(maxoccer('KALYANI'))
map -> {}
K
{K -> 1}
A
{K -> 1,
 A -> 1}

L 
{K -> 1,
    A -> 1, L -> 1}
Y 
{K -> 1,
    A -> 1, L -> 1}, Y -> 1}
A
{
    K -> 1,
    A -> 2, L -> 1}, Y -> 1 
}
N {
    K -> 1,
    A -> 2, L -> 1}, Y -> 1, N -> 1
}
I {
    K -> 1,
    A -> 2, L -> 1}, Y -> 1, N -> 1, I -> 1
}

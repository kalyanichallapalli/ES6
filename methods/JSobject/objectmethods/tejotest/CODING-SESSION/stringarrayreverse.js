let string = "hsiw,u,lla,yppah,samtsirhc";
var a = string.split(",");
for(let i= 0; i<a.length; i++){
    a[i] = reverse(a[i])
}
let b = a.join();
console.log(b)

function reverse(myString){
    var s = ""
    for (let i=myString.length-1;i>=0;i--) {
        s += myString[i];
    }
    return s;
}




















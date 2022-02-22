function volume(l,b,h){
    return l*b*h;
}
//console.log(volume(3,4,5))

//curryimg 
function volume1(l){
    return function(b){
        return function(h){
            return l*b*h;


        }
    }
}
console.log(volume1(3)(4)(5))

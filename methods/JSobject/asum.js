
function arraytot(num){
    var total = 0;
    for(let i =0; i<num.length; i++){
        total += num[i];

    } 
    
   return total;
}
console.log(arraytot([1,2,3,4]))
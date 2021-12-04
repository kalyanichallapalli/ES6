//check in an given array the sum of two indexes equal to given number 
function tejo_two_sum(num, value) {
    for (let i=0;i<num.length;i++){
        for (let j=i+1;j<num.length;j++){
            
            if (num[i] + num[j] == value){
       
            return [i, j]; 
            //return true;
                
        }   }
    }
    return [-1,-1];
    //return false;
}
    
console.log(tejo_two_sum([5,2,3], 5))
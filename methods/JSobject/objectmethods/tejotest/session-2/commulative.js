// Return cumulative single digit count of a number
// Ex: 93 - 9 +3 = 12 -> 1 + 2 = 3. Return 3
// Ex: 164 -> 1 + 6 + 4 = 11 -> 1 + 1 = 2 , return 2

function cumarray (num){
    var arr1 = num.toString().split("").map(Number);
    let cumnum = 0;
    for(let i=0; i<arr1.length; i++){     
    cumnum += arr1[i];
    }
    if(cumnum > 9){
       
        cumarray(cumnum);

    } 
    else {
        console.log(cumnum)
    }   

}
cumarray(93);
cumarray(164);

//console.log(Math.pow(3, 3));
let l1 =[2,4,3];
let l2 = [5,6,4];

var addTwoNumbers = function(l1, l2) {
    
    for(let i =0; i<l1.length; i++){
        sum += l1[i] + l2[i]
    }
        
     console.log(addTwoNumbers);   
};


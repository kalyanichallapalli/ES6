
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
cumarray(92);
cumarray(9234);
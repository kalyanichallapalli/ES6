function solution(inputArray){
    let a = 0;
    let b = 0;
    let p = -9999;
    for(let i=0; i<inputArray.length-1; i++){
        a=inputArray[i];
        b=inputArray[i+1];  
       if((a*b) > p){
         p=a*b;
       };
        
    };
    return p;
};
console.log(solution([3, 6, -2, -5, 7, 3]))
console.log(solution([-23, 4, -3, 8, -12]))



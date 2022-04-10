function factorial(x) { 
    let y = x.toString();
    let result = 0
    if(x===0){
        return 1
    }
    
for(let i= 0 ; i<y.length; i++){
    
    result +=  y[i] * factorial(y[i]-1);
           
}
  return result
}
  console.log(factorial(145));
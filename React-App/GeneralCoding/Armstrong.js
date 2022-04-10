function Armstrong(num){
  let newnum = num.toString()
  let result = 0; 
  for(let i=0; i<newnum.length; i++){
      result += newnum[i] *newnum[i] *newnum[i] 
  }
  if(result == num){
      return 'Armstrong number '
  }else{
      return 'not Armstrong'
  }
}

console.log(Armstrong(153))
console.log(Armstrong(151))
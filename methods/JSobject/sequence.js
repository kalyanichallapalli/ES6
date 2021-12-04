function sorted(num){
    let j;
	for(let i = 0; i< num.length; i++){
  	  j = i + 1;
      if(num[j] - num[i] > 1) return false;
    }
    return true;
}
console.log(sorted([100,101,102,103,104]))
console.log(sorted([120,40,20,300]))


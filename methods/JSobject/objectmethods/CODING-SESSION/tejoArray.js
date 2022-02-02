// array repeted integers
function Array1(arr){
    let mymap = new Map();
      for (let i =0;i<arr.length; i++){
          if (mymap.has(arr[i])) {
              let count = mymap.get(arr[i]);
              mymap.set(arr[i], count+1 );
          } else {
              mymap.set(arr[i], 1);
          }
      }
      return mymap;
  
  }
  //console.log(Array1([1,2,3,2,3,5,6,3]))

  //Given an array like [1,2,4,5,7,8], create a map of all even numbers 
  //and their repetitions
     let Array2 = [1,2,2,4,8,8,8,7,10,10,6,8,2];
     
      
     let  evemn = Array2.filter((i) => i%2 == 0)
   //   console.log(evemn)
//I want to get a map with each count of even numbers. 
//For example [1,2,2,4,8,8,8,7,10,10,6,8,2]
  function Array3(arr){
    let mymap = new Map();
    for (let i =0;i<arr.length; i++){
        if(arr[i]%2 == 0){
           if (mymap.has(arr[i])) {
                let count = mymap.get(arr[i]);
                mymap.set(arr[i], count+1 );
            } else{
                mymap.set(arr[i], 1);
        }
    }
    }
    return mymap;

  }    
  console.log(Array3([1,2,2,4,8,8,8,7,10,10,6,8,2]))

 
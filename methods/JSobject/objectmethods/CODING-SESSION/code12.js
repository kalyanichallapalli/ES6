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
  console.log(Array1([1,2,3,2,3,5,6,3]))
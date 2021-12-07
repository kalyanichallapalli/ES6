function display(some) {  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
}
  
  myPromise.then(
    function(value) {display(value);},
    function(error) {display(error);}
  );

  console.log(display([2,3]))
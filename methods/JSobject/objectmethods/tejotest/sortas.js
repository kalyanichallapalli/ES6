//array sort
let arr1 = [1,4,6,2,2,5,3];
let arr2 = [];
for (i=0; i<=arr1.length; i++){
    for (j=0; j <= arr1.length; j++){
        if (arr1[j] > arr1[i]){
            var x = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = x;
        }

    
        }
 }
//arr2 = arr1.sort();
console.log(arr1)

//
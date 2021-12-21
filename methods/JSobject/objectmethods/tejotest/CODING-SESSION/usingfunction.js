// Use Map
// Loop through and cunt each number and put in map
// Loop thorugh map and check max values. Return the one with max values

// uniqueCount = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// var count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(count);

/*function uniqueCount (arr){
    var count = new Map();
    var maxCount = 0;
    arr.forEach(function(i){
        if (count.has(i)) {
        count.set(i,count.get(i)+1);    
        } else {
            count.set(i,1); 
        }
        if (count.get(i) > maxCount){      
            maxCount = count.get(i) 
        } 
    });
    console.log(count)
    console.log(maxCount)
//     if (count(i) > maxCount){
    
//     let maxValue = 0;
     
//     if (count(i) > maxCount){
//         maxValue = i;
//         maxCount = itemsMap[i];
//     } 
// });  
 }


    // count => {12 -> 2, 10 -> 2, 8 ->1, 6 -> 1....}
    // maxCount = 2
    // count = count.filter((key => {
    //    count.get(key) == maxCount;
    // }));
    
    // count = {12 -> 2, 10 ->2

*/

//console.log(uniqueCount([12, 10, 8, 12, 7, 6, 4, 10, 12]));
// console.log(eliminateDuplicates([12, 10, 8, 12, 7, 6, 4, 10, 12,10]));
//console.log(eliminateDuplicates([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));

function findMaxOccurence(givenArray){
let itemsMap = {};
let maxValue = 0;
let maxCount = 0;
for (let i of givenArray) {

  if (itemsMap[i] == null) {
       itemsMap[i] = 1;
  } else {
       itemsMap[i]++;
  }
  if (itemsMap[i] > maxCount) {
    maxValue = i;
    maxCount = itemsMap[i];
  }
}
console.log('Value:', maxValue, "Count", maxCount);

}
findMaxOccurence([12, 10, 8, 12, 7, 6, 4, 10, 12]);
findMaxOccurence([12, 10, 8, 12, 7, 6, 4, 10, 12,10,10]);
findMaxOccurence([12, 10, 8,3,3,3,3,3,3,12, 7, 6, 4, 10, 12,10,10]);



    
    

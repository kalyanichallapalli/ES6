//check in an given array the sum of two indexes equal to given number 
// Time complexity - How effective your cprograms is
// Array of length n = 1000000
// For each element you are looping n times
// n * n - n square O(n2)
// O(n)
function tejo_two_sum(num, value) {
    for (let i=0;i<num.length;i++){
        for (let j=i+1;j<num.length;j++){
            console.log("comparing indeces " + i + " , " + j);
            if (num[i] + num[j] == value){
       
            return [i, j]; 
            //return true;
                
        }   }
    }
    return [-1,-1];
    //return false;
}

// Return true or false if there are two number in array which sums to given number
function two_sum_set(arr, number) {
    var visitedNumbers = new Set();
    for (let i=0;i<arr.length;i++){
        var currentNumber = arr[i];
        var balanceNumber = number - currentNumber;
        if (visitedNumbers.has(balanceNumber)) {
            return true;
        } else {
            visitedNumbers.add(currentNumber);
        }
    }
    return false;
}
// Return indices of two numbers in array which sums to given number
function two_sum_map(arr, number) {
    var visitedNumbers = new Map(); // number -> index
    for (let i=0;i<arr.length;i++){
        var currentNumber = arr[i];
        var balanceNumber = number - currentNumber;
        if (visitedNumbers.has(balanceNumber)) {
            return [visitedNumbers.get(balanceNumber), i];
        } else {
            visitedNumbers.set(currentNumber, i);
        }
    }
    return [-1,-1];
}
console.log(two_sum_map([5,2,4,1,1,1,2,3], 5))
console.log(two_sum_set([5], 5))
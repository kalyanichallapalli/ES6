// using arrow function 
// let calcAverage = (array) => array.reduce((a,b) => a+b)/array.length

//     console.log(calcAverage([44,23,71]))
//     console.log(calcAverage([65,54,49]))

// finding average for dolphins and koaleas
function average(arr1,arr2) {
    let avgDolphins= 0;
    let avgkoalas = 0;
    avgDolphins =  arr1.reduce((a, b) => (a + b)) / arr1.length,
    avgkoalas   =  arr2.reduce((a, b) => (a + b)) / arr2.length;

    //console.log(avgkoalas,avgkoalas)
     var avgs = {};
     avgs.avgDolphins = avgDolphins;
     avgs.avgkoalas = avgkoalas;
    // return avgs; 
}
//create function to checkWinner that takes the average of the each team as parameterrs 
function average(arr1,arr2) {
    let avgDolphins= 0;
    let avgkoalas = 0;
    avgDolphins =  arr1.reduce((a, b) => (a + b)) / arr1.length;
    avgkoalas   =  arr2.reduce((a, b) => (a + b)) / arr2.length;
    console.log(avgDolphins,avgkoalas)
    var avgs = {};
    avgs.avgDolphins = avgDolphins;
    avgs.avgkoalas = avgkoalas;
    
    if (avgs.avgDolphins > 2*avgs.avgkoalas){

        return "Dolphins win:" + ' '+ avgs.avgDolphins;
    }    
    else if(2*avgs.avgDolphins < avgs.avgkoalas){

       return "koaleas win:" + ' '+ avgs.avgkoalas;
    }    

    else {

      return " no winner ";
    }

}

console.log(average([44,23,71],[65,54,49]))
console.log(average([85,54,41],[23,34,27]))



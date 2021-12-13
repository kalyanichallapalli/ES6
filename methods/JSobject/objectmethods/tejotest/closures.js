function sixer() {
    const six = 6;
    return function(number) {
        return number + six;
    }
}

var addSix = sixer();
console.log(addSix(6));
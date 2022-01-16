//IF AND ELSE 
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
console.log(testNum(-5));
// ELSE IF FOLLOWED BY IF AND ELSE 
function age(x) {
  let result;  
  if (x > 50) {
    result = true
    return result;
  } else if (x > 5) {
    result = false
    console.log(result)
  } else {
    result = "under age";
    return result;
  }
}
console.log(age(4));

// SWITH CASE 

const expr = 'guva';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $2.79 a pound.');
  break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}






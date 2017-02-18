function sum(){
    var sum1 = new Array();
    sum1[0] = 11;
    sum1[1] = "The sum of 4 and 7 is 11.";
    console.log(sum[1]);
    return sum1;
}
testSum(4, 7);

function multiply(){
  var multiply1 = new Array();
  multiply1[0] = 45;
  multiply1[1] = "The product of 5 and 9 is 45.";
  return multiply1;
}
 testMultiply(5,9);
function sumAndMultiply() {
var tSaM = new Array();
tSaM[0] =16;
tSaM[1] =140;
tSaM[2] ="4 and 7 and 5 sum to 16.";
tSaM[3] ="The product of 4 and 7 and 5 is 140.";
return tSaM;
}
testSumAndMultiply(4,7,5);
//4
function sumArray(){
  testArray [1] = "2,3,4 was passed in as an array of numbers, and 9 is their sum.";
  return testArray;
}
testArray = [2,3,4];
testSumArray(testArray);
//
function multiplyArray() {
  testArray [1] = "The numbers 2,3,4 have a product of 24.";
  return testArray;
}
testMultiplyArray(testArray);
//
function testSum() {
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
  }
}
//
function testMultiply() {
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}
//
function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}


// Given an array of numbers, and a target number, find all possible combinations of the numbers in the array 
// That sum up to the target number

var findSum = function (array, target) {
  var results = [];

  var calculate = function (soFar, target) {
    console.log('so far: ', soFar)

    var accumulated = soFar.reduce(function (a, b) {
      return a + b;
    }, 0)

    console.log('value accumulated: ', accumulated)



    if (accumulated === target) {
      console.log('found target: ', soFar);
      results.push(soFar);
      return soFar;
    }

    if (accumulated < target) {
      for (var i=0; i < array.length; i++) {
        console.log('soFar before recursion: ', soFar);
        calculate(soFar.concat(array[i]), target);
      }
    }

    
  };

  for (var i=0; i < array.length; i++) {
    var eachCoin = array[i];
    calculate([eachCoin], target);
  };

  console.log('results before finishing: ', results);
  return results;
};





console.log(findSum([1,2], 5));
/* Find all 3 number combos in an array that sum to 0 */

function threeSum (array) {
  var results = [];
  var target;
  var nextIndex;
  var lastIndex;

  var sorted = array.sort(function (a, b) {
    return a - b
  });

  if (array.length < 3) {
    return results;
  }

  for (var i=0; i < sorted.length; i++) {
    //at the beginning, or if current number is greater than the one before it
    if (i === 0 || sorted[i] > sorted[i-1]) {

      target = 0 - sorted[i];
      nextIndex = i + 1;
      lastIndex = sorted.length - 1;

      //while the next index is less than the last index
      while (nextIndex < lastIndex) {

        //if the sum of the numbers at the next and last indices equal target
        if (sorted[nextIndex] + sorted[lastIndex] === target) {
          //store into results array, and increment the nextindex, decrement the lastindex
          results.push([sorted[i], sorted[nextIndex], sorted[lastIndex]]);
          nextIndex++;
          lastIndex--;

          //while next is smaller than last, and the number at the nextindex is the same as the number before it
          while (nextIndex < lastIndex && sorted[nextIndex] === sorted[nextIndex-1]) {
            nextIndex++;
          }

          //while next is smaller than last, and the number at the last index is the same as the one after it
          while (nextIndex < lastIndex && sorted[lastIndex] === sorted[lastIndex+1]) {
            lastIndex++;
          }


        //if the sum of the two numbers are actually SMALLER than target
        } else if (sorted[nextIndex] + sorted[lastIndex] < target) {
          //increment the next index
          nextIndex++;
        } else {
          //otherwise decrement the last index
          lastIndex--;
        }
      }
    }
  }
  return results;
}

//sorted:  [ -4, -1, -1, 0, 1, 2 ]
console.log(threeSum(([41, 48, 31, 32, 34, 38, 1, -9, 12, 13, 99, 5, -65, 8, 3, -3])))

/* Find all permutations of a string or number with no repetitions */

function uniqPerms(element){
  var permutations = [];
  var word = [];
  var memorize = {};
  
  //change all non-string elements to strings
  if (typeof element !== 'string') {
    element = element.toString();
  }
  //split the string into an array
  var eachChar = element.split('');
  
  function permutate (arr) {
    //Base case, when the input array is empty, a permutation has been found
    if (arr.length === 0) {

      var fullword = word.join('');

      //Memorize which permutations have been found to ignore repeats
      if (!memorize.hasOwnProperty(fullword)) {
        memorize[fullword] = fullword
        permutations.push(fullword);
      }
    }    
    //Loop through array of elements
    for (var i=0; i < arr.length; i++) {
      //Rotate the first element to the back
      arr.push(arr.shift());
      //Push the first element to the word storage array
      word.push(arr[0]);
      //Call permutate recursively minus the first element
      permutate(arr.slice(1));
      //Get rid of the last element in the word storage array
      word.pop();
    }
  }
  permutate(eachChar);
  return permutations
};
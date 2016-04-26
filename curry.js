/* Implement curry such that the passed in function executes on all arguments */

function curry (func) {
  //Get the total number of arguments the function argument expects
  var totalNumArgs = func.length;

  //Return an inner function to attack the next level of function arguments
  return function curriedFunc () {
    //Grab all the arguments from the first layer function
    var args = Array.prototype.slice.call(arguments);
    //Base case -- If the number of args in the first layer = the total number of args expected
    if (args.length === totalNumArgs) {
      //Apply the function to every argument of the first layer
      return func.apply(null, args);
    } else {
      //Otherwise, return another function to go into the second layer
      return function () {
        //Grab all the arguments from the second layer
        var args2 = Array.prototype.slice.call(arguments);
        //Recursively call curriedFunc, concatenating all of the arguments of all layers
        //Until the base case is met
        return curriedFunc.apply(null, args.concat(args2));
      };
    }
  };
};

var add = curry(function(a, b, c) {
  return a + b + c;
});

console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
console.log(add(1,2,3));
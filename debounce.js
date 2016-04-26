/* Implement debounce so that a function will not execute until specified to do so */

function debounce (func, wait, immediate) {
  var timeout;

  //Return an inner function to get the arguments of func
  return function () {
    //'this' is currently in reference to the window
    var context = this;
    var args = arguments;

    //if immediate is true, and state currently not in a timeout, then callNow = true
    var callNow = immediate && !timeout;
    //Get rid of the timeout if it exists
    clearTimeout(timeout);

    //Reset the timeout with the specified wait time 
    timeout = setTimeout(function () {
      //Clear out the timeout variable so the next execution can run in immediate mode if specified
      timeout = null;
      //If immediate is false, then execute the function based on wait time
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);

    // If callNow is true with no timer then immediately execute the function
    if (callNow) {
      func.apply(context, args);
    };

  };
};

var add = debounce(function (a, b) {
  return a + b;
}, 1000);

console.log(add(5,7))
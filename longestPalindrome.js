/* Given a string of n chars, find the longest palindrome inside */

function longestPalindrome (string) {
  var arr = string.split('');
  var allChars = ['#'];
  var results = [];

  arr.forEach(function (letter) {
    allChars.push(letter)
    allChars.push('#')
  });

  

  console.log(allChars)

};

console.log(longestPalindrome('garsracecarkewl'))
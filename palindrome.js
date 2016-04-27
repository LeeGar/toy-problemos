/* Given an unsorted string, see if it can be changed to have a palindrome */

// "MMO" = True
// "DOOR" = false

function palindrome (string) {
	var arr = string.split('');
	var letters = {};
	var counter = 1;
	var possible = false;
	var singles = 0;

	for (var i=0; i < arr.length; i++) {
		if (letters.hasOwnProperty(arr[i])) {
			letters[arr[i]]++;
		} else {
			letters[arr[i]] = counter;
		}
	};

	for (var key in letters) {
		singles += letters[key] % 2
	}

	return singles < 2 
};

console.log(palindrome('MMO'))
console.log(palindrome('DOOR'))
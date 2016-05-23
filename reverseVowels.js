var reverseVowels = function (string) {

	var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	var str = '';
	var foundVowels = [];

	for (var i=0; i < string.length; i++) {
		if (vowels.indexOf(string[i]) !== -1) {
			foundVowels.unshift(string[i])
		}
	};

	for (var i=0; i < string.length; i++) {
		if (vowels.indexOf(string[i]) !== -1) {
			str = str + foundVowels.shift();
		} else {
			str = str + string[i]
		}
	}
	return str
};

console.log(reverseVowels('leetcode'));
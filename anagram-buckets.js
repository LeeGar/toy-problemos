

function anagramBuckets (words) {
	var results = [];
	var bucket = {};

	for (var i=0; i < words.length; i++) {
		console.log('words: ', words[i], typeof words[i])
		if (!bucket[words[i]]) {
			bucket[words[i]] = words[i]
			console.log(bucket.hasOwnProperty(bucket[words[i]].reverse()))
		} else if (bucket[words[i]]) {
			console.log(bucket[words[i]].reverse())
			if (bucket.hasOwnProperty(bucket[words[i]].reverse())) {

			}
		}
	}
	console.log('bucket; ', bucket)
}

console.log(anagramBuckets(["star", "dogs", "rats", "arc", "car"]))
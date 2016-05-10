function StairCase(n) {
	var results = [];

	for (var i=n; i > 0; i--) {
		if (!results[i]) {
			results[i] = ' '
		}
		for (var j=0; j < results.length; j++) {

			if (!results[j]) {
				results[j] = ' ';
			}
			
		}
		results[i] = '#';
		//console.log('results: ', results)
		console.log('results: ', results.join(''))
	}
}

console.log(StairCase(6));
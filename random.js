function func (n) {
	if (n === 4) {
		return 2
	} else {
		return 2 * func(n+1)
	}
}

console.log(func(2))
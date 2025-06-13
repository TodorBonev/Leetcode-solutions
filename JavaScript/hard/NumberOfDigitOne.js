function countDigitOne(n) {
    let numArray = [];

	for (let i = 0; i <= n; i++) {
		numArray.push(i);
		}

    let digits = numArray.join('');
    let count = [...digits].filter(char => char === '1').length;
	
    return count;
}

console.log(countDigitOne(13))
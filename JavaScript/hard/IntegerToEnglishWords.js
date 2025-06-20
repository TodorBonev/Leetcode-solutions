function numberToWords(num) {
    if (num === 0) return "Zero";

    const belowTwenty = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    let result = "";
    let thousandIndex = 0;

    while (num > 0) {
        let part = num % 1000;
        if (part > 0) {
            result = helper(part, belowTwenty, tens) + (thousands[thousandIndex] ? ` ${thousands[thousandIndex]}` : "") + (result ? ` ${result}` : "");
        }
        num = Math.floor(num / 1000);
        thousandIndex++;
    }

    return result.trim();
}

function helper(num, belowTwenty, tens) {
    if (num === 0) return "";

    if (num < 20) {
        return belowTwenty[num];
    } else if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ` ${belowTwenty[num % 10]}` : "");
    } else {
        return belowTwenty[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? ` ${helper(num % 100, belowTwenty, tens)}` : "");
    }
}

console.log(numberToWords(123));
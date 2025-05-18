function plusOne(digits) {
    let number = Number(digits.join("")) + 1; 
    let newNumber = number.toString().split("").map(Number);
    
    return newNumber
}

console.log(plusOne(digits = [1,2,3]))
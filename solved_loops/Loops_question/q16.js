function permutationsOfThreeDigit(num) {
    let digits = num.toString().split(""); // split into array of digits
     for (let i = 0; i < 3; i++) {       // first digit
        for (let j = 0; j < 3; j++) {   // second digit
            for (let k = 0; k < 3; k++) { // third digit
                if (i !== j && j !== k && i !== k) { // all positions different
                    console.log(digits[i] + digits[j] + digits[k]);
                }
            }
        }
    }
}
permutationsOfThreeDigit(123);
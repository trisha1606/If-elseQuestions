function generateSequence(start, length) {
    let sequence = [start];

    for (let i = 1; i < length; i++) {
        let squared = sequence[i - 1] ** 2;

        // Calculate sum of digits
        let sumDigits = 0;
        while (squared > 0) {
            sumDigits += squared % 10;
            squared = Math.floor(squared / 10);
        }

        sequence.push(sumDigits);
    }

    return sequence;
}

// Example: start with 7, generate 10 numbers
console.log(generateSequence(5, 3));
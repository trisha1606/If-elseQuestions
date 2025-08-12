function collatzSequence(n, start) {
    let sequence = [];
    let current = start;
    for (let i = 0; i < n; i++) {
        sequence.push(current);
        if (current % 2 === 0) {
            current = current / 2; // Even
        } else {
            current = 3 * current + 1; // Odd
        }
    }
    return sequence;
}
console.log(collatzSequence(3,13));
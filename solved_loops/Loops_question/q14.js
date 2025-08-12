function countWays(n) {
    if (n === 0) return 0; // No stairs, no way
    if (n === 1) return 1; // Only 1 way (1 step)
    if (n === 2) return 2; // Two ways: (1+1) or (2)
    let first = 1; // Ways to reach step 1
    let second = 2; // Ways to reach step 2
    let total = 0;
 for (let i = 3; i <= n; i++) {
        total = first + second; // Ways to reach current step
        first = second;         // Shift forward
        second = total;
    }
return second; // Second now holds ways for step n
}
console.log(countWays(4)); // Output: 8
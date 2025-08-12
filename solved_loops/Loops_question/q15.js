function sumEvenFibonacci(n) {
    let a = 1; // first Fibonacci number
    let b = 2; // second Fibonacci number
    let sum = 0;
      while (b < n) {
        if (b % 2 === 0) {
            sum += b; // add even Fibonacci numbers
        }
        let next = a + b; // generate next term
        a = b;
        b = next;
    }
    return sum;
}
console.log(sumEvenFibonacci(100)); 

//perfect square and divisible by 3
function squareDivisible(num){
    let root= Math.sqrt(num);
    if (Number.isInteger(root) && num%3 === 0) {
        console.log("Perfect square and divisible by 3");
    } else {
              console.log("Invalid Input");
        }
    }
console.log(squareDivisible(9));

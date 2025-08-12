//divisible by 3 & 5 but not 7
function divisibleOrNot(n){
    if ((n%3===0) && (n%5===0) && (n%7!==0)){
        return "Valid";
    } else {
        return "invalid";
    }
}
console.log(divisibleOrNot(15));
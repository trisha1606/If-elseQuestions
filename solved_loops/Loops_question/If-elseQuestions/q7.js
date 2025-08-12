//number classification
function numberClassification(n){
    if (n<0 && n%2 !==0){
        return "negetive odd";
    } else if (n<0 && n%2 ===0){
        return "negetive even";
    } else if (n>0 && n%2 !==0){
        return "positive odd";
    } else if (n>0 && n%2 ===0){
        return "positive even";
} else {
    return "zero";
}
}
console.log(numberClassification(-4));
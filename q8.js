//point inside circle
function determinePosition (x,y,r){
    let distance = Math.sqrt(x*x+y*y);
    if (distance<r){
        return "inside the circle";
    } else if (distance>r) {
        return "outside the circle";
    } else if (distance===r){
        return "point lies on the circle";
    } else{
        return "invalid points";
    }
}
console.log(determinePosition(3,4,5));
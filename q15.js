// speed limit checker by road type
function speedLimit (speed,road){
    if (road ==="city" && speed >50){
        return "Over limit";
    } else if (road === "highway" && speed >100){
        return "Over speeding";
    } else{
        return "Invalid";
    }
}
console.log(speedLimit(60,"city"));
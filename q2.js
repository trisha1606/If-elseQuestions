
// temperature classification
function temperatureClassification(temperature) {
    if (temperature <=0){
        console.log("Freezing");
    } else if ((temperature >=1) && (temperature<= 15)) {
        console.log("Cool");
    } else if ((temperature >=16) && (temperature<= 25)) {
        console.log("Moderate");
    } else {
        console.log("Invalid Temperature");
    }
}
console.log(temperatureClassification(18))

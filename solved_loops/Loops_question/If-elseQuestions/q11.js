// time validity and period check
function timeValidity(hour, minute){
    if (hour>=12 && minute >=0){
        return "Valid PM";
    } else if (hour<=12 && minute >=0){
        return "Valid AM";
     } else {
            return "invalid!"
        }
    }
console.log(timeValidity(14,30));
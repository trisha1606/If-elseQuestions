// greeting based on time
function greetingBasedOnTime(time){
    if (time>= 5 && time<=11){
        return "Good Morning";
    } else if (time>= 12 && time<=16){
        return "Good Afternoon";
    } else if (time>= 17 && time<=21){
        return "Good Evening";
    } else if (time>= 22 && time<=4){
        return "Good Night";
    } else {
        return "invalid";
    }
}
console.log(greetingBasedOnTime(15));

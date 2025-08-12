// score to grade conversion
function gradeConversion(score){
    if (score >=90 && score <=100){
        return "grade:A";
    } else if (score >=80 && score <=89){
        return "grade:B";
    } else if (score >=70 && score <=79){
        return "grade:C";
    } else if (score >=60 && score <=69){
        return "grade:D";
    } else if (score < 60){
        return "grade:F";
    } else {
        return "Score is not Valid";
    }
}
console.log(gradeConversion(85));
//password strength checker
function validatePassword(password){
    let criteriaScore=0;
    if (password.legth >=8)
        criteriaScore++;
    if(/[A-Z]/.test(password))
        criteriaScore++;
    if(/[a-z]/.test(password))
        criteriaScore++;
    if(/\d/.test(password))
        criteriaScore++;
    if(/[@#$%^&*?<>?|{}";:,.()[]]/.test(password))
        criteriaScore++;
    if (criteriaScore==5){
        return "Storng";
    } else if (criteriaScore >=3){
        return "Medium";
    } else {
        return "Weak";
    }
}
console.log(validatePassword("Pass123!"));

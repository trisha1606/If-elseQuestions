// email format validation
function emailValidation(email){
    if((/[@]/.test(email)) &&(/./.test(email))){
        return "valid";
    } else "not valid";
}
console.log(emailValidation("test@example.com"));
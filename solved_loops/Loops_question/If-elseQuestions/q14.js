// character type checker
function charTypeDetermination(char){
    char = char.toLowerCase(); 
    if (char.match(/[aeiou]/)){
        return "vowel";
    } else {
        return "Consonent";
    }
}
console.log(charTypeDetermination("b"));

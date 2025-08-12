
//triangle validation and classification 
function triangleValidationClassification(a, b, c) {
    if (a ===90 || b===90 || c===90){
        return "Right";
    } else if (a>90 || b>90 || c>90){
        return "Obtuse";
    } else if (a<90 && b<90 && c<90){
        return "Acute";
    } else {
        return "Invalid";
    }
}
console.log(triangleValidationClassification(120,60,30));
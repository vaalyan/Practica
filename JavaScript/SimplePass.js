function SimplePassword(str) {
    const hasUpperCase = /[A-Z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const hasSymbol = /[$\w\s]/.test(str);
    const hasPasswordWord = /password/i.test(str);
    const isValidLength = str.length > 7 && str.length < 31;

    if (hasUpperCase && hasNumber && hasSymbol && !hasPasswordWord && isValidLength) {
        return true;
    } else {
        return false;
    }
}

console.log(SimplePassword("passWord123!!!!"));
console.log(SimplePassword("Valid1!"));
console.log(SimplePassword("Validword123!"));
console.log(SimplePassword("Validpass123!")); 
console.log(SimplePassword("Valid1!!!!!"));
function RunLength(str) {
    let compressed = "";
    let count = 1;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += count + str[i];
            count = 1;
        }
    }

    return compressed;
}

console.log(RunLength("aabbcde"));
console.log(RunLength("wwwggopp"));
function MatchingCharacters(str) {
    let maxUniqueChars = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                let uniqueChars = new Set();
                for (let k = i + 1; k < j; k++) {
                    uniqueChars.add(str[k]);
                }
                maxUniqueChars = Math.max(maxUniqueChars, uniqueChars.size);
            }
        }
    }

    return maxUniqueChars;
}

console.log(MatchingCharacters("ahyjakh"));
console.log(MatchingCharacters("ghececgkaem"));
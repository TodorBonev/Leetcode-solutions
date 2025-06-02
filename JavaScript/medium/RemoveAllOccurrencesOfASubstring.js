function removeOccurrences(s, part) {
    while (s.includes(part)) {
        s = s.replace(part, "");
    }
    return s;
}

console.log(removeOccurrences("daabcbaabcbc", "abc"));
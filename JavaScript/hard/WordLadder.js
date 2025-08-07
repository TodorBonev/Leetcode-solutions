function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0) {
        const [word, level] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const char = String.fromCharCode(c);
                const nextWord = word.slice(0, i) + char + word.slice(i + 1);

                if (nextWord === endWord) {
                    return level + 1;
                }

                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, level + 1]);
                    wordSet.delete(nextWord);
                }
            }
        }
    }

    return 0;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
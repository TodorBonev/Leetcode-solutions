function lengthOfLastWord(s) {
    let sentence = s.trim().split(" ");
    return sentence [sentence.length -1].length;
  } 

console.log(lengthOfLastWord("Hello World"));
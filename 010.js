function caesarCipher(message, shift) {
  if (shift < 0) {
    shift = 26 + (shift % 26);
  }
  return message
    .split("") 
    .map(message => { 
      normalStr = String.fromCharCode(message.charCodeAt())
      prePoint = message.charCodeAt()  
      if (prePoint >= 65 && prePoint <= 90) { 
        return String.fromCharCode(((prePoint - 65 + shift) % 26) + 65);
      } else if (prePoint >= 97 && prePoint <= 122) { 
        return String.fromCharCode(((prePoint - 97 + shift) % 26) + 97)
      } else {
        return normalStr;
      }
    })
    .join("");
}
console.log(caesarCipher("I love JavaScript!", 100))
console.log(caesarCipher("I love JavaScript!", -100))
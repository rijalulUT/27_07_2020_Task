const palindrome = (str) => {
  
    var regex= /[\W_]/g; 
    
    var lowRegStr = str.toLowerCase().replace(regex, '');
    
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    
    return reverseStr === lowRegStr;
  }

  console.log(palindrome('Cigar? Toss it in a can. It is so tragic'))
  console.log(palindrome('Hello World'))
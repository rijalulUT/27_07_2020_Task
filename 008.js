const anagram = (str1, str2) => {
    let str1Count = {};
    let str2Count = {};
  
    if (str1.length === str2.length) {
      for (let i in str1) {
        checker(str1[i], str1Count);
        checker(str2[i], str2Count);
      }
  
      return areEqualObjects(str1Count, str2Count);
    } else {
      return false
    }
  
    console.log(str1Count, str2Count)
  }
  
  const checker = (letter, obj) => {
    if (obj[letter] === undefined) {
      return obj[letter] = 1
    } else {
      return obj[letter] += 1
    }
  }
  
  const areEqualObjects = (obj1, obj2) => {
    for (let el in obj1) {
      if (obj1[el] !== obj2[el]){
        return false
      }
    }
  
    return true
  }
  console.log(anagram('hello world', 'world hello'))/// true

  console.log(anagram('hellow world', 'hello there')) /// false
  
  console.log(anagram('hellow world', 'hello there!')) /// false
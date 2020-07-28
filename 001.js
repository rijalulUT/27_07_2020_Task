const data = new Array(4, 2, 1, 3, 5);
const sort = (data) => {
    const cloneData = [...data];
   cloneData.sort(function(a, b) {
    return a - b;
  })

    
      return cloneData
}

const reverse = (data) => {
    const cloneData = [...data];
    cloneData.reverse(function(a, b) {
        return b - a;
      })

      return cloneData
}

const splice = (data,startIndex,variable) => {
    const cloneData = [...data];
    cloneData.splice(startIndex,0,variable)
    
    return cloneData
}

console.log(sort(data)) //sorting
console.log(reverse(data)) //reverse
console.log(splice(data, 3, 6)) //splice

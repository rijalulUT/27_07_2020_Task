const data = new Array(1,2,3,4,5)

const indexOf = (data,number) => {
    const cloneData = [...data];
    return cloneData.indexOf(number)
}

const lastIndex = (data) => {
    const cloneData = [...data];
    return cloneData.length - 1
}

const includes = (data,number) => {
    const cloneData = [...data];
   return  cloneData.includes(number)
}

const fill  = (data,value) =>{
    const cloneData = [...data];
    let i, n = cloneData.length;
    for (i = 0; i < n; ++i) {
        cloneData[i] = value;
    }
    return cloneData
}

const join = (data,symbol) => {
    const cloneData = [...data]
    return cloneData.join('-')
}

const sum = (data) => {
    const cloneData = [...data]
    return cloneData.reduce(function(a, b){
        return a + b;
    }, 0);
}

console.log(indexOf(data,3))
console.log(lastIndex(data))
console.log(includes(data, 6)) 
console.log(includes(data, 5)) 
console.log(fill(data, 3)) 
console.log(join(data, '-')) 
console.log(sum(data))
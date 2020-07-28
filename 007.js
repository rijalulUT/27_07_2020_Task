
const maxChar = (str) => {
    var strCounts = {};
    var maxKey = '';
    for(var i = 0; i < str.length; i++)
    {
        var key = str[i];
        if(!strCounts[key]){
            strCounts[key] = 0;
        }
        strCounts[key]++;
        if(maxKey == '' || strCounts[key] > strCounts[maxKey]){
            maxKey = key;
        }
    }
    return maxKey
}

console.log(maxChar('Hello World'))
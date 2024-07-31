let obj = {};
function countCharacters(str){
    for(let ch of str){
        if(obj[ch] == undefined) obj[ch] = 1;
        else obj[ch] += 1;
    }
}

str = "Chudamani";
countCharacters(str);
console.log(obj);

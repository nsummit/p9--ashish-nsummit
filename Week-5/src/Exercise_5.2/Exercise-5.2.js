function isVowel(char){ 
    return "aeiou".includes(char)
} 

function vowelCount(str) {
    const vowelMap = new Map();
    str = str.toLowerCase()
    for(let ch of str){
        if(isVowel(ch)){
            let setCount = vowelMap.get(ch) + 1 || 1
            console.log(vowelMap.set(ch, setCount))
        }
    }
    return vowelMap
} 

vowelCount('shoonTheRipper')

module.exports = { isVowel, vowelCount }
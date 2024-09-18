//QUESTION: Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.


function isSecondIsFirstAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }

    let string1CharFrequency = {}
    let string2CharFrequency = {}

    for (let char of string1) {
        string1CharFrequency[char] ? string1CharFrequency[char]++ : string1CharFrequency[char] = 1
    }

    for (let char of string2) {
        string2CharFrequency[char] ? string2CharFrequency[char]++ : string2CharFrequency[char] = 1
    }

    for (let char in string1CharFrequency){
        if(!string2CharFrequency[char]){
            return false
        }

        if(string1CharFrequency[char]!=string2CharFrequency[char]){
            return false
        }
    }

    return true
}

isSecondIsFirstAnagram('hiking','kinghi')
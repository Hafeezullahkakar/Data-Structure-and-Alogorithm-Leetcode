//Question 1: to lower case

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase();
        
};


//Question 2 defang ip address

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let finalAddress = ""
    for (let i = 0; i < address.length; i++) {
        if (address[i] == '.') {
            finalAddress += "[.]"
        }
        else {
            finalAddress += address[i]

        }

    }

    return finalAddress;
};

//

// Question 3 Reverse a string


var reverseString = function(s) {
    for(let i=0;i<Math.floor(s.length/2);i++){
        let temp=s[i]
        s[i]=s[s.length-1-i]
        s[s.length-1-i]=temp
    }
    
};


// question 4  GoodString?   (occurance of each character is same)



function goodString(s) {
    let firstCharOccur = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let occur = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[i] == s[j]) {
                occur++;
            }
        }
        if (i == 0) {
            firstCharOccur = occur;
            continue;
        }
        if (firstCharOccur != occur) {
            console.log("bad string")
            return
        }    




    }
    return console.log("Good String.")

}


goodString("sdsdsd")


// Question 5 fint most number of word in sentence of 

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
    let temp = 0;
    for (let i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length;
        if (temp > max) {
            max = temp;
        }
    }
    
    return max;
  
};

console.log(mostWordFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]));


//Q6: check if 2 string arrays are equivalent

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    const strng1 = word1.reduce((acc, cv) => acc + cv, '')
    const strng2 = word2.reduce((acc, cv) => acc + cv, '')

    return strng1 === strng2;

};

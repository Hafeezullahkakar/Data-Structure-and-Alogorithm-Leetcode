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


// Question 3 Reverse a string


var reverseString = function(s) {
    for(let i=0;i<Math.floor(s.length/2);i++){
        let temp=s[i]
        s[i]=s[s.length-1-i]
        s[s.length-1-i]=temp
    }
    
};


// question 4  GoodString?   (occurance of each character is same)


function goodString(s){
    
    let prevOccur=1;
    //a b c a b c 
    for(let i=0; i<s.length-1; i++){
        let currentOccur =1;
        for(j=i+1; j<s.length; j++){
             if(s[i] == s[j]){
                 currentOccur++;
             }
        }
         if(prevOccur==1){
             console.log("prev occur first: ", prevOccur, currentOccur)
         prevOccur = currentOccur;
             console.log("prev occur last: ", prevOccur ,currentOccur)
         continue;
         }
       
             console.log("prev occur last: ", prevOccur ,currentOccur)
    }
 
 
}

goodString("abab")



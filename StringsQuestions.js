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


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


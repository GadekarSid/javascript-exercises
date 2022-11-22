const repeatString = function(text,num) {
    if(num < 0){
        return "ERROR";
    }
    output = "";
    for(var i = 0;i<num;i++){
        output += text;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function(min, max) {
    // wenn negative zahlen oder keine zahlen sind kommt error message
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    // wenn die erste zahl größer ist wird sie vertauscht und zu "max"
    if (min > max){
        const temp = min;
        min = max;
        max = temp;

    }
    // Das hier allein is sumall
    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;

    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;

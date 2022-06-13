const ftoc = function(fahren) {
  let sum = (fahren - 32) * 5/9;
  let roundsum = Math.round(sum * 10)/ 10;
  
  return roundsum;
};

const ctof = function(celcius) {
  let sum = celcius * 9/5 + 32 ;
  let roundsum = Math.round(sum * 10)/ 10;
  return roundsum;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof

};

/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports  = function(digits){

  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work
  //first create a module that checks if the number is a palindrome
  //then check the longest palindrome for two three digit numbers
  var palindromeArray = [];


    newNumber = factor_0 * factor_1;
    var newNumberString = newNumber.toString();
    var reverse = newNumberString.split('').reverse().join('');
    var longestNumber = 0;
    if(digits === 2){
      while(factor_0 < 100 && factor_1 < 100){
        if(newNumberString === reverse){
          palindromeArray.push(parseInt(newNumberString));
        }
        return false;
      }
      longestNumber = (palindromeArray[palindromeArray.length -1]);
      console.log(longestNumber);
      palindromeNumber = longestNumber;

    }





  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber,


  };
};








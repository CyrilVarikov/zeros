module.exports = function getZerosCount(number) {
  // 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12 * 13 * 14 * 15 * 16 * 17 * 18 * 19 * 20
  var countZero = 0;
  while (number >= 5) {
    number = Math.floor(number / 5);
    countZero += number;
  }
return countZero;

};

module.exports = function getZerosCount(number) {
  // 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12 * 13 * 14 * 15 * 16 * 17 * 18 * 19 * 20
  var two = 0, five = 0;
  for (var i = 1; i <= number; i++) {
    factor = i;
    while (((factor % 2) === 0) || ((factor % 5) === 0)) {
      if (factor % 2 === 0) {
        two++;
        factor /= 2;
      }
      if (factor % 5 === 0) {
        five++;
        factor /= 5;
      }
    }
  }
   if (five < two) {
     return five;
   } else {
     return two;
   }
};

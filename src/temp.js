number = 20;
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
   console.log(five);
 } else {
   console.log(two);
 }

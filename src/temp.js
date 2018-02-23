
number = 100;
var countZero = 0;
while (number >= 5) {
  number = Math.floor(number / 5);
  countZero += number;
}
console.log(countZero);

function calcSum(ope1, ope2) {
  return ope1 + ope2;
}

console.log(calcSum(2, 3));

// Function expression
const calcSum2 = function (ope1, ope2) {
  return ope1 + ope2;
}

calcSum2(4, 5);

console.log(typeof calcSum2);
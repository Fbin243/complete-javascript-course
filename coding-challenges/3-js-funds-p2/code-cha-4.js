const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [], totals = [];
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(bills, tips, totals);

// Bonus
const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}

console.log(calcAverage([1, 2, 3, 4, 5]));
console.log(calcAverage(totals));

const calcAverage = (a, b, c) => (a + b + c) / 3;
let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas)
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  else if (avgDolphins * 2 <= avgKoalas)
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  else console.log('No team wins the trophy');
}

checkWinner(dolphinsAverage, koalasAverage);
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
checkWinner(dolphinsAverage, koalasAverage);

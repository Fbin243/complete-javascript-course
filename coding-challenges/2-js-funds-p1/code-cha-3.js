// const dolphinsTime1 = 96;
// const dolphinsTime2 = 108;
// const dolphinsTime3 = 89;

// const koalasTime1 = 88;
// const koalasTime2 = 91;
// const koalasTime3 = 110;

// const dolphinsAverage = (dolphinsTime1 + dolphinsTime2 + dolphinsTime3) / 3
// const koalasAverage = (koalasTime1 + koalasTime2 + koalasTime3) / 3

// if (dolphinsAverage > koalasAverage) {
//   console.log(`Dolphins team (${dolphinsAverage}) wins Koalas team (${koalasAverage})`);
// } else if (dolphinsAverage === koalasAverage) {
//   console.log(`Draw. Both of team are ${dolphinsAverage} score`);
// } else {
//   console.log(`Koalas team (${koalasAverage}) wins Dolphins team (${dolphinsAverage})`);
// }

const dolphinsTime1 = 97;
const dolphinsTime2 = 112;
const dolphinsTime3 = 81;

const koalasTime1 = 109;
const koalasTime2 = 95;
const koalasTime3 = 86;

const dolphinsAverage = (dolphinsTime1 + dolphinsTime2 + dolphinsTime3) / 3
const koalasAverage = (koalasTime1 + koalasTime2 + koalasTime3) / 3

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins team (${dolphinsAverage}) wins Koalas team (${koalasAverage})`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log(`Koalas team (${koalasAverage}) wins Dolphins team (${dolphinsAverage})`);
} else if (dolphinsAverage < 100 || koalasAverage < 100) {
  // if (dolphinsAverage === koalasAverage)
  //   console.log(`Draw. Both of team are ${dolphinsAverage} score`);
  // else 
  console.log('No team wins trophy');
} else {
  console.log(`Draw. Both of team are ${dolphinsAverage} score`);
}
const temps = [17, 21, 23];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}C in ${i + 1} days`;
  }
  str += '...'
  console.log(str);
}

printForecast(temps);
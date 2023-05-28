const country = 'Viet Nam';
const continent = 'Asia';
let population = 100;
console.log(country, continent, population);
const isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);
language = 'Vietnamese'

// Basic operator
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);
console.log(country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language);

// Type conversion and coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
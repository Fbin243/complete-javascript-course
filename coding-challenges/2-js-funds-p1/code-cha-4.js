const billValue = 430;
const tip = ((billValue >= 50 && billValue <= 300) ? 0.15 : 0.2) * billValue;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(foodProcessor(4, 5));
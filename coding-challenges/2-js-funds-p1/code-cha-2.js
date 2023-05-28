let markMass, johnMass, markHeight, johnHeight;
// test case 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
// test case 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) console.log("Mark's BMI is higher than John's!");
else console.log("John's BMI is higher than Mark's!");

if (markBMI > johnBMI)
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
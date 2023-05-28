const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

if (mark.calcBMI() > john.calcBMI())
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`)
else if (mark.BMI < john.BMI)
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}!`)
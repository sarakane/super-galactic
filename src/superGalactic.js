export class SuperGalactic{
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryYears(age) {
    return (parseFloat((age/0.24).toFixed(1)));
  }

  venusYears(age) {
    return (parseFloat((age/0.62).toFixed(1)));
  }
};
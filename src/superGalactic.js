export class SuperGalactic{
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryYears(age) {
    return (Math.fround(age/0.24));
  }

  venusYears(age) {
    return (Math.fround(age/0.62));
  }
};
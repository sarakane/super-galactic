export class SuperGalactic{
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  galacticYears(age, planet) {
    let planetYears;
    switch(planet) {
      case 'mercury':
        planetYears = 0.24;
        break;
      case 'venus':
        planetYears = 0.62;
        break;
      case 'mars':
        planetYears = 1.88;
        break;
      case 'jupiter':
        planetYears = 11.86;
        break;
      default:
        planetYears = 1;
    }
    return (parseFloat((age/planetYears).toFixed(1)));
  }

  yearsLeft() {
    
  }
};
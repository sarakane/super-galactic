export class SuperGalactic{
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetArray = ['mercury', 'venus', 'mars', 'jupiter'];
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
    let yearsLeftObj = {};
    for(let planet of this.planetArray) {
      yearsLeftObj[planet] = ((this.galacticYears(this.lifeExpectancy, planet) - this.galacticYears(this.age, planet)).toFixed(1));
    }
    return yearsLeftObj;
  }

  yearsPast() {
    const planetArray = ['mercury', 'venus', 'mars', 'jupiter'];
    let yearsPastObj = {};
    for(let planet of this.planetArray) {
      yearsPastObj[planet] = ((this.galacticYears(this.age, planet) - this.galacticYears(this.lifeExpectancy, planet)).toFixed(1));
    }
    return yearsPastObj;
  }

  getAllPlanetAges() {
    let planetAges = {};
   
    for(let planet of this.planetArray) {
      planetAges[planet] = this.galacticYears(this.age, planet);
    }
    return planetAges;
  }

  runSuperGalactic() {
    let planetAges = this.getAllPlanetAges();
    let yearDiff;
    let outputString;

    if(this.age < this.lifeExpectancy) {
      yearDiff = this.yearsLeft();
      outputString = `Your age on Mercury would be ${planetAges.mercury} and you would have ${yearDiff.mercury} years left to live. Your age on Venus would be ${planetAges.venus} and you would have ${yearDiff.venus} years left to live. Your age on Mars would be ${planetAges.mars} and you would have ${yearDiff.mars} years left to live. Your age on Jupiter would be ${planetAges.jupiter} and you would have ${yearDiff.jupiter} years left to live.`;
    }
    return outputString;
  }
};
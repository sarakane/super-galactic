import { SuperGalactic } from './../src/superGalactic.js';

describe('SuperGalactic', () => {
  let superGalactic;
  let sGAge;

  beforeEach(() => {
    superGalactic = new SuperGalactic(27, 81);
    sGAge = superGalactic.age;
  });

  test('Take a persons age and average life expectancy and create a class ', () => {
    expect(sGAge).toEqual(27);
    expect(superGalactic.lifeExpectancy).toEqual(81);
  });

  test('Returns the users age in Mercury years ', () => {
    expect(superGalactic.galacticYears(sGAge, 'mercury')).toEqual(112.5);
  });

  test('Returns the users age in Venus years', () => {
    expect(superGalactic.galacticYears(sGAge, 'venus')).toEqual(43.5);
  });

  test('Returns the users age in Mars years', () => {
    expect(superGalactic.galacticYears(sGAge, 'mars')).toEqual(14.4);
  });

  test('Returns the users age in Jupiter years', () => {
    expect(superGalactic.galacticYears(sGAge, 'jupiter')).toEqual(2.3);
  });

  test('Determine how many years a user has left to live on each planet', () => {
    expect(superGalactic.yearsLeft()).toEqual({mercury: "225.0", venus: "87.1", mars: "28.7", jupiter: "4.5"});
  });

  test('If user has already surpassed the average life expectancy, return number of years they have live past the life expectancy', () => {
    let surpassedAverage = new SuperGalactic(82, 81);
    expect(surpassedAverage.yearsPast()).toEqual({mercury: "4.2", venus: "1.7", mars: "0.5", jupiter: "0.1"});
  });

  test('The program should determine the age of the user for each planet', () => {
    expect(superGalactic.getAllPlanetAges()).toEqual({mercury: 112.5, venus: 43.5, mars: 14.4, jupiter: 2.3});
  });

  test('The program should return the users age and years left to live for all planets as a string', () => {
    console.log(superGalactic.runSuperGalactic());  
    expect(superGalactic.runSuperGalactic()).toEqual('Your age on Mercury would be 112.5 and you would have 225.0 years left to live. Your age on Venus would be 43.5 and you would have 87.1 years left to live. Your age on Mars would be 14.4 and you would have 28.7 years left to live. Your age on Jupiter would be 2.3 and you would have 4.5 years left to live.');
  });
});
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
    console.log(superGalactic.yearsLeft());
    expect(superGalactic.yearsLeft()).toEqual({mercury: "225.0", venus: "87.1", mars: "28.7", jupiter: "4.5"});
  });
});
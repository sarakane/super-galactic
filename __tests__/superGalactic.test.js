import { SuperGalactic } from './../src/superGalactic.js';

describe('SuperGalactic', () => {
  let superGalactic;

  beforeEach(() => {
    superGalactic = new SuperGalactic(27, 81);
  });

  test('Take a persons age and average life expectancy and create a class ', () => {
    expect(superGalactic.age).toEqual(27);
    expect(superGalactic.lifeExpectancy).toEqual(81);
  });

  test('Returns the users age in Mercury years ', () => {
    console.log(superGalactic.galacticYears(superGalactic.age, 'mercury'));
    expect(superGalactic.galacticYears(superGalactic.age, 'mercury')).toEqual(112.5);
  });

  test('Returns the users age in Venus years', () => {
    console.log(superGalactic.galacticYears(superGalactic.age, 'venus'));
    expect(superGalactic.galacticYears(superGalactic.age, 'venus')).toEqual(43.5);
  });

  test('Returns the users age in Mars years', () => {
    console.log(superGalactic.galacticYears(superGalactic.age, 'mars'));
    expect(superGalactic.galacticYears(superGalactic.age, 'mars')).toEqual(14.4);
  });
});
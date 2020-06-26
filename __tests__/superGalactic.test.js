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
    console.log(superGalactic.mercuryYears(superGalactic.age));
    expect(superGalactic.mercuryYears(superGalactic.age)).toEqual(112.5);
  });

  test('Returns the users age in Venus years', () => {
    console.log(superGalactic.venusYears(superGalactic.age));
    expect(superGalactic.venusYears(superGalactic.age)).toEqual(43.5);
  });
});
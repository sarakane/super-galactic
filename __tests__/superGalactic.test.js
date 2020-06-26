import { SuperGalactic } from './../src/superGalactic.js';

describe('SuperGalactic', () => {
  let superGalactic;

  beforeEach(() => {
    superGalactic = new SuperGalactic(27, 81);
  });

  test('Take a persons age and average life expectancy and create a class ', () => {
    console.log(superGalactic);
    expect(superGalactic.age).toEqual(27);
    expect(superGalactic.lifeExpectancy).toEqual(81);
  });

  test('Returns the user\'s age in Mercury years ', () => {
    expect(superGalactic.mercuryYears(superGalactic.age)).toEqual(112.5)
  });
});
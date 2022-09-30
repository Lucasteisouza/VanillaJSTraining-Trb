const getOpeningHours = require('../src/getOpeningHours');
const data = require('../data/zoo_data');

const { hours } = data;
const closedMessage = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('if parameters are left blank, return hours', () => {
    expect(getOpeningHours()).toBe(hours);
  });
  it('parameters ara not case sensitive', () => {
    expect(getOpeningHours('monday', '06:00-PM')).toBe(closedMessage);
    expect(getOpeningHours('TUESDAY', '06:00-pm')).toBe(closedMessage);
  });
  it('hours parameter must be numeric', () => {
    expect(() => getOpeningHours('monday', '06:meia-AM')).toThrow();
    expect(() => getOpeningHours('monday', 'seis:00-AM')).toThrow();
  });
  it('abreviation is valid', () => {
    expect(() => getOpeningHours('monday', '06:00-TF')).toThrow();
  });
  it('time format is valid', () => {
    expect(() => getOpeningHours('monday', '13:00-AM')).toThrow();
    expect(() => getOpeningHours('monday', '08:60-PM')).toThrow();
  });
  it('validate closed time', () => {
    expect(getOpeningHours('Thursday', '02:00-AM')).toBe(closedMessage);
    expect(getOpeningHours('Monday', '09:00-PM')).toBe(closedMessage);
  });
  it('validate opened time', () => {
    expect(getOpeningHours('Thursday', '11:00-AM')).toBe('The zoo is open');
  });
  it('day is valid', () => {
    expect(() => getOpeningHours('zuzurday', '11:00-AM')).toThrow();
  });
  it('12 AM/PM disanbiguation', () => {
    expect(getOpeningHours('Tuesday', '12:00-PM')).toBe('The zoo is open');
    expect(getOpeningHours('Tuesday', '12:00-AM')).toBe(closedMessage);
  });
});

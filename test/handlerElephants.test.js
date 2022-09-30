const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('No parameter returns undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('NOT string parameter return error message', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('if param is valid key, return value for elephants', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('if param equals "count" return number of residents', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('if param equals "names" return residents names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('if param equals "averageAge" return residents average age', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('if param is random string, return null', () => {
    expect(handlerElephants('oopa')).toBe(null);
  });
});

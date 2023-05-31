const { agreeName, deleteName } = require('../script/script');

describe('probando la función agreeName', () => {
  let inputName;
  let namesList;

  beforeEach(() => {
    inputName = { value: '' };
    namesList = { innerHTML: '', appendChild: jest.fn() };
    players = [];
  });

  it('should be declared', () => {
    expect(typeof agreeName).toBe('function');
});


});

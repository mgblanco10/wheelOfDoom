const { agreeName } = require('./script');

describe('probando la función agreeName', () => {

    test('guarda el valor en el array correctamente', () => {

      const inputName = document.createElement('input');
      inputName.value = 'John Doe';
      const namesList = document.createElement('ul');
      agreeName(inputName, namesList);

      expect(players).toContain('John Doe');
    });
});
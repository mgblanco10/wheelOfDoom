const { agreeName, deleteName } = require('../script/script');

describe('function agreeName', () => {
  let players;
  let appendChildMock;

  beforeEach(() => {
    players = [];
    appendChildMock = jest.fn();

    global.document = {
      getElementById: jest.fn().mockReturnValue({
        value: '',
      }),
      createElement: jest.fn().mockReturnValue({
        appendChild: appendChildMock,
      }),
    };
  });

  afterEach(() => {
    delete global.document;
  });

  it('should be declared', () => {
    expect(typeof agreeName).toBe('function');
  });

  it('should not add a player to the list when input is empty', () => {
    global.document.getElementById.mockReturnValueOnce({
      value: '',
  });
  agreeName();

    expect(appendChildMock).not.toHaveBeenCalled();
    expect(players).toHaveLength(0);
  });



});



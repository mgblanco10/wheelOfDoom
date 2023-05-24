const { agreeName } = require('./script')
console.log(agreeName)

describe('agreeName', function() {
    test('should not make anything if input is empty', function() {
        
        agreeName();
        expect().toEqual('nombre');
    })
})
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

expect(total).toBe(23);

});


test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(10)

    // is 1 euro son 1.2 dolares, entonces 10 euros deberian ser = (3.5 * 1.2)
    const expected = 10 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})


test("Ten dollars should be 1065.83 Yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Yens = fromDollarToYen(10)

    // is 1 euro son 1.2 dolares, entonces 10 euros deberian ser = (3.5 * 1.2)
    const expected = 10/1.2*127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Yens);
})

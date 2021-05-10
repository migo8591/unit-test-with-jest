test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js');

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

test("Ten Yenes should be 0.0062 Pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Pounds = fromYenToPound(10)

    // is 1 euro son 0.08 pounds, entonces 10 Yenes deberian ser = (10/127.9*0.08)
    const expected = 10/127.9*0.08; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Pounds);
})

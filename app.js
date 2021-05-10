const sum = (a,b) => {
    return a + b
}
console.log(sum(14,9))
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(10))

// función: fromDollarToYen
const fromDollarToYen = (USD) =>{
    return USD/1.2*127.9
}
console.log(fromDollarToYen(10))
// función: fromYenToPound
const fromYenToPound = (JPY) =>{
    return JPY/127.9*0.08
}
console.log(fromYenToPound(10))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


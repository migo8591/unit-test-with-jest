const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// console.log(fromEuroToDollar(10))




// module.exports = { sum };

//función: fromEuroToDollar
// const fromEuroToDollar = (EUR) => {
//     return EUR * 1.2
// }
// console.log(fromEuroToDollar(10))
// module.exports = { fromEuroToDollar };


// función: fromDollarToYen
const fromDollarToYen = (USD) =>{
    return USD/1.2*127.9
}
console.log(fromDollarToYen(10))
// module.exports = { fromDollarToYen };
module.exports = { sum, fromEuroToDollar, fromDollarToYen }


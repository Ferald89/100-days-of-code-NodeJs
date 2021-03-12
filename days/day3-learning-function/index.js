//in this file I am going to learn how to manipulate functions and different functions in javascript

// 1.function declaration
function suma(x, y){
    return x + y;
}

console.log(`la suma es ${suma(2,5)}`);
console.log(suma);

//2.function expression.

var suma2 = function(x, y){
    return x + y;
}
console.log(`la suma es ${suma2(2,5)}`);//=>[Function] (Note: It's anonymous.)
console.log(suma2);

/*  when you need to debug and view your call stack  looks something like this: (Anonymous function)
(Anonymous function)
(Anonymous function) */


//3.method literals
var baz = {
    f: function(x, y){
        return x + y;
    }
}

console.log(`la suma es ${baz.f(2,5)}`);//=>[Function] (Note: It's anonymous.)
console.log(baz);

//4.Lambda
//A lambda is a function that is used as data.
//If a function is used as an argument or return value, it’s a lambda.

var sum = function sum() {
    var result = 0;
    [5, 5, 5].forEach(function addTo(number) { result += number; });
    return result;
    };

console.log(sum());

//5.Arrow function
var suma3 = (x, y) => x + y;

console.log(suma3(2,2));


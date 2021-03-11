// There are six kinds of differents type of data
/* undefined
Boolean
Number
String
bigint 
Symbol */


// Function
function Person(Boolean, Number, String, Bigint, Symbol) {
    this.Boolean = Boolean;
    this.Number = Number;
    this.String = String;
    this.Bigint = Bigint;
    this.Symbol = Symbol;
  }
//Array
let datos = {};


datos.data = new Person(typeof(true), typeof(22),typeof("d"),typeof(9007199254740991n),typeof(Symbol("dd")));
let column = ["Boolean", "Number", "String","Bigint","Symbol"];
console.table(datos, column);

//class
class machie{
    constructor(color){
        this.color = color;
    }
}

//object
const obj = {
    dato1: "dsa",
    dato2: 22,
    dato3: "dd",
    dato4: function func5(){}

}

console.log(obj);
const maverick = new machie("red");
const d35 = new machie("blue");

console.log(maverick.color);
console.log(d35.color);

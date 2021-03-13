// requiere a class on another file
const cubo = require("./cubo");

// instance a new class in a variable cuboRojo
const cuboRojo = new cubo(4, 4, 4);
const cuboVerde = new cubo(23, 33, 2);
cuboRojo.high=5;
console.log(cuboRojo);

console.log(cuboRojo.getArea());

cuboRojo.high = 7;
console.log(cuboRojo.getArea());
console.log(cuboVerde.getArea());


// i gonna working with Prommise  function

console.log("working before the settimeout");
const time = new Promise ((resolve, reject) => {
    try{
        setTimeout(()=>{
            console.log("hello desdef tiemout")
            resolve("hello")},500);
    }catch(err){
        console.log(err);
    }
});
time.then((hel)=>{
    console.log("working after the setimeout"+hel);
});


// i donna working with async await
async function ayncCall(){
    console.log('llamando');
    const result = await setTimeout(()=>{
        console.log("Ejecuto");
    },500);
    console.log("Termino");
}

ayncCall();



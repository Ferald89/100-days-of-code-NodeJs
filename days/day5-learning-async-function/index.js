/* Asynchronous operations are broken up into two phases: call and response. By definition,
it’s impossible to know at what point in the program flow you’ll be when you receive
an asynchronous response. There are a couple of popular ways to manage that
uncertainty. */

//-Callbacks

/* setTimeout(()=>{
    console.log("Se ejecuto")
},5000);
setTimeout(function(){
    console.log("Esto debería aparecer primero");
  }, 0);
  console.log("Sorpresa!");


  setTimeout(function(){
    console.log("Etapa 1 completada");
    setTimeout(function(){
      console.log("Etapa 2 completada");
      setTimeout(function(){
        console.log("Etapa 3 completada");
        setTimeout(function(){
          console.log("Etapa 4 completada");
          // Podríamos continuar hasta el infinito...
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000); */
  
  // Sorpresa!
  // Esto debería aparecer primero

//-Promises and Deferreds

const delay = function (time){
    return new Promise(
        function (resolveCallback){
            return setTimeout(resolveCallback,time);
        }
    )
}
/* const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));
 */
delay(3000)
  .then(() => console.log(`Este es un retardo de al menos 3 segundos`))
  .then(()=>console.log("dssd"))
  .catch(() => console.log(`Retardo fallido`));

  const delay2 = async () =>{
      await  delay(500);
      console.log("Se termin async desde await");
      return "SE termino async";
  }

  console.log(delay2());
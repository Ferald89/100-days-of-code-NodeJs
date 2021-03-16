const https = require("https");
path = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

https.get(path, (resp) => {
  let data = "";
  resp.on("data", (chunk) => {
    data += chunk;
    console.log(data);
  });
  resp.on("end", () => {
    console.log(data);
  });
});

console.log("se debe imprimir antes de la petición");
console.log("Esto Se debe imprimir después de la petición");

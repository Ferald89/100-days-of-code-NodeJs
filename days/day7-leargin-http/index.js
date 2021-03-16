// require fetch
const fetch = require("node-fetch");
path = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

/* fetch(path)
    .then(res => res.json())
    .then(json => console.log(json)); */
const getData = async () => {
  console.log("Conectando...");
  const response = await fetch(path);
  return response.json();
};

getData().then((data) => console.log(data));

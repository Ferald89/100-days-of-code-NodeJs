const express = require('express');
const app = express();
const path = require("path");

// usage static file
app.use(express.static(path.join(__dirname,"frontend")));

app.get("/",(req, res)=>{
    res.sendFile("index.html");
});


app.listen(3000,()=>{
    console.log("Listening in port 3010");
});

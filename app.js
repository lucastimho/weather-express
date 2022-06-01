const express = require("express");
const https = require("https");
const { url } = require("inspector");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric";
    https.get(url);
    res.send("Server is up and running.");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})
const { query } = require("express");
const { response } = require("express");
const express = require("express");
const { json } = require("express/lib/response");
const https = require("https");
const { url } = require("inspector");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228beabd5d20e3b7749713&units=metric";
    https.get(url, function(response) {
        console.log(response.statusCode);
    });
    response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        console.log(temp)
        const desc = weatherData.weather[0].description;
        console.log(desc);
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write("<p>The weather is currently " + desc + ".</p>");
        res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
        res.write("<img src='" + imageURL + "'></img>");
        res.send();
    })
    res.send("Server is up and running.");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})
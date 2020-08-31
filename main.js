const { Octokit } = require("@octokit/core");
const got = require('got');
const { GITHUB_TOKEN, WEATHER_TOKEN, CITY_ID } = require('./config.js');

const octokit = new Octokit({ auth: GITHUB_TOKEN });

(async () => {
    var weather, city;
    try {
        const response = await got(`http://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${WEATHER_TOKEN}`).json();
        weather = response.weather[0].main;
        city = response.name;
    } catch (error) {
        console.log(error.response.body);
    }

    var now = new Date();
    await octokit.request('PATCH /user', {
        bio: `Météo actuelle à ${city} : ${weather} | Dernier update ${now.getHours()}:${now.getMinutes()} | Créé par MatthieuLeboeuf en utilisant JS`
    });
})();
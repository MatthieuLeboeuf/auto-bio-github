const { Octokit } = require("@octokit/core");
const got = require('got');
var moment = require('moment');
const { GITHUB_TOKEN, WEATHER_TOKEN, CITY_ID } = require('./config.js');

const octokit = new Octokit({ auth: GITHUB_TOKEN });

(async () => {
    var weather, city;
    try {
        const response = await got(`http://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${WEATHER_TOKEN}`).json();
        weather = response.weather[0].main;
        switch (weather) {
            case 'Clear':
                weather = 'Clair'
                break;
            case 'Clouds':
                weather = 'Nuages'
                break;
            case 'Snow':
                weather = 'Neige'
                break;
            case 'Rain':
                weather = 'Pluie'
                break;
            case 'Drizzle':
                weather = 'Bruine'
                break;
            case 'Thunderstorm':
                weather = 'Orage'
                break;
            case 'Fog':
                weather = 'Brouillard'
                break;
        }
        city = response.name;
    } catch (error) {
        console.log(error.response.body);
    }

    moment.locale('fr');
    await octokit.request('PATCH /user', {
        bio: `Météo à ${city} : ${weather} - Mis à jour à ${moment().format('LT')} - Créé par MatthieuLeboeuf en utilisant JS`
    });
})();
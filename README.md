# auto-bio-github
Mise à jour automatique d'une bio github

## Installer le bot

Pour installer le bot, ouvrez le terminal et tapez les commandes suivantes :

* `git clone https://github.com/MatthieuLeboeuf/auto-bio-github.git` - Téléchargement des fichiers
* `npm install --production` - Installation des dépendances du bot
* `node main.js` - Démarrage du bot

### Fichier de configuration

Pour que le bot fonctionne correctement, vous devez remplir le fichier de configuration. Copiez le fichier `config.sample.js` en un nouveau fichier `config.js`. Puis, éditez le avec les valeurs suivantes :

* `GITHUB_TOKEN`: [Votre token Github](https://github.com/settings/tokens/new)
* `WEATHER_TOKEN`: [Votre token Openweathermap](https://home.openweathermap.org/api_keys)
* `CITY_ID`: l'id de votre ville

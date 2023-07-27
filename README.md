# API_HugoDB
API

API : demande au serveur directement la ressource via le code contrairement au WEB

Réponse en format JSON ou XML

L’API REST (REST ful Representational State Transfer) désigne un ensemble un ensemble de règle de contrainte de construction des APIs (c’est un standard). Une API qui récupère la météo possède des ressources lié à des URIs (Uniform Resource Identifier) pour pouvoir y accéder. (par ville, par jours …)

weather forecast api

Client désigne la machine qui va chercher la ressource sur un serveur, une API. L’URI est composé de : VERB/ressource par exemple : http://localhost:3000/ et de Headers : métadonnée associé à la requête http composé par exemple de Accept : indique au serveur le format de réponse, Authorization : indique au serveur si on a le droit de faire cette requête (Token, access Token), Body :

Réponse : Code de statuts : 2XX (serveur a envoyé la ressource voulu), 3XX (moins avec une API : fait intervenir une redirection), 4XX (le client ne sait pas bien communiquer (pas bien fait la requête) avec l’API 404 RESSOURCE NOT FOUND), 5XX (l’API ne fonctionne pas)

Verb : GET, POST, PATCH, PUT, DELETE

Etudier le standard REST.

une api STATELESS : le client et le serveur ne doivent pas enregistré les échanges. Chaque cycle de requête réponse prenne en info juste ce qu’elles ont besoin.

POSTMAN, INSOMNIA : c’est notre client pour API

Projet :

npm init pour initialiser un projet node

créer un fichier index.js

npm install express → Installe la dépendance express. On peut la trouver dans package.json

const express = require('express') // permet d'importer express. Express sert à créer une application WEB

const app = express(); // génère une application express

app.use('/', (req, res, next) =>{ // fonction qui prend en paramètre un chemin ("/"), la requete, la réponse et next qui permet de lancer d'autre middleware
    res.send('<h1>hello word</h1>');
});

app.listen(3000); // lance l'application sur le port 3000

Middleware : fonction comme app.use() elle ont besoin d’un chemin pour la ressource et de l’URI

ORM : doctrine, entityframework : permet de contrôler une base de donnée avec des lignes de code

On parle d’une api REST quand une ressource unique est accessible par une route

OAuth2 : norme conçu pour permettre à un site internet d’accéder à des ressources hébergées par d’autre application Web au nom d’un utilisateur

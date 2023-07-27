# API_HugoDB
 Note API Hugo DEBARRE

API : c'est un pc qui va chercher des ressources sur un autre (contrairement au WEB). Cela permet de faire l’interface entre deux technos différentes afin de pouvoir communiquer entre elles.

Réponse en format JSON ou XML

L’API REST (REST ful Representational State Transfer) désigne un ensemble un ensemble de règle de contrainte de construction des APIs (c’est un standard). Une API qui récupère la météo possède des ressources lié à des URIs (Uniform Resource Identifier).
Exemple :weather forecast api

Client désigne la machine qui va chercher la ressource sur un serveur, une API. L’URI est composé de : VERB/ressource par exemple : http://localhost:3000/ et de Headers : métadonnée associé à la requête http composé par exemple de Accept : indique au serveur le format de réponse, Authorization : indique au serveur si on a le droit de faire cette requête (Token, access Token), Body :


Requête HTTP : GET, POST, PATCH, PUT, DELETE

API STATELESS : le client et le serveur ne doivent pas enregistré les échanges. Chaque cycle de requête réponse prenne en info juste ce qu’elles ont besoin.

Headers : META données associées à la requête HTTP(s) (accept, autorisations,
body)


Middleware : fonction comme app.use() elle ont besoin d’un chemin pour la ressource et de l’URI

API REST → REpresentationnal State Transfer
Standard de construction des API depuis le début des années 2000
But : organiser les ressources avec une liste d’uri (Uniform Resource Identifier) qui permet d’obtenir des données en retour au format JSON ou XML.

ORM : doctrine, entityframework : permet de contrôler une base de donnée avec des lignes de code

On parle d’une api REST quand une ressource unique est accessible par une route

OAuth2 : norme conçu pour permettre à un site internet d’accéder à des ressources hébergées par d’autre application Web au nom d’un utilisateur

pour installer une appli : npm install <nomModule>

En résumé, l'API REST est un moyen pratique pour faire communiquer différentes applications sur le web. Elle suit des règles simples et efficaces pour échanger des informations entre programmes de manière sécurisée et facile à comprendre.

# API_HugoDB
//constantes
// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Importation des fichiers de route
const connexionRoutes = require('./src/routes/connexionRoutes');
const etudiantRoutes = require('./src/routes/etudiantRoutes');
const intervenantRoutes = require('./src/routes/intervenantRoutes');
const attachePromRoutes = require('./src/routes/attachePromRoutes');
const responsablePedaRoutes = require('./src/routes/responsablePedaRoutes');
const directionRoutes = require('./src/routes/directionRoutes');
const ecoleRoutes = require('./src/routes/ecoleRoutes');
const creneauRoutes = require('./src/routes/creneauRoutes');
const droitRoutes = require('./src/routes/droitRoutes');
const matiereRoutes = require('./src/routes/matiereRoutes');
const postbacRoutes = require('./src/routes/postbacRoutes');
const promotionRoutes = require('./src/routes/promotionRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const salleRoutes = require('./src/routes/salleRoutes');
const specialiteRoutes = require('./src/routes/specialiteRoutes');
const typeSalleRoutes = require('./src/routes/typeSalleRoutes');
const coursRoutes = require('./src/routes/coursRoutes');

// Chargement des variables d'environnement depuis le fichier '.local-env'
dotenv.config({ path: './.local-env' });

// Définition d'autres constantes
const PORT = process.env.PORT || '3001'; // Le port du serveur est défini par une variable d'environnement, sinon il utilisera le port 3001 par défaut
const app = express(); // Création de l'application Express

// Configuration des middlewares
app.use(express.json()); // Permet de parser les requêtes entrantes avec des corps de type JSON
app.use(bodyParser.json()); // Middleware obsolète pour parser les requêtes avec des corps de type JSON (doublon avec le middleware précédent)
app.use(cors()); // Active la prise en charge du partage des ressources interdomaines (CORS) pour permettre à l'API d'être accessible depuis différents domaines

// Attribution des routes aux différentes URL
app.use('/connexion', connexionRoutes);
app.use('/etudiant', etudiantRoutes);
app.use('/intervenant', intervenantRoutes);
app.use('/attacheProm', attachePromRoutes);
app.use('/responsablePeda', responsablePedaRoutes);
app.use('/direction', directionRoutes);
app.use('/ecole', ecoleRoutes);
app.use('/creneau', creneauRoutes);
app.use('/droit', droitRoutes);
app.use('/matiere', matiereRoutes);
app.use('/postbac', postbacRoutes);
app.use('/promotion', promotionRoutes);
app.use('/role', roleRoutes);
app.use('/salle', salleRoutes);
app.use('/specialite', specialiteRoutes);
app.use('/typeSalle', typeSalleRoutes);
app.use('/cours', coursRoutes);

// Route par défaut, répond avec un objet JSON contenant des informations sur le serveur
app.use('/', (req, res, next) => {
    res.status(200).json({ serverPort: `${PORT}`, status: 'running' });
    return;
    //res.send(`<h1>Server du projet Signature sur le port ${PORT}</h1>`)
})

// Écoute du port spécifié
app.listen(PORT, () =>
    console.log(`server started on port ${PORT}`)
);
// Le code crée une API utilisant le framework Express en Node.js. Il configure des routes pour gérer différents points d'extrémité de l'API et écoute un port spécifié pour les requêtes entrantes. Il utilise également CORS pour permettre l'accès à l'API à partir de différents domaines.

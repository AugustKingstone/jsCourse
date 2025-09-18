import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Ceci est la route principale de mon API de gestion scolaire',
    version: '1.0.0',
  });
});

app.get('/test-route', (req, res) => {
  res.json({
    message: 'Ceci est la route test de mon API de gestion scolaire',
    version: '1.0.1',
  });
});

app.listen(PORT, () => {
  const msg = figlet.textSync('Serveur Lancer!', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });

  const gradientMsg = gradient.rainbow.multiline(msg);

  const boxedMessage = boxen(
    `🎉 Serveur démarré avec succès!\n👉 URL: http://localhost:${PORT}`,
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
    }
  );

  console.log(gradientMsg);
  console.log(boxedMessage);
});



/**
Ce code configure et lance un serveur Express pour une API de gestion scolaire, en ajoutant des middlewares pour le JSON, le CORS et en affichant un message de démarrage stylisé dans la console.

### Fonctionnalités principales

- Importation des modules nécessaires (express, dotenv, cors, figlet, gradient-string, boxen).
- Configuration du serveur Express, du port (via variables d’environnement ou défaut 3000), et activation des middlewares pour traiter les requêtes JSON et URL-encodées.
- Activation du CORS pour permettre les requêtes d’autres origines.
- Montage des routes `/api/projects` pour gérer les projets à travers le routeur défini auparavant.
- Définition de deux routes simples :
    - `/` pour l’accueil de l’API
    - `/test-route` pour tester le bon fonctionnement.

### Démarrage stylisé

- Au lancement, le serveur affiche le texte "Serveur Lancer!" en ASCII coloré et encadré, grâce à figlet, gradient-string et boxen, pour une expérience console agréable.

### Utilisation

Ce fichier sert de point d’entrée principal : il initialise le serveur et relie toutes les fonctionnalités (routes, contrôleurs) nécessaires au fonctionnement de l’API scolaire.
 */
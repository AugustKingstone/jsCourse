// routes projectRoutes.js

import { Router } from 'express';
const router = Router();
import projectController from '../controllers/projectController.js';

const projectRoutes = Router(); 

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

export default router ;


/**
Ce code définit les routes d’API pour gérer les projets dans une application Express. Il connecte chaque URL à la fonction correspondante du contrôleur projet.

### Fonctionnement des routes

- Utilisation du routeur Express pour définir les chemins relatifs aux projets ("/", "/:id").
- Chaque route associe une méthode HTTP à une opération précise :
    - GET "/" → liste tous les projets.
    - GET "/:id" → affiche un projet spécifique.
    - POST "/" → crée un nouveau projet.
    - PUT "/:id" → met à jour un projet existant.
    - DELETE "/:id" → supprime un projet.

### Utilisation

Ce module est à importer dans le serveur principal pour activer les points d’entrée de l’API projets. Il sert d’interface entre les requêtes HTTP et le contrôleur de projets, permettant de réaliser toutes les actions CRUD.
 */
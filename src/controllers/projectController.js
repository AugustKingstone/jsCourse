// controllers/projectController.js

import Project from '../models/Project.js';

const projectController = {
    // GET /api/projects - Récupérer tous les projets
    getAllProjects: (req, res) => {
        try {
            const projects = Project.getAll();
            res.status(200).json({
                success: true,
                data: projects,
                message: `${projects.length} projet(s) trouvé(s)`
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des projets',
                error: error.message
            });
        }
    },

    // GET /api/projects/:id - Récupérer un projet par ID
    getProjectById: (req, res) => {
        try {
            const { id } = req.params;
            const project = Project.getById(id);
            
            if (!project) {
                return res.status(404).json({
                    success: false,
                    message: 'Projet non trouvé'
                });
            }
            
            res.status(200).json({
                success: true,
                data: project
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération du projet',
                error: error.message
            });
        }
    },

    // POST /api/projects - Créer un nouveau projet
    createProject: (req, res) => { 
        try {
            const { title, description, status } = req.body;
            
            // Validation simple
            if (!title || !description) {
                return res.status(400).json({
                    success: false,
                    message: 'Le titre et la description sont obligatoires'
                });
            }

            const project = Project.create({ title, description, status });
            
            res.status(201).json({
                success: true,
                data: project,
                message: 'Projet créé avec succès'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la création du projet',
                error: error.message
            });
        }
    },

    // PUT /api/projects/:id - Mettre à jour un projet
    updateProject: (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;
            
            const project = Project.update(id, updateData);
            
            if (!project) {
                return res.status(404).json({
                    success: false,
                    message: 'Projet non trouvé'
                });
            }
            
            res.status(200).json({
                success: true,
                data: project,
                message: 'Projet mis à jour avec succès'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour du projet',
                error: error.message
            });
        }
    },

    // DELETE /api/projects/:id - Supprimer un projet
    deleteProject: (req, res) => {
        try {
            const { id } = req.params;
            const project = Project.delete(id);
            
            if (!project) {
                return res.status(404).json({
                    success: false,
                    message: 'Projet non trouvé'
                });
            }
            
            res.status(200).json({
                success: true,
                data: project,
                message: 'Projet supprimé avec succès'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression du projet',
                error: error.message
            });
        }
    }
};

export default projectController;


/**
 Ce code est un contrôleur pour gérer les projets dans une API Node.js. Il permet de créer, lire, mettre à jour et supprimer des projets en utilisant le modèle Project.

### Fonctionnalités principales

- Récupérer tous les projets : Retourne la liste des projets disponibles avec un message indiquant le nombre trouvé.
- Récupérer un projet par ID : Retourne un projet précis selon son identifiant ; gère l’erreur si le projet n’existe pas.
- Créer un projet : Vérifie que le titre et la description sont fournis, puis ajoute un projet au système.
- Mettre à jour un projet : Modifie les détails d’un projet existant ; informe si le projet n’existe pas.
- Supprimer un projet : Efface un projet selon son identifiant ; informe si le projet n’existe pas.

### Structure du contrôleur

- Chaque méthode utilise un bloc try/catch pour gérer les erreurs et envoyer une réponse HTTP appropriée (statuts 200, 201, 400, 404, 500).
- Les données sont extraites soit des paramètres d’URL (ID), soit du corps de la requête (title, description, status).
- Les réponses sont formatées en JSON et incluent un indicateur de succès, des données, et des messages d’état.

### Utilisation

Ce contrôleur est à importer dans l’application et à associer aux routes correspondantes (“/api/projects”). Il facilite l’interfaçage entre le front-end et la base de données via le modèle Project.
 */
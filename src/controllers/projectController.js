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
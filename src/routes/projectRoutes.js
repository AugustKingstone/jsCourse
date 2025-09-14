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
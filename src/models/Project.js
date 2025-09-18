// models/Project.js
class Project {
    constructor(id, title, description, status = 'En cours', createdAt = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = new Date();
    }
    

    // Méthode pour mettre à jour le projet
    update(data) {
        Object.keys(data).forEach(key => {
            if (data[key] !== undefined && key !== 'id' && key !== 'createdAt') {
                this[key] = data[key];
            }
        });
        this.updatedAt = new Date();
        return this;
    }

    // Méthode pour obtenir les informations du projet
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

// Simulation d'une base de données en mémoire
let projects = [];
let nextId = 1;

// Méthodes statiques pour gérer les projets
Project.getAll = () => projects.map(p => p.toJSON());

Project.getById = (id) => {
    const project = projects.find(p => p.id === parseInt(id));
    return project ? project.toJSON() : null;
};

Project.create = (data) => {
    const project = new Project(nextId++, data.title, data.description, data.status);
    projects.push(project);
    return project.toJSON();
};

Project.update = (id, data) => {
    const project = projects.find(p => p.id === parseInt(id));
    if (project) {
        project.update(data);
        return project.toJSON();
    }
    return null;
};

Project.delete = (id) => {
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        const deleted = projects[index];
        projects.splice(index, 1);
        return deleted.toJSON();
    }
    return null;
};

export default Project;




/**
Ce code définit une classe Project et les méthodes pour gérer les projets dans une "base de données" en mémoire, sans stockage externe.

### Fonctionnement de la classe Project

- La classe Project représente un projet avec ses propriétés : id, titre, description, statut, dates de création et modification.
- La méthode update permet de changer les attributs (sauf id, createdAt) et met à jour la date de modification.
- La méthode toJSON formate et retourne les informations du projet en objet simple, pratique pour l’API.

### Simulations et opérations CRUD

- Les projets sont stockés dans un tableau projects, et nextId génère les identifiants automatiquement.
- Les méthodes statiques (getAll, getById, create, update, delete) simulent les actions principales d’une base de données classique :
    - getAll : retourne la liste des projets.
    - getById : sélectionne un projet selon son id.
    - create : ajoute un nouveau projet.
    - update : modifie un projet existant.
    - delete : supprime un projet spécifié.

### Utilisation

Ce modèle permet la gestion complète des projets dans une API Node.js, utile pour développer et tester des fonctionnalités sans accès à une vraie base de données.
 */

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

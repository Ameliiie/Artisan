# Trouve ton artisan

## Description

Trouve ton artisan est une application web réalisée dans le cadre de la formation Développeur Web du Centre Européen de Formation.

Cette plateforme permet aux particuliers de rechercher un artisan de la région Auvergne-Rhône-Alpes, de consulter sa fiche détaillée et de le contacter via un formulaire.

---

## Technologies utilisées

### Front-end

- React
- Bootstrap
- Sass
- React Router
- React Helmet Async

### Back-end

- Node.js
- Express
- Sequelize
- MySQL

### Outils

- Visual Studio Code
- Git
- GitHub
- Figma
- phpMyAdmin

---

## Prérequis

Avant d'installer le projet, vous devez disposer de :

- Node.js
- npm
- MySQL ou MariaDB
- Git

---

## Installation

Cloner le dépôt GitHub :

```bash
git clone https://github.com/VOTRE-LIEN-GITHUB.git
```

Se placer dans le dossier du projet :

```bash
cd trouve-ton-artisan
```

---

## Installation des dépendances

### Front-end

```bash
cd frontend
npm install
```

### Back-end

```bash
cd backend
npm install
```

---

## Configuration

Créer un fichier `.env` dans le dossier **backend** contenant les informations de connexion à la base de données.

Exemple :

```env
DB_HOST=localhost
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
PORT=3001
```

---

## Base de données

Le dépôt contient :

- `schema.sql` : script de création de la base de données.
- `data.sql` : script d'alimentation de la base de données.

Importer d'abord **schema.sql**, puis **data.sql** dans MySQL ou phpMyAdmin.

---

## Lancement du projet

### Démarrer le backend

```bash
cd backend
npm start
```

Le serveur sera accessible à l'adresse :

```
http://localhost:3001
```

---

### Démarrer le frontend

```bash
cd frontend
npm start
```

Le site sera accessible à l'adresse :

```
http://localhost:3000
```

---


## Crédits

Les images utilisées dans ce projet proviennent de :

- Pixabay : https://pixabay.com/
- Logo et favicon fournis dans le cadre du projet par le Centre Européen de Formation (CEF).


## Auteur

Projet réalisé par **Amélie Barbier** dans le cadre de la formation Développeur Web du Centre Européen de Formation.

---

## Licence

Projet pédagogique réalisé dans le cadre de la formation du Centre Européen de Formation.
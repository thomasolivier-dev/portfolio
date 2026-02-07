# Portfolio

Site portfolio développé avec Angular pour présenter mes compétences, mes projets et mon parcours de développeur. Ce projet me permet également d'expérimenter les bonnes pratiques Angular, l'architecture moderne et les nouvelles fonctionnalités du framework.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18.19 ou supérieure recommandée)
- **Angular CLI** version 19
- **npm** (inclus avec Node.js)

Vous pouvez vérifier vos versions installées avec :
```bash
node --version
# Attendu : v18.19.0 ou supérieur (ex: v20.x.x, v22.x.x)

npm --version
# Attendu : 9.x.x ou supérieur (ex: 10.x.x)

ng version
# Attendu : Angular CLI: 19.x.x
```

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DE_VOTRE_REPO]
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

## Lancement du projet

Pour démarrer le serveur de développement :
```bash
ng serve
```

Puis ouvrez votre navigateur à l'adresse `http://localhost:4200/`

L'application se rechargera automatiquement à chaque modification des fichiers source.

## Build

Pour générer une version de production :
```bash
ng build
```

Les fichiers de build seront générés dans le répertoire `dist/`.
# Series Tracker

Une application web moderne pour suivre vos séries préférées, construite avec Next.js, TypeScript, et Tailwind CSS.

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Git

## Installation

1. Clonez le dépôt :

```bash
git clone [URL_DU_REPO]
cd SeriesTracker
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
DATABASE_URL="mysql://malotiaux_axel:KAduK38cIErG3mUC@51.91.12.160:9212/series_tracker"
BETTER_AUTH_SECRET="votre_secret_betterauth"
```

4. Initialisez la base de données :

```bash
npx prisma generate
npx prisma db push
```

## Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Technologies utilisées

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- BetterAuth.js
- Shadcn UI
- Zustand (gestion d'état)

## Structure du projet

- `/app` : Pages et routes de l'application
- `/features` : Fonctionnalités spécifiques
- `/prisma` : Schéma et migrations de la base de données
- `/public` : Fichiers statiques
- `/shared` : Utilitaires et types partagés

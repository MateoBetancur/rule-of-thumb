# Rule of thumb - Zemoga test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create .env.local in the root directory and then you must declare the specified environment variables in the mail

```bash
FIREBASE_SERVICE_ACCOUNT_KEY
FIREBASE_DATABASE_URL
DOMAIN
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use

### Basic Structure

```bash
public
|
src
|_ components
|   |_ Atoms
|   |_ Molecules
|   |_ Organism
|_ interfaces
|_ pages
|   |_ api
|_ styles
|_ utils
```

**`public`** in this folder you will find all static assets like imgs etc.

**`components`** structure based on atomic design reference.

**`interfaces`** in this folder you will find the interface used for controversial people.

**`pages`** in this folder you will find the main page of the aplication, inside of **index.html** is the method that returns the controversial people from the database to the app.

**`styles`** in this folder you will find the global styles and the sass variables.

**`utils`** in this folder you will find some shared functions for the app, like the connection with firebase and the function to handle local storage.

### Data Persistent

In the `pages/api` directory is mapped three services to connect to firebase.

- `pages/api/getCharacters` this service returns all controversial people.
- `pages/api/createCharacter` this service creates a new controversial people.
- `pages/api/updateVotes` this service updates a the votes of controversial people.

## Deploy on Vercel

You can see the app deployment in [Rule of thumb - Zemoga test](https://rule-of-thumb-zemoga.vercel.app/).

## Author
`Mateo Echeverri Betancur`
# Thanks for you attention
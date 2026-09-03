# Image officielle Node.js légère
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Copie des fichiers applicatifs et guides
COPY package.json ./
COPY server.js index.html sessions_catalog.json guides_etalon.json ./
COPY Guides_Pedagogiques ./Guides_Pedagogiques

# Création du dossier Sessions_Data
RUN mkdir -p Sessions_Data

# Exposition du port
EXPOSE 3000

# Variables d'environnement
ENV PORT=3000
ENV NODE_ENV=production

# Commande de démarrage
CMD ["node", "server.js"]

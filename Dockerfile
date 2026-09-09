# Image officielle Node.js légère
FROM node:20-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie des métadonnées
COPY package.json ./

# Copie des fichiers applicatifs du dépôt Git
COPY . ./

# Création des points de montage pour les volumes vidéos
RUN mkdir -p /app/Sessions_Data /app/Sessions_Data_Septembre_2026 /app/Sessions_PASI

# Exposition du port
EXPOSE 3000

# Variables d'environnement
ENV PORT=3000
ENV NODE_ENV=production

# Commande de démarrage
CMD ["node", "server.js"]

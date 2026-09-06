# Image officielle Node.js légère
FROM node:20-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie des métadonnées
COPY package.json ./

# Copie des fichiers applicatifs du dépôt Git
COPY server.js index.html sessions_catalog.json sessions_catalog_septembre.json guides_etalon.json Planning_Formation_IA_OIDANEOS_Septembre_2026.ics ./

# Création des points de montage pour les volumes vidéos Sessions_Data
RUN mkdir -p /app/Sessions_Data /app/Sessions_Data_Septembre_2026

# Exposition du port
EXPOSE 3000

# Variables d'environnement
ENV PORT=3000
ENV NODE_ENV=production

# Commande de démarrage
CMD ["node", "server.js"]

# Image officielle Node.js légère
FROM node:20-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie des métadonnées
COPY package.json ./

# Copie des fichiers applicatifs et données
COPY server.js prototype.html index.html* sessions_catalog.json guides_etalon.json ./
COPY Guides_Pedagogiques ./Guides_Pedagogiques
COPY Modeles_Certification_Stagiaires ./Modeles_Certification_Stagiaires
COPY Dossier_Certification_IA_DATA ./Dossier_Certification_IA_DATA
COPY Sessions_Data ./Sessions_Data

# Exposition du port
EXPOSE 3000

# Variables d'environnement
ENV PORT=3000
ENV NODE_ENV=production

# Commande de démarrage
CMD ["node", "server.js"]

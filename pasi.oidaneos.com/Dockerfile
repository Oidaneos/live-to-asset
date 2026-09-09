# Image officielle Node.js légère
FROM node:20-alpine

WORKDIR /app

# Copie des fichiers applicatifs PASI
COPY pasi.oidaneos.com/ ./

RUN mkdir -p /app/Sessions_PASI

EXPOSE 3001
ENV PORT=3001
ENV NODE_ENV=production

CMD ["node", "server.js"]

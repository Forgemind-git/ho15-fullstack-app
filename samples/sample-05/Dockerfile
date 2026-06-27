FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY backend/ ./backend/
COPY frontend/ ./frontend/
RUN mkdir -p data
EXPOSE 3000
CMD ["node", "backend/server.js"]

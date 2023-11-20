# Layered build
# Build stage
FROM node:20.9.0-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
# Execution Stage
FROM node:20.9.0-alpine3.18
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json .
COPY --from=build /app/vite.config.ts .
RUN npm install --production
EXPOSE 3000
CMD [ "npm", "run", "preview"]


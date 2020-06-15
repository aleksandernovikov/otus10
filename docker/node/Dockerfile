FROM node:lts-alpine as build-stage

WORKDIR /app
COPY frontend-react/package*.json ./
RUN npm install --dev
COPY frontend-react/ .
RUN npm run build

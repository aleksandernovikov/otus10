FROM node:lts-alpine
#https://ru.vuejs.org/v2/cookbook/dockerize-vuejs-app.html#%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%B8%D0%B7-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8

WORKDIR /app/frontend-react
COPY ./frontend-react .
RUN npm install
RUN npm run build
RUN ls -la && cd dst && ls -la

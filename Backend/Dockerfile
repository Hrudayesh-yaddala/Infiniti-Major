FROM node:21-alpine AS BUILD

WORKDIR /usr/src/Backend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=BUILD /usr/src/Backendend/dist /usr/share/nginx/html

EXPOSE 90

CMD ["nginx", "-g", "daemon off;"]
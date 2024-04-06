FROM node:21-alpine AS BUILD

WORKDIR /usr/src/Frontend

COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=BUILD /usr/src/Frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
FROM node:16-alpine

WORKDIR /usr/src/app

COPY . ./
RUN npm ci

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN npm run build

CMD [ "npm", "start" ]
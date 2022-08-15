FROM node:16.16.0-alpine3.16

WORKDIR /usr/src/app

COPY . ./
RUN npm install
# RUN npm ci && npm cache clean --force


EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN npm run build


CMD [ "npm", "start" ]


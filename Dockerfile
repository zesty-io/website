FROM node:18.18.2-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm ci --only=production --ignore-scripts && npm cache clean --force

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

CMD [ "npm", "start" ]

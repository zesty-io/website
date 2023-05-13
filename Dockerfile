FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm set-script prepare "" && npm ci --only=production && npm cache clean --force

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


CMD [ "npm", "start" ]


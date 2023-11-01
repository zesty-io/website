FROM node:20.9.0-alpine3.18

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install --prod --prefer-offline --ignore-scripts  && pnpm store prune

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

CMD [ "pnpm", "start" ]


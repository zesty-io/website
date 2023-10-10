FROM node:16.16.0-alpine3.16

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm set-script prepare "" &&  pnpm install --prod --prefer-offline --ignore-scripts  && pnpm store prune

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

CMD [ "pnpm", "start" ]


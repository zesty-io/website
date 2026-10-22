FROM node:24.22.1-alpine3.24

# Workaround: node:24.22.1-alpine3.24 ships ca-certificates-bundle 20260909-r0, which still trusts the compromised eMudhra intermediates (https://blog.cloudflare.com/emudhra-certificate-compromise)
# Remove once the upstream node:alpine image ships ca-certificates-bundle >= 20261020-r0
RUN apk add --no-cache --upgrade ca-certificates-bundle

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm ci --omit=dev --ignore-scripts && npm cache clean --force

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

CMD [ "npm", "start" ]

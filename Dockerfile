FROM node:20-alpine as development

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY . .

RUN pnpm install --force

EXPOSE 2024

CMD ["pnpm", "run", "dev"]

FROM node:20-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

RUN pnpm run build

EXPOSE 2024

CMD ["node", "dist/server.js"]

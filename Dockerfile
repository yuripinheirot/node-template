FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build


FROM node:20-alpine AS production

WORKDIR /usr/src/app

ENV NODE_ENV=production \
    PORT=4433 \
    TZ=UTC

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build /usr/src/app/package.json /usr/src/app/pnpm-lock.yaml ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

RUN chown -R appuser:appgroup /usr/src/app

USER appuser

EXPOSE 4433

CMD ["node", "dist/index.js"]
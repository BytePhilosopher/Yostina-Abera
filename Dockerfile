# ---- Build the client ----
FROM node:20-alpine AS client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# ---- Runtime: server + built client ----
FROM node:20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

COPY server/package*.json ./server/
RUN npm --prefix server ci --omit=dev

COPY server/ ./server/
# Bring in the built static site for Express to serve
COPY --from=client /app/client/dist ./client/dist

EXPOSE 4000
CMD ["node", "server/index.js"]

# ---- Base stage (shared) ----
    FROM node:18-alpine AS base
    WORKDIR /app
    ENV NODE_ENV=development
    COPY package*.json ./
    RUN npm install
    COPY . .
    
    # ---- Development stage ----
    FROM base AS dev
    EXPOSE 3000
    CMD ["npm", "run", "dev"]
    
    # ---- Production build stage ----
    FROM base AS build
    ENV NODE_ENV=production
    RUN npm run build
    
    # ---- Production runtime stage ----
    FROM node:18-alpine AS production
    WORKDIR /app
    ENV NODE_ENV=production
    COPY --from=build /app ./
    RUN npm install --omit=dev
    EXPOSE 3000
    CMD ["npm", "start"]
    
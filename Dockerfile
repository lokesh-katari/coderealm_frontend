
# FROM node:alpine 

# WORKDIR /app  

# COPY package*.json ./  

# RUN npm ci  

# COPY . .  

# # RUN npm run dev

# EXPOSE 3000  

# RUN npx prisma generate

# CMD ["npm", "run","dev"]  
FROM node:alpine as builder
WORKDIR /my-space

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:alpine as runner
WORKDIR /my-space
COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/package-lock.json .
COPY --from=builder /my-space/next.config.mjs ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "./server.js"]
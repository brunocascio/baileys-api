FROM node:22-alpine
RUN apk --no-cache add git curl
WORKDIR /app
COPY package*.json .
RUN npm ci
RUN npx prisma migrate
COPY . .
EXPOSE 3000
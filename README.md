> 🚨 **NOTICE**: This projects aims to be only for personal and learning purposes. Breaking changes can be created accordingly to my own needs, so if you plan to use it it's on your own risk.

# Baileys API

Baileys is a simple, fast and easy to use WhatsApp Web API written in TypeScript. It is designed to be simple to use and is optimized for usage in Node.js.

An implementation of [@WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys) as a simple REST API with multiple device support

Project continued from [nizarfadlan/baileys-api](https://github.com/nizarfadlan/baileys-api)

## Requirements

-   NodeJS version 22 or higher
-   Prisma [supported databases](https://www.prisma.io/docs/reference/database-reference/supported-databases). Tested on PostgreSQL

## Installation

1. Clone this repo
2. Copy .env.example into .env
3. Run `docker compose up -d` (postgres database only)
4. Run `npm ci` for installing node's deps
5. Run `npx prisma migrate dev` for running migrations
6. Run `npm run dev` to execute the server

## Build the project using the `build` script

```sh
npm run build
```

Soon there will be more options

## `.env` Configurations

```env
# Listening Port HTTP and Socket.io
PORT="3000"

# Project Mode (development|production)
NODE_ENV="development"

# Global URL Webhook
URL_WEBHOOK="http://localhost:3000/webhook"

# Enable Webhook
ENABLE_WEBHOOK="false"

# Enable websocket
ENABLE_WEBSOCKET="true"

# Name browser bot
BOT_NAME="Whatsapp Bot"

# Database Connection URL
DATABASE_URL="postgres://postgres:2024pass@localhost:5432/bailey"

# Pino Logger Level
LOG_LEVEL="debug"

# Reconnect Interval (in Milliseconds)
RECONNECT_INTERVAL="5000"

# Maximum Reconnect Attempts
MAX_RECONNECT_RETRIES="5"

# Maximum SSE QR Generation Attempts
SSE_MAX_QR_GENERATION="10"

# Name session config
SESSION_CONFIG_ID="session-config"

# API Key (for Authorization Header and Socket.io Token)
API_KEY="a6bc226axxxxxxxxxxxxxx"
```

## Usage

Make sure you have completed the **Installation** and **Setup** step

1. Now the endpoint should be available according to your environment variables configuration. Default is at `http://localhost:3000`

## API Docs

The API Documentation can fork **Postman Collection** in your workspace Postman

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/14456337-fb3349c5-de0e-40ec-b909-3922f4a95b7a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D14456337-fb3349c5-de0e-40ec-b909-3922f4a95b7a%26entityType%3Dcollection%26workspaceId%3Dfbd81f05-e0e1-42cb-b893-60063cf8bcd1)

## Notes

-   I only provide a simple authentication method, please modify according to your own needs.

## Notice

This project is intended for learning purpose only, don't use it for spamming or any activities that's prohibited by **WhatsApp**

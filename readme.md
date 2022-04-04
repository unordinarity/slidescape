# Slidescape

Free open-source new tab extension for browsers

# Usage

Install as Google Chrome extension

Install as Firefox add-on

Open as a stand-alone web application

# Develop

Prerequisites:
- Node.js
- Yarn

Install dependencies:
```shell
yarn
```

Run project:
```shell
cd packages/client && yarn develop
```

## Unsplash proxy

To use Unsplash backdrops you also need to run Unsplash proxy server

Register application and write your private key in `packages/server/.env` config
```dotenv
UNSPLASH_ACCESS=123456
```

Then start server
```shell
cd packages/server && yarn develop
```

Make sure proxy server listens same port as used in client in application
```dotenv
# packages/server/.env
PORT=3001

# packages/client/.env
UNSPLASH_API=http://localhost:3001
```

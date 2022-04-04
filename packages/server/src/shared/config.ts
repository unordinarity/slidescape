import { config as dotenvConfig } from 'dotenv'

dotenvConfig();

interface Config {
  server: {
    port: string
  },
  unsplash: {
    access: string,
    secret: string,
    host: string,
  },
  openweather: {
    key: string,
    host: string,
  }
}

const _config = {
  server: {
    port: process.env['SERVER_PORT'] ?? null,
  },
  unsplash: {
    access: process.env['UNSPLASH_ACCESS'] ?? null,
    secret: process.env['UNSPLASH_SECRET'] ?? null,
    host: process.env['UNSPLASH_HOST'] ?? null,
  },
  openweather: {
    key: process.env['OPENWEATHER_KEY'] ?? null,
    host: process.env['OPENWEATHER_HOST'] ?? null,
  }
}

if (
  !_config.server.port ||
  !_config.unsplash.access ||
  !_config.unsplash.secret ||
  !_config.unsplash.host ||
  !_config.openweather.key ||
  !_config.openweather.host
) {
  throw new Error('missing dotenv variables')
}

export const config = (_config as Config)

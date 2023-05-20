interface AppConfig {
  name: string;
}

interface Config {
  [key: string]: {
    [key: string]: any;
  };
}

const env: string = process.env.NODE_ENV || "development";

const config: Config = {
  development: {
    app: {
      name: "Nuxt project",
    },
    port: process.env.PORT || 3000,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
  },

  test: {
    app: {
      name: "Nuxt project",
    },
    port: process.env.PORT || 3000,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
  },

  production: {
    app: {
      name: "Nuxt project",
    },
    port: process.env.PORT || 3000,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
  },
};
export default config[env];

const pgConnection = process.env.DATABASE_URL; // DATABASE_URL is the automatic environment variable that heroku postgres will create. 

module.exports = {

  development: {
    client: 'pg', 
    connection: {
      host: 'localhost',
      database: 'secret_santa', 
      user: 'postgres',
      password: 'postgres' 
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  testing: {
    client: 'pg', 
    connection: {
      host: 'localhost',
      database: 'secret_santa',
      user: 'postgres', 
      password: 'postgres' 
    },
    migrations: {
      directory: './data/migrations' 
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      directory: './data/migrations' 
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
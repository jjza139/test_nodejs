const config = {
  app: {
    port: 9000
  },
  mysql: {
    host: '203.154.59.102',
    port: 3306,
    database: 'api_itg',
    user: 'root',
    password: 'THREL#Admin',
  }, 
  // mysql: {
  //   host: '203.154.71.187',
  //   port: 3306,
  //   database: 'Astro_new_generation',
  //   user: 'Ait_dev',
  //   password: 'rklg;biNf8iy[',
  // },
  mongo:{
    MONGO_USERNAME:'root',
    MONGO_PASSWORD: 'P@ssw0rd!23',
    MONGO_SERVER :'203.154.71.187',
    MONGO_PORT :27017,
    MONGO_DATABASE_NAME:'Astro_new_generation'
  }
};

   module.exports = config;
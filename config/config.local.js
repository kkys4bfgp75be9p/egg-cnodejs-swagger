'use strict';

module.exports = () => {
  const config = {};


  config.swaggerbox = {
    apiInfo: {
      title: 'egg-cnodejs-swagger',
      description: 'swagger-ui for cnodejs',
      version: '1.0.0',
    },
    ui: {
      prefix: '/',
      // dir: path.join(__dirname, "../app/public"),
      dynamic: true,
      preload: false,
      buffer: false,
      maxFiles: 1000,
    },
    // securityDefinitions: {
    //   Bearer: {
    //     type: 'apiKey',
    //     name: 'Authorization',
    //     in: 'header',
    //   },
    //   Accesstoken: {
    //     type: 'apiKey',
    //     name: 'accesstoken',
    //     in: 'query',
    //   },
    // },
    // enableSecurity: true,
  };

  return config;
};

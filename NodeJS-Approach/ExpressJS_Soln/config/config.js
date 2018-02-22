const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  const config = require('./config.json');
  const envConfig = config[env];

  Object.keys(envConfig).forEach((key) =>{
    process.env[key] = envConfig[key];
  });
};


/* Ignore the config.json file, using gitignore. That shouldn't be uploaded to repositories, however am doing so, that the approach can be understood,  can contain secret keys etc.. */

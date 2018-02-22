const yargs = require('yargs');

const weather = require('./weather/weather');

const argv = yargs
  .options({
    z: {
      demand: true,
      alias: 'zip',
      describe: 'ZipCode to fetch weather for. eg For London Try -z 40741 ',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

weather.getWeather(argv.zip).then((weatherResults) =>{
  console.log(JSON.stringify(weatherResults, undefined, 2));
}, (error) =>{
  console.log(error);
});

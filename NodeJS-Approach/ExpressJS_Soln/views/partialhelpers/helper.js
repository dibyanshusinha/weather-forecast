const hbs = require('hbs');

hbs.registerHelper('getCurrentYear', () =>{
  return  new Date().getFullYear();
});

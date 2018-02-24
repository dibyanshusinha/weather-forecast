# Weather-forecast


## Objective: For the Position of Full-Stack Developer

**Requirement:** A single HTML page displaying the 5 day weather forecast for a __location of your choice__.

**Reason:**  This exercise is to help in examining my technical knowledge, reasoning and engineering principals. It should demonstrate my experience and skill using current software development technologies and methods.


## Approaches:
After reading the Project details provided, I had few ways I could implement it. Instead of creating the product to show data for a specific choice, I have created it to reflect data according to any Zip Code being entered by the user. !!

### Deployment on Client Side: (https://github.com/dibyanshusinha/weather-forecast/tree/master/Client-or-FrontEnd-Approaches)
*Pros: No Backend Needed*

  * Hacky Way(*Pros: No Api needed*) !!
    Use any web page url that shows the weather report, load it's content in a hidden iframe or something similar and then do web-scraping on it's html content to find the actual data and show it in the app being developed !

    *  [Using HTML5 & PHP](https://github.com/dibyanshusinha/weather-forecast/tree/master/Client-or-FrontEnd-Approaches/html5-php-soln) _Could be created using Vanilla JS/Jquery too_ - Web Scraping

  * Using the OpenWeatherMap API (*Cons: Registration Required for free subscription*)
    This was mentioned so preferring these approaches.

    *  [Using Angular.JS v 1](https://github.com/dibyanshusinha/weather-forecast/tree/master/Client-or-FrontEnd-Approaches/angular-js-v1-soln)
    *  [Using only JavaScript: React.js](https://github.com/dibyanshusinha/weather-forecast/tree/master/Client-or-FrontEnd-Approaches/react-soln/my-app)  Choosing React as the preferred framework for this use-case. Instead of using some third-party http lib(felt too much for single GET request), ended up writing a native JS with support for Promises.


### Server Side Approaches: (https://github.com/dibyanshusinha/weather-forecast/tree/master/NodeJS-Approach)
*It was mentioned to demo some Node.js exp* - Using ES 6/7

Choosing "request" Node module for making GET requests and wrapping it as a Promise supported module. _Obviously using axios, it would have been easier with in-built Promise support !!_

  * [As a console App](https://github.com/dibyanshusinha/weather-forecast/tree/master/NodeJS-Approach/ConsoleApp_Soln)

#### TDD Approach, using Mocha, Express...  

  * [As a webApp](https://github.com/dibyanshusinha/weather-forecast/tree/master/NodeJS-Approach/ExpressJS_Soln) It contains 2 Test cases.(Could have had more)



***********


### What could be done with more time ?

I believe progress/improvement to be a never ending continuous process. With time many things could have been improved to a point where it would have been ~~perfect~~  close to perfect !!

However few of the things that currently comes to mind:
* Few more validations
* Add some graphs for historical Data
* Done data Formatting(more sanitized )
* Add solution using few more frameworks
* Include more test cases
* Way better UI, with features like animation etc, for eg if it's raining, the background could have some animations that would imitate the real world raining etc..., but without losing focus from my approach. i.e. minimal design.
* Make it more intuitive like instead of zip code it can accept all relevant query using city name, lat-lon etc...


# Instructions
***********
To Check the Projects please follow the links provided in the Approaches Section or manually follow the folders.
Every Soln Folder has it's own Readme guide !! (For the frontend approaches: live links are in there too..) () :)

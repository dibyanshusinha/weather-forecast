# Weather-forecast


## Objective: For the Position of Full-Stack Developer

**Requirement:** A single HTML page displaying the 5 day weather forecast for a __location of your choice__.

**Reason:**  This exercise is to help in examining my technical knowledge, reasoning and engineering principals. It should demonstrate my experience and skill using current software development technologies and methods.


## Approaches:
After reading the Project details provided, I had few ways I could implement it. Instead of creating the product to show data for a specific choice, I have created it to reflect data according to any Zip Code being entered by the user. !!

### Deployment on Client Side:
*Pros: No Backend Needed*

  * Hacky Way(*Pros: No Api needed*) !!
    Use any web page url that shows the weather report, load it's content in a hidden iframe or something similar and then scraping it's html content to find the actual data and show it in the app being developed !

    *  [Using HTML5 & PHP](https://www.google.com) _Could be created using Vanilla JS/Jquery too_ - Web Scraping

  * Using the OpenWeatherMap API (*Cons: Registration Required for free subscription*)
    This was mentioned so preferring these approaches.

    *  [Using Angular.JS v 1](https://www.google.com)
    *  [Using only JavaScript:](https://www.google.com)  choosing React as the preferred framework for this use-case.


### Server Side Approach:
*It was mentioned to demo some Node.js exp*

#### TDD Approach, using Mocha

Choosing "request" Node module(doesn't have inbuilt Promise) for making requests and wrapping it as a Promise supported module. _Obviously using axios, it would have been simply much easier !!_

  * [As a console App](https://www.google.com)
  * [As a webApp](https://www.google.com) It contains 2 Test cases.(Could have more)



***********


### What could be done with more time ?

I believe progress/improvement to be a never ending continuous process. With time many things could be improved to a point where it's ~~perfect~~  close to perfect !!

However few of the things that currently comes to mind:
* Few more validations
* Add some graphs for historical Data
* Add solution using few more frameworks
* Include more test cases
* Way better UI, with features like animation etc, for eg if it's raining, the background could have some animations that imitates the real world raining etc..., but without losing focus from my approach. i.e. minimal design.
* Make it more intuitive like instead of zip code it can accept all relevant query using city name, lat-lon etc...


# Instructions
***********
~~TODO~~

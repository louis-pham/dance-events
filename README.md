# dance-events

## Overview
This is a full stack event page application. It is geared towards street dance events - mainly battles/competitions.

The user is also able to sign up with their Google account, which allows them to create/delete their own events, along with signing up for events through an event's entry list.

The application itself takes inspiration mainly from two websites: [smash.gg](https://smash.gg/) and [Enter the Stage](http://et-stage.net).

My motivation for making this app was because during my time living in Japan, they mainly used Enter the Stage to promote/sign up for events, which I found was much more reliable and convenient to Facebook, which is what is mainly used here for street dance events. I was also impressed with smash.gg's ease of use and functionality - mainly the ability to create brackets of tournament players, and also how it links back to the user's account. This is the first step to a unique combination of these two websites to make it easier for dancers to see and attend battles.

You can check out the live Heroku app [here](https://dance-events.herokuapp.com)!

## Screenshots
![Landing page](https://i.imgur.com/2znYjb0.png)

![Add Event page](https://i.imgur.com/jdVUZYD.png)

## Technologies Used
HTML, CSS, JavaScript, Node.js, Express, EJS, MongoDB, Mongoose, axios, moment.js, Passport

## Getting Started
After cloning the repository, run `npm install` to download and install dependencies.

Once that's done, start the application with `npm start` or `nodemon` (if you have it installed). Then, you can visit http://localhost:3000/ to see the running application.

## Next Steps
- implement image upload
- add sorting and filtering for events
- let users remove themselves from entry list
- ability to set up brackets for battles
- browser compatibility testing
- flexibility for number of entry lists (0 / more than 1)
- Google Maps API?

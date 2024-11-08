# Approach & understanding:
This is the REACT  client side of the already completed backend side - API. The heroku app that is the backend server side and contains the database via mongoDB is connected via a connection URI. The API side is what needs to be pushed and deployed to heroku for th eapp to go live. The client side which is this, is the front end of the backend which has been deployed ot heroku. This REACT client side now uses the heroku app url - frozen-bastion-60513 for getting the data and using the endpoint that have been deployed to heroku via the mplix repository.

This is an app which is connected to the mplix DB and api.
It is a simple project which offers a user to signup and login to a movie database where they can view movies and save them as their favorites.
This is the netlify live link for your viewing. 
https://superflixknight.netlify.app/login

The api and htis project are built using the MERN stack.

Features
User is able to sign up (username, password, email, date of birth) and log in with a username and password
User is able to log out and also deregister
App returns all movies existing in the database to the user
App displays a detailed view about a single movie upon clicking on the movie card
It is possible to filter movies with a search feature (search looks through movie title, description, director name, genre name, and genre description to find a match)
User is able to see their profile with their account information and favourite movies
User can add a movie to their favourites list as well as remove it from the list
User can update their account information
Running the Client
Hosting
The client application is hosted on Netlify and can be accessed through the provided link.

A build manages has been utilised which is Parcel.
If you would wish to download this repositery and use it, clone it and do the following:
in terminal run parcel src/index.html
Then, open localhost:1234 in your browser.

Following are the dependencies used in the package.json file for this project:

React
React Bootstrap
React DOM
React Router
Bootstrap
Prop-Types

Development
Parcel
API Used
The client utilizes the movie-api built as a prerequisite for this particular client.

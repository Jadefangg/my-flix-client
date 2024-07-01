Superflix is an app which is connected to the mplix DB and api.
It is a simple project which offers a user to signup and login to a movie database where they can view movies and save them as their favorites.

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

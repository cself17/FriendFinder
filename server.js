//Can't get my submit button to work!!!


//The goal of this app is to have the user fill out a survey and then pare them up with someone who's closest to the user's answers

//PSUDEOCODE
// 1) Set up the server
// 2) Install package.json files and node modules
// 3) Test to see if the server is listening
// 4) Create a data, public, and routing folder
// 5) Data folder contains all of the user's potential friends, public contains all the html files, and routing has the routes of api and html pages
// 6) HTML: create a home page html, and a survey page html with the use of bootstrap
// 7) Create routing for html pages: homepage and survey
// 8) Homepage html has a button that links to the survey page
// 9) In data folder, create an array of friends with each friend being an object, with each object holding each piece of individual information from the survey
// 10) Create an API route in the routing folder and put the api routes in the server file
// 11) In the API file, build the app that matches the user the proper users
// 12) On the survey page, create code to check to see if the form is valid once submitted
// 13) Add a modal from bootstrap to the html survey page, that pops up whenever the user clicks submit
// 14) Connect everything to heroku

//port for the express and body parser
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
//port for any incoming requests
var PORT = process.env.PORT || 3000;

var urlencoderParser = bodyParser.urlencoded({ extended: true});

//parsing
app.use(bodyParser.json({ type: 'application/**json'}))
app.use(bodyParser.raw({ type: 'appliation/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html'}))
app.use(urlencoderParser);


require("./app/route/apiRoutes.js")(app);
require("./app/route/htmlRoutes.js")(app);


//listens
app.listen(PORT, function () {
	//logs on the server side when our server has connected
	console.log("Server listening on: http:localhost:" + PORT);
});
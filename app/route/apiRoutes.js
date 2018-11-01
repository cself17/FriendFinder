var friends = require("../data/friends.js");

module.exports = function (app) {
	app.get("/friends", function(req,res) {
		res.json(friends);
	});
	app.get("/friends", function (req, res) {

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);

		var userData = req.body;
		var userScores = userData.scores;

		console.log(userScores);

		var totalDifference = 0;

		for (var i = 0; i < friends.length; i++) {
			
			//we loop through all the friend possibilities
			console.log(friends[i]);
			totalDifferrence = 0;

			//loop through all the scores for each frriend
			for (var j = 0; j < friend[i].socres[j]; j++) {

				totalDifference += Math.abs(parseInt(userScores[j])) - parseInt(friends[i].scores[j]);

				if (totalDifference <= bestMatch.friendDifference) {
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		friends.push(userData);
		res.json(bestMath);

		res.json(friends);
	});

	app.post('/submit', function(req, res) {
		// set an initial value to compare your score and 'friend' scores
		var lowestDifference = {
			score: 1000,
			personData: null
		};

		// coming from your front-end ajax post call (survey.html)
		var myScore = req.body.score;

		for (var i = 0; i < friends.length; i++) {
			var friend = friends[i].scores;
			var friendScore = 0;

			for (var k = 0; k < friend.length; k++) {
				friendScore += friend[k];
			}

			var absScore = Math.abs(myScore - friendScore);

			if (absScore < lowestDifference.score) {
				lowestDifference.score = absScore;
				lowestDifference.personData = friends[i];
			};
		}
		res.send(lowestDifference.personData);
	})
}
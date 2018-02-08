var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var newName = req.query.name;
	var descrip = req.query.description;
	console.log(newName);
	console.log(descrip);

	var newFriend = {
		"name": newName,
		"description": descrip,
		"imageURL": "http://lorempixel.com/400/400/people"
	}
	console.log(newFriend);

	data.friends.push(newFriend);

	res.render("index", data
	);
 }

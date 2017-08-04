var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var Burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	Burgers.all(function(data) {
		console.log(data)
		var hbsObject = {
      "burgers": data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

});

router.post("/add", function(req, res) {	
	Burgers.create([
		"burger_name",
	], [req.body.burger_name
	], function() {
	res.redirect("/");
	});
});

router.post("/eat/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  Burgers.update({
    "devoured": true
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

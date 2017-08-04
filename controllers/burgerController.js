var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burgers.findAll({})
  .then(function(dbPost) {
		console.log(dbPost)
		var hbsObject = {
      "burgers": dbPost
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/add", function(req, res) {	
  db.Burgers.create({
    "burger_name": req.body.burger_name
  })
  .then(function(dbPost) {
  	res.redirect("/");
  });
});

router.post("/eat/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  db.Burgers.update({
    "devoured": true
  },{
    "where": {
      "id": req.params.id
    }
  })
  .then(function(dbPost) {
  	res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

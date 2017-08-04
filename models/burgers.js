module.exports = function(sequelize, DataTypes) {
	var Burgers = sequelize.define("Burgers", {
		"id": {
			"type": DataTypes.INTEGER,
			"allowNull": false,
			"autoIncrement": true,
			"primaryKey": true
		},
		"burger_name": {
			"type": DataTypes.STRING,
			"allowNull": false,
			"validate": {
				len: [1]
			}
		},
		"devoured": {
			"type": DataTypes.BOOLEAN,
			"allowNull": false,
			"defaultValue": false
		},
		"date": {
			"type": DataTypes.DATE
		}
	},
	{"timestamps": true});
	return Burgers;
};

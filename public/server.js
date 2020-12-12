(() => {
	"use strict";
	const express = require("express");
	const http = require("http");
	const cors = require("cors");
	const app = express();
	const server = http.createServer(app);

	app.use(cors());

	app.get("/", function (req, res) {
		res.send("Hello world!");
	});

	server.listen(5000, function () {
		console.log("Express server listening on port " + server.address().port);
	});
	
	module.exports = app;
})();

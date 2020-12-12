(() => {
	"use strict";
	const express = require("express");
	const http = require("http");
	const app = express();
	const server = http.createServer(app);

	app.get("/", function (req, res) {
		res.send("Hello world!");
	});

	server.listen(3000, function () {
		console.log("Express server listening on port " + server.address().port);
	});
	module.exports = app;
})();

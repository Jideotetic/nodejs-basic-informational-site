require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

app.get(["/", "/about", "/contact-me"], (req, res, next) => {
	var options = {
		root: path.join(__dirname, "project"),
		dotfiles: "deny",
		headers: {
			"x-timestamp": Date.now(),
			"x-sent": true,
		},
	};

	const fileName = req.url == "/" ? "index.html" : req.url + ".html";

	res.sendFile(fileName, options, (err) => {
		if (err) {
			next(err);
		} else {
			console.log("Sent:", fileName);
		}
	});
});

app.use(express.static("public"));

app.get("*", (req, res) => {
	const pathName = path.join(__dirname, "project/");
	res.status(404).sendFile(pathName + "404.html");
});

const PORT = process.env.PORT || "";

app.listen(PORT, () =>
	console.log(`My first Express app - listening on port ${PORT}!`)
);

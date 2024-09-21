const { createServer } = require("node:http");
const { readFile } = require("node:fs");

createServer((req, res) => {
	if (req.url == "/") {
		readFile(
			"/Users/JIDE/Desktop/repos/nodejs-basic-informational-site/project/index.html",
			(err, data) => {
				if (err) throw err;

				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			}
		);
	} else if (req.url == "/about") {
		readFile(
			"/Users/JIDE/Desktop/repos/nodejs-basic-informational-site/project/about.html",
			(err, data) => {
				if (err) throw err;

				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			}
		);
	} else if (req.url == "/contact-me") {
		readFile(
			"/Users/JIDE/Desktop/repos/nodejs-basic-informational-site/project/contact-me.html",
			(err, data) => {
				if (err) throw err;

				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			}
		);
	} else {
		readFile(
			"/Users/JIDE/Desktop/repos/nodejs-basic-informational-site/project/404.html",
			(err, data) => {
				if (err) throw err;

				res.writeHead(404, { "Content-Type": "text/html" });
				res.end(data);
			}
		);
	}
}).listen(8080);

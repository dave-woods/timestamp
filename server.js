const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hello! Testing C9 setup with Express!');
});

app.listen(8080, function() {
	console.log('The app is listening on port 8080');
});

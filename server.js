const monthConversion = function(month) {
	const monthNames = ['January', 'February', 'March',
		'April', 'May', 'June', 'July', 'August',
		'September', 'October', 'November', 'December'];
	const pos = monthNames.indexOf(month)
	if (month === parseInt(month, 10) && month < 12 && month > -1)
		return monthNames[month];
	else if (pos < 12 && pos > -1)
		return pos;
};

const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('This is a Timestamp Microservice application built for Free Code Camp');
});

app.get('/:tag', function(req, res) {
	const tag = req.params.tag;
	const dt = new Date(parseInt(tag, 10) * 1000);
	const bits = tag.split(' ');
	var ndt = new Date(0);
	if (bits.length === 3)
		ndt = new Date(bits[2], monthConversion(bits[0]), bits[1].slice(0, -1), 0, 0, 0);
	const resObj = {unix: null, natural: null};

	if (dt.getTime() > 0)
	{
		resObj.unix = tag;
		resObj.natural = monthConversion(dt.getUTCMonth()) + ' ' + dt.getUTCDate() + ', ' + dt.getUTCFullYear();
	}
	else if (ndt.getTime() > 0)
	{
		resObj.unix = ndt.getTime() / 1000;
		resObj.natural = tag
	}
	res.json(resObj);
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log(`The app is listening on port ${port}`);
});

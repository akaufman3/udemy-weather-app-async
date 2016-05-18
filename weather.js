var request = require('request');
var key = require('./weatherKeys.js');

module.exports = function(location, callback) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=' + key.api_key;

	if (!location) {
		return callback('No location provided');
	}
	
	request({
		url: url,
		// want to request json data
		json: true
	}, function(error, response, body){
		if (error) {
			callback('Unable to fetch weather.');
		} else {
			// 4 = number of indents in formatting
			// console.log(JSON.stringify(body, null, 4));
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}
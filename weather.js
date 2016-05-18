var request = require('request');
var key = require('./weatherKeys.js');

module.exports = function(location) {
	return new Promise(function(resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=' + key.api_key;

		if (!location) {
			return reject('No location was provided');
		}
		
		request({
			url: url,
			// want to request json data
			json: true
		}, function(error, response, body){
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				// 4 = number of indents in formatting
				// console.log(JSON.stringify(body, null, 4));
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}
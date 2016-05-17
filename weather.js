var request = require('request');
var key = requre('./weatherKeys.js');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=' + key.api_key;

module.exports = function(callback) {
	request({
		url: url,
		// want to request json data
		json: true
	}, function(error, response, body){
		if (error) {
			console.log('Unable to fetch weather.');
		} else {
			// 4 = number of indents in formatting
			console.log(JSON.stringify(body, null, 4));
			console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}
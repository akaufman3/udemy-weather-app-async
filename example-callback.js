var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=7cece7e7ad0e01a2f316e521d4a09867'

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

// shows up before the above console.logs because the request has to wait for the data to be returned
console.log('After request');
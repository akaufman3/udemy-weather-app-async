var request = require('request');
var key = require('./weatherKeys.js');
// // callback
// // function doWork(data, callback) {
// // 	callback('done');
// // }

// // promise
// function doWorkPromise(data) {
// 	// creating a new promise and returning promise so the caller has access to it
// 	return new Promise(function(resolve, reject) {
// 		reject('everything is broken!');
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// // get the data then do this callback
// doWorkPromise('some data').then(function(data) {
// 	console.log(data);
// }, function(error){
// 	console.log(error);
// });

function getWeather(location) {
	return new Promise(function(resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=' + key.api_key;

		if (!location) {
			return reject('No locatoin was provided');
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


getWeather('san francisco').then(function(currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});



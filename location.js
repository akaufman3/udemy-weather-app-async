var request = require('request');
// a way to fetch a users location based on the IP address
var url = 'http://ipinfo.io';

module.exports = function(location) {
	return new Promise(function(resolve, reject) {
		request({
			url: url,
			// want to request json data
			json: true
		}, function(error, response, body){
			if (error) {
				reject('Unable to get location.');
			} else {
				// 4 = number of indents in formatting
				// console.log(JSON.stringify(body, null, 4));
				resolve(body);
			}
		});
	});
};
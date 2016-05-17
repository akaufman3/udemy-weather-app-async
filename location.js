var request = require('request');
// a way to fetch a users location based on the IP address
var url = 'http://ipinfo.io';

module.exports = function(callback) {
	request({
		url: url,
		// want to request json data
		json: true
	}, function(error, response, body){
		if (error) {
			callback();
		} else {
			// 4 = number of indents in formatting
			// console.log(JSON.stringify(body, null, 4));
			callback(body);
		}
	});
}
// sets whatever is on module.exports in weather.js to weather variable
var weather = require('./weather.js');

weather(function(currentWeather) {
	console.log(currentWeather);
});

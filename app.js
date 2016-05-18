// sets whatever is on module.exports in weather.js to weather variable
var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.options('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');
	weather(argv.l).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error);
	});
} else {
	console.log('Location was not provided');
	location().then(function(location) {
		return weather(location.city);
	}).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	});
}

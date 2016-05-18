// callback
// function doWork(data, callback) {
// 	callback('done');
// }

// promise
function doWorkPromise(data) {
	// creating a new promise and returning promise so the caller has access to it
	return new Promise(function(resolve, reject) {
		reject('everything is broken!');
		// reject({
		// 	error: 'something bad happened'
		// });
	});
}

// get the data then do this callback
doWorkPromise('some data').then(function(data) {
	console.log(data);
}, function(error){
	console.log(error);
});
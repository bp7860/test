
var Items = null;
var fileSystemHelper = new FileSystemHelper();

//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
	console.log('onDeviceReady');
	readFileButton.addEventListener("click",
		function() {
			fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError );
		});
		// Online
		$.ajax({
			dataType: "json",
			url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
			success: function(data) {
				console.log('_onSuccessAjax');
				_onSuccessAjax(data);
			}
		});

	
}
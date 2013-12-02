
var Items = null;

//NOTE: Cordova File api has some issues with file reading in iOS 6
document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {

	var fileSystemHelper = new FileSystemHelper();


	if (navigator.onLine) {
		// Online
		$.ajax({
			dataType: "json",
			url: "http://www.campingsuedtirol.com/campingplaetze-suedtirol.html?json=1",
			beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
			complete: function() { $.mobile.hidePageLoadingMsg(); }, //Hide spinner
			success: function(data) {
				$.mobile.hidePageLoadingMsg();
				Data = data;
				fileSystemHelper.writeLine( 'json.txt', 'test', _onSuccessW, _onError );
				showList();
			}
		});

	} else {
		showList();
	}
	

	
}

function _onSuccessW(value) {

}
function _onSuccessR(value) {
	Items = jQuery.parseJSON(value);
}
function _onError(error) {

}

function showList() {
	fileSystemHelper.readTextFromFile( 'json.txt', _onSuccessR, _onError);

	$('#status').html('showlist');

}
